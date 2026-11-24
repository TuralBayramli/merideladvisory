"""Render a timeline page to a vertical MP4, optionally fitted to a voiceover.

  python3 social/video/render.py stills PAGE OUTDIR t1 t2 ...
  python3 social/video/render.py video  PAGE OUTFILE [AUDIO_DIR]

AUDIO_DIR holds p01.mp3, p02.mp3, ... with one paragraph per scene (made by
the "Make voiceover" workflow). Each scene is then slowed down until its
paragraph fits, and the voice is mixed in. Needs Chrome, Playwright and ffmpeg.
"""
import json
import os
import subprocess
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

FPS = 30
W, H = 1080, 1920
LEAD = 0.4       # picture before the voice starts in each scene
GAP = 0.3        # silence after the voice before the scene fades out
FADE = 0.45      # scene fade-out length on the page timeline
END_HOLD = 1.8   # time the closing scene stays after the voice ends


def open_page(p, page_path):
    browser = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox', '--allow-file-access-from-files'])
    page = browser.new_page(viewport={'width': W, 'height': H}, device_scale_factor=1)
    page.goto(Path(page_path).resolve().as_uri())
    page.evaluate('document.fonts.ready.then(() => 1)')
    page.wait_for_timeout(300)
    bad = page.evaluate("[...document.fonts].filter(f => f.status === 'error').map(f => f.family)")
    if bad:
        raise SystemExit(f'fonts failed: {bad}')
    return browser, page


def audio_length(path):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(path)],
                         capture_output=True, text=True, check=True)
    return float(out.stdout.strip())


def plan(scenes, voice):
    """Real length of each scene: the page's own length, or longer to fit the voice."""
    out = []
    for i, (a, b) in enumerate(scenes):
        span = b - a
        length = span
        if voice:
            v = voice[i]
            if i == len(scenes) - 1:
                length = max(span, LEAD + v + END_HOLD)
            else:
                # The fade stretches with the scene, so it must start after the voice ends.
                length = max(span, (LEAD + v + GAP) / (1 - FADE / span))
        out.append((a, b, round(length * FPS)))
    return out


def stills(page_path, outdir, times):
    os.makedirs(outdir, exist_ok=True)
    with sync_playwright() as p:
        browser, page = open_page(p, page_path)
        for t in times:
            page.evaluate(f'seek({t})')
            page.screenshot(path=f'{outdir}/t{float(t):05.1f}.jpg', type='jpeg', quality=92)
        browser.close()


def mix_voice(clips, starts, total, outfile):
    cmd = ['ffmpeg', '-y', '-loglevel', 'error']
    for c in clips:
        cmd += ['-i', str(c)]
    parts = [f'[{i}:a]adelay={int((s + LEAD) * 1000)}:all=1[a{i}]' for i, s in enumerate(starts)]
    mix = ''.join(f'[a{i}]' for i in range(len(clips)))
    graph = ';'.join(parts) + f';{mix}amix=inputs={len(clips)}:normalize=0,apad,atrim=0:{total:.3f},loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000[out]'
    cmd += ['-filter_complex', graph, '-map', '[out]', '-c:a', 'aac', '-b:a', '192k', str(outfile)]
    subprocess.run(cmd, check=True)


def video(page_path, outfile, audio_dir=None):
    outfile = Path(outfile)
    work = outfile.with_suffix('')
    os.makedirs(work, exist_ok=True)
    with sync_playwright() as p:
        browser, page = open_page(p, page_path)
        scenes = page.evaluate('window.SCENES')
        clips = voice = None
        if audio_dir:
            clips = sorted(Path(audio_dir).glob('p*.mp3'))
            if len(clips) != len(scenes):
                raise SystemExit(f'{len(clips)} voice paragraphs for {len(scenes)} scenes')
            voice = [audio_length(c) for c in clips]
        steps = plan(scenes, voice)
        parts, starts, t0 = [], [], 0.0
        for i, (a, b, frames) in enumerate(steps):
            final = work / f'scene{i + 1:02d}.mp4'
            tmp = work / f'scene{i + 1:02d}.part.mp4'
            enc = subprocess.Popen(
                ['ffmpeg', '-y', '-loglevel', 'error', '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', str(FPS), '-i', '-',
                 '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', '-pix_fmt', 'yuv420p', '-r', str(FPS), str(tmp)],
                stdin=subprocess.PIPE)
            for k in range(frames):
                page.evaluate(f'seek({a + (b - a) * k / frames})')
                enc.stdin.write(page.screenshot(type='jpeg', quality=92))
            enc.stdin.close()
            if enc.wait() != 0:
                raise SystemExit(f'ffmpeg failed on scene {i + 1}')
            tmp.rename(final)
            parts.append(final)
            starts.append(t0)
            t0 += frames / FPS
            print(f'scene {i + 1}/{len(steps)} done ({frames / FPS:.1f}s)', flush=True)
        browser.close()

    lst = work / 'list.txt'
    lst.write_text(''.join(f"file '{x.name}'\n" for x in parts))
    joined = work / 'picture.mp4'
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', str(lst), '-c', 'copy', str(joined)], check=True)
    tmp = outfile.with_name(outfile.stem + '.part.mp4')
    if clips:
        track = work / 'voice.m4a'
        mix_voice(clips, starts, t0, track)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(joined), '-i', str(track), '-map', '0:v', '-map', '1:a',
                        '-c', 'copy', '-movflags', '+faststart', str(tmp)], check=True)
    else:
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(joined), '-c', 'copy', '-movflags', '+faststart', str(tmp)], check=True)
    tmp.rename(outfile)
    (work / 'timing.json').write_text(json.dumps({'scene_starts': starts, 'total': t0}, indent=1))
    print(f'wrote {outfile} ({t0:.1f}s)', flush=True)


if __name__ == '__main__':
    mode = sys.argv[1]
    if mode == 'stills':
        stills(sys.argv[2], sys.argv[3], sys.argv[4:])
    else:
        video(sys.argv[2], sys.argv[3], sys.argv[4] if len(sys.argv) > 4 else None)
