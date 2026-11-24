"""Put background music under a rendered video.

  python3 social/video/add_music.py WORKDIR TRACK OUTFILE [--build SECONDS]

WORKDIR is the folder render.py leaves next to a video (picture.mp4 and
timing.json). With --build, the music starts at the point where that moment of
the track (its first build-up, in seconds) lands on the start of the second
scene. The music fades in and out and is set to social-media loudness.
"""
import argparse
import json
import subprocess
from pathlib import Path

FADE_IN = 0.8
FADE_OUT = 3.0
LOUDNESS = 'I=-16:TP=-1.5:LRA=11'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('workdir')
    ap.add_argument('track')
    ap.add_argument('outfile')
    ap.add_argument('--build', type=float, default=None, help='seconds into the track where it builds up')
    a = ap.parse_args()

    work = Path(a.workdir)
    timing = json.loads((work / 'timing.json').read_text())
    total = timing['total']
    starts = timing['scene_starts']
    offset = max(0.0, a.build - starts[1]) if a.build is not None and len(starts) > 1 else 0.0
    chain = (f'atrim=start={offset:.3f}:duration={total:.3f},asetpts=PTS-STARTPTS,'
             f'afade=t=in:d={FADE_IN},afade=t=out:st={total - FADE_OUT:.3f}:d={FADE_OUT}')

    # Measure first, then set the loudness with one even gain change.
    log = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', a.track, '-af',
                          f'{chain},loudnorm={LOUDNESS}:print_format=json', '-f', 'null', '-'],
                         capture_output=True, text=True, check=True).stderr
    m = json.loads(log[log.rindex('{'):log.rindex('}') + 1])
    norm = (f'loudnorm={LOUDNESS}:measured_I={m["input_i"]}:measured_TP={m["input_tp"]}:measured_LRA={m["input_lra"]}'
            f':measured_thresh={m["input_thresh"]}:offset={m["target_offset"]}:linear=true')

    out = Path(a.outfile)
    tmp = out.with_name(out.stem + '.part.mp4')
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(work / 'picture.mp4'), '-i', a.track,
                    '-filter_complex', f'[1:a]{chain},{norm},aresample=48000[a]',
                    '-map', '0:v', '-map', '[a]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k',
                    '-shortest', '-movflags', '+faststart', str(tmp)], check=True)
    tmp.rename(out)
    print(f'wrote {out} ({total:.1f}s, music from {offset:.1f}s of the track)')


if __name__ == '__main__':
    main()
