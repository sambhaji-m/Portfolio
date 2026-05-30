# Sambhaji Murdare — Portfolio

A premium, cinematic developer portfolio built with **HTML**, **CSS**, and **JavaScript** only — no frameworks.

## File Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── profile-placeholder.png   ← Replace with your photo
    │   ├── project-youhonk.png
    │   ├── project-automation.png
    │   ├── project-firebase.png
    │   ├── project-iims.png
    │   └── og-image.png              ← Replace for social sharing (1200×630)
    ├── videos/
    │   ├── hero-intro.mp4            ← Replace with your hero video
    │   └── hero-intro.webm
    └── resume/
        └── Sambhaji_Murdare_Resume.pdf ← Replace with your real resume
```

## Replace Your Assets

**Full step-by-step image guide:** see [`assets/images/IMAGE_GUIDE.md`](assets/images/IMAGE_GUIDE.md)

### Resume
Already at:
```
assets/resume/Sambhaji_Murdare_Resume.pdf
```
Replace this file whenever you update your resume. All Download Resume buttons link here.

### Social links (from resume)
- **LinkedIn:** https://www.linkedin.com/in/sambhaji-murdare/
- **GitHub:** https://github.com/sambhaji-m

These are set in `index.html` and `script.js` (`GITHUB_URL`, `LINKEDIN_URL`).

### Images — simple summary

| File | What to put | Size |
|------|-------------|------|
| `profile-placeholder.png` | Your professional photo | 400×400 px square |
| `project-youhonk.png` | Youhonk admin panel screenshot | 1600×900 px |
| `project-automation.png` | Automation / Python / Excel screenshot | 1600×900 px |
| `project-firebase.png` | Firebase / notification screenshot | 1600×900 px |
| `project-iims.png` | IIMS Django app screenshot | 1600×900 px |
| `og-image.png` | Social share banner (name + title) | **1200×630 px** |

Copy each file into `assets/images/` with the **exact name** above. No HTML changes needed.

## Run Locally

### Option 1 — VS Code Live Server
1. Open the `portfolio` folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

### Option 2 — Python
```bash
cd portfolio
python3 -m http.server 8080
```
Open: http://localhost:8080

### Option 3 — Node.js (npx)
```bash
cd portfolio
npx serve .
```

> Use a local server (not `file://`) so video loading and fetch checks work correctly.

## Deploy

### GitHub Pages

1. Create a GitHub repository
2. Push the `portfolio` folder contents to the repo root (or use a `docs/` folder)
3. Go to **Settings → Pages**
4. Source: **Deploy from branch** → `main` → `/ (root)` or `/docs`
5. Your site will be at: `https://yourusername.github.io/repo-name/`

If deploying from a subfolder, update asset paths or use a project site at `username.github.io`.

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. From the `portfolio` folder:
   ```bash
   cd portfolio
   vercel
   ```
3. Or connect your GitHub repo at [vercel.com](https://vercel.com):
   - **Import Project** → select repo
   - Framework Preset: **Other**
   - Root Directory: `portfolio` (if nested)
   - Build Command: leave empty
   - Output Directory: `.`

No build step required — static HTML/CSS/JS deploys as-is.

## Features

- Cinematic terminal preloader with progress bar
- Sticky blurred navbar with active section highlight
- Hero with video + animated fallback
- Rotating hero subtitle phrases
- Timeline experience section
- Glassmorphism project cards with modal details
- Grouped skills (no fake percentage bars)
- Certificates section
- Contact section
- Back-to-top button
- Scroll reveal animations
- Subtle 3D tilt on project cards
- `prefers-reduced-motion` support
- Keyboard-accessible modals (ESC, focus trap)
- SEO & Open Graph meta tags

## Customize Content

| What | Where |
|------|--------|
| Hero text | `index.html` → `#home` |
| About | `index.html` → `#about` |
| Experience | `index.html` → `#experience` |
| Projects (cards) | `index.html` → `#projects` |
| Project modal details | `script.js` → `PROJECTS` object |
| Skills | `index.html` → `#skills` |
| Colors & fonts | `style.css` → `:root` |

## Browser Support

Modern evergreen browsers: Chrome, Firefox, Safari, Edge.

## License

Personal portfolio — © 2026 Sambhaji Murdare.
