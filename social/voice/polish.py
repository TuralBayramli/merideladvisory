"""Studio finish for the generated voice: a little warmth and presence, softer
s sounds, gentle levelling, a hint of a small room and even loudness.

  python3 social/voice/polish.py OUT.mp3 IN1.mp3 [IN2.mp3 ...]

joins the inputs with short pauses (for listening samples). render.py runs
polish() on the whole voice track when it puts the voice into a video.
Needs ffmpeg and numpy.
"""
import json
import subprocess
import sys
import tempfile
from pathlib import Path

import numpy as np

RATE = 48000
PAUSE = 0.6
# In order: cut rumble, warmth, presence, softer s sounds, gentle levelling.
CHAIN = ('highpass=f=80,'
         'equalizer=f=180:t=q:w=1.2:g=1,'
         'equalizer=f=3200:t=q:w=1.0:g=2,'
         'deesser=i=0.45,'
         'acompressor=threshold=0.1:ratio=2.5:attack=10:release=150:makeup=1.4')
ROOM = 0.10   # level of the room reflections next to the direct voice
LOUDNESS = 'I=-16:TP=-1.5:LRA=11'
MP3 = ('-c:a', 'libmp3lame', '-b:a', '192k')


def room_ir(path: Path, rt60=0.28, length=0.35, predelay=0.006, seed=7):
    """Impulse response of a small, soft room: decaying noise with damped highs."""
    rng = np.random.default_rng(seed)
    n = int(length * RATE)
    t = np.arange(n) / RATE
    tail = rng.standard_normal(n) * np.exp(-6.91 * t / rt60)
    tail = np.convolve(tail, np.ones(6) / 6, mode='same')
    ir = np.concatenate([np.zeros(int(predelay * RATE)), tail])
    ir /= np.sqrt(np.sum(ir ** 2))   # same energy as the direct voice
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'f32le', '-ar', str(RATE), '-ac', '1', '-i', '-',
                    '-c:a', 'pcm_f32le', str(path)], input=ir.astype('<f4').tobytes(), check=True)


def polish(src, dst, codec=MP3):
    with tempfile.TemporaryDirectory() as tmp:
        ir = Path(tmp) / 'room.wav'
        room_ir(ir)
        graph = (f'[0:a]aresample={RATE},{CHAIN},asplit=2[dry][w];'
                 '[w][1:a]afir=gtype=none,highpass=f=250,lowpass=f=7000[wet];'
                 f"[dry][wet]amix=inputs=2:duration=first:weights='1 {ROOM}':normalize=0")
        base = ['ffmpeg', '-y', '-hide_banner', '-nostats', '-i', str(src), '-i', str(ir)]
        # Measure first, then set the loudness in one even step (no pumping).
        log = subprocess.run(base + ['-filter_complex', f'{graph},loudnorm={LOUDNESS}:print_format=json', '-f', 'null', '-'],
                             capture_output=True, text=True, check=True).stderr
        m = json.loads(log[log.rindex('{'):log.rindex('}') + 1])
        norm = (f'loudnorm={LOUDNESS}:measured_I={m["input_i"]}:measured_TP={m["input_tp"]}:measured_LRA={m["input_lra"]}'
                f':measured_thresh={m["input_thresh"]}:offset={m["target_offset"]}:linear=true')
        subprocess.run(base + ['-loglevel', 'error', '-filter_complex', f'{graph},{norm},aresample={RATE}', *codec, str(dst)],
                       check=True)


def sample(dst, clips):
    """Join clips with short pauses and polish the result."""
    with tempfile.TemporaryDirectory() as tmp:
        joined = Path(tmp) / 'joined.wav'
        cmd = ['ffmpeg', '-y', '-loglevel', 'error']
        for c in clips:
            cmd += ['-i', str(c)]
        pads = ';'.join(f'[{i}:a]aresample={RATE},apad=pad_dur={PAUSE}[s{i}]' for i in range(len(clips)))
        cat = ''.join(f'[s{i}]' for i in range(len(clips))) + f'concat=n={len(clips)}:v=0:a=1'
        subprocess.run(cmd + ['-filter_complex', f'{pads};{cat}', '-c:a', 'pcm_s24le', str(joined)], check=True)
        polish(joined, dst)


if __name__ == '__main__':
    if len(sys.argv) < 3:
        raise SystemExit(__doc__)
    sample(sys.argv[1], sys.argv[2:])
