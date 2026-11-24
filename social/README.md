# Meridel social videos

Vertical (1080×1920) animated videos for Instagram Reels and LinkedIn, in the site's colours and fonts. Nothing in this folder is part of the website.

| Folder | What is in it |
|---|---|
| `video/` | One HTML page per video (`xidmet-xerci.html`, `tanitim.html`), the shared animation engine and the render script |
| `voice/` | The Azerbaijani voiceover scripts, one paragraph per scene, `tts.py` (speech) and `polish.py` (studio finish) |
| `audio/` | Speech made by the **Make voiceover** workflow, per script and voice |

## Making a video with a voice

1. Edit or add a script in `voice/`. Keep one paragraph per scene, separated by a blank line. Write numbers as words and English names as they sound (`Meridel Ədvayzori`). Put `*stars*` around the one or two words per sentence a speaker would stress.
2. Run **Actions → Make voiceover → Run workflow**. It uses the `AZURE_SPEECH_KEY` and `AZURE_SPEECH_REGION` repository secrets and saves MP3s in `audio/<script>/<voice>[-<label>]/`. With intonation set to `expressive` (the default), each sentence gets its own rise and fall, starred words are stressed and questions get a short pause.
3. Render, from the repository root, with Node, Python Playwright, Chrome and ffmpeg installed:

   ```
   npm install
   python3 social/video/build_fonts.py
   python3 social/video/render.py video social/video/xidmet-xerci.html social/out/xidmet-xerci.mp4 social/audio/xidmet-xerci/az-AZ-BabekNeural
   ```

Each scene is slowed down until its paragraph fits. The voice then gets a studio finish (a little warmth and presence, softer s sounds, gentle levelling, a hint of a small room) and is mixed in at social-media loudness.

To hear a few paragraphs with the same finish: `python3 social/voice/polish.py sample.mp3 audio/<script>/<version>/p01.mp3 audio/<script>/<version>/p02.mp3`

`video/map.mjs` rebuilds the trade-lane map in `video/map.js` if the cities or routes change (`node social/video/map.mjs`).
