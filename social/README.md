# Meridel social content

Before making anything, read [`BRAND.md`](BRAND.md) (voice, audiences, rules, formats) and [`CONTENT-LOG.md`](CONTENT-LOG.md) (what is already published). Add every new post to the log.

## Videos

Vertical (1080×1920) animated videos for Instagram Reels and LinkedIn, in the site's colours and fonts. Nothing in this folder is part of the website.

| Folder | What is in it |
|---|---|
| `video/` | One HTML page per video (`xidmet-xerci.html`, `tanitim.html`), the shared animation engine and the render script |
| `voice/` | The Azerbaijani voiceover scripts, one paragraph per scene, and `tts.py` |
| `audio/` | Speech made by the **Make voiceover** workflow, per script and voice |
| `music/` | Background music from Pixabay (see `music/CREDITS.md`), downloaded by the **Fetch music** workflow |

## Making a video with a voice

1. Edit or add a script in `voice/`. Keep one paragraph per scene, separated by a blank line. Write numbers as words and English names as they sound (`Meridel Ədvayzori`).
2. Run **Actions → Make voiceover → Run workflow**. It uses the `AZURE_SPEECH_KEY` and `AZURE_SPEECH_REGION` repository secrets and saves MP3s in `audio/<script>/<voice>/`.
3. Render, from the repository root, with Node, Python Playwright, Chrome and ffmpeg installed:

   ```
   npm install
   python3 social/video/build_fonts.py
   python3 social/video/render.py video social/video/xidmet-xerci.html social/out/xidmet-xerci.mp4 social/audio/xidmet-xerci/az-AZ-BabekNeural
   ```

Each scene is slowed down until its paragraph fits, then the voice is mixed in at social-media loudness.

`video/map.mjs` rebuilds the trade-lane map in `video/map.js` if the cities or routes change (`node social/video/map.mjs`).

## Background music instead of a voice

Render the video once (with a voice folder if you want its slower pace), then put a track under it:

```
python3 social/video/add_music.py social/out/meridel-xidmet-xerci social/music/elegant.mp3 social/out/meridel-xidmet-xerci-music.mp4 --build 16.4
```

`--build` is the moment the track lifts (16.4 s in `elegant.mp3`); it is lined up with the start of the second scene.
