# Portfolio Image Guide — Step by Step

This folder holds **every image** your portfolio uses.  
Replace the placeholder files with your real images **using the exact same file names**.

---

## Quick rule

1. Prepare your image (screenshot or photo).
2. Resize/crop to the recommended size below.
3. Save as **PNG** or **JPG**.
4. Copy into `portfolio/assets/images/` and **replace** the existing file.
5. Refresh the browser (hard refresh: `Cmd + Shift + R` on Mac).

You do **not** need to change `index.html` if you keep the same file names.

---

## 1. Profile photo

| | |
|---|---|
| **File name** | `profile-placeholder.png` |
| **Used in** | About section (round avatar next to your name) |
| **Recommended size** | 400 × 400 px (square) |
| **Format** | PNG or JPG |
| **What to use** | Professional headshot, shoulders up, plain or blurred background |
| **Tips** | Good lighting, neutral background, face centered. Crop square before saving. |

**How to add:**
```bash
# Example: copy your photo into the folder and rename it
cp ~/Downloads/my-photo.jpg profile-placeholder.png
```

---

## 2. Project — Youhonk

| | |
|---|---|
| **File name** | `project-youhonk.png` |
| **Used in** | Featured Projects → Youhonk card |
| **Recommended size** | 1600 × 900 px (16:9) |
| **What to use** | Admin panel screenshot (vendor/workshop/order screen). Blur sensitive data if needed. |
| **If private** | Use a mock UI screenshot, dashboard wireframe, or branded banner with Youhonk + tech stack text |

---

## 3. Project — Automation system

| | |
|---|---|
| **File name** | `project-automation.png` |
| **Used in** | Featured Projects → E-commerce automation card |
| **Recommended size** | 1600 × 900 px |
| **What to use** | Terminal output, Python script snippet, Excel/PDF pipeline diagram, or Selenium browser screenshot (hide credentials) |

---

## 4. Project — Firebase notifications

| | |
|---|---|
| **File name** | `project-firebase.png` |
| **Used in** | Featured Projects → Firebase card |
| **Recommended size** | 1600 × 900 px |
| **What to use** | Firebase console, API response JSON, notification on phone mockup, or architecture diagram |

---

## 5. Project — IIMS (Inquiry Management)

| | |
|---|---|
| **File name** | `project-iims.png` |
| **Used in** | Featured Projects → IIMS card |
| **Recommended size** | 1600 × 900 px |
| **What to use** | Django admin or inquiry list/dashboard screenshot |

---

## 6. Open Graph / social preview image

| | |
|---|---|
| **File name** | `og-image.png` |
| **Used in** | LinkedIn/Twitter/WhatsApp link preview + hero video poster fallback |
| **Recommended size** | **1200 × 630 px** (required for social cards) |
| **What to use** | Banner with: **Sambhaji Murdare**, **Software Developer**, dark background, cyan accent, optional tech tags |
| **Tools** | Canva, Figma, or Photoshop — search template “Open Graph 1200x630” |

---

## 7. Hero video poster (optional separate file)

The hero video uses `og-image.png` as its poster.  
If you want a different poster, edit `index.html` line with `poster="assets/images/og-image.png"` and point to another image.

---

## 8. Hero video (not in this folder)

Videos go in `portfolio/assets/videos/`:

| File | Purpose |
|------|---------|
| `hero-intro.mp4` | Hero background video (MP4) |
| `hero-intro.webm` | Hero background video (WebM, optional but recommended) |

**Specs:** muted, looped, no audio, 1280×720 or 1920×1080, under 8 MB.  
If missing, the site shows the animated tech-panel fallback automatically.

---

## 9. Resume (not in this folder)

| File | Path |
|------|------|
| `Sambhaji_Murdare_Resume.pdf` | `portfolio/assets/resume/` |

Already added. Update by replacing that PDF when you revise your resume.

---

## Folder structure (final)

```
portfolio/assets/
├── images/
│   ├── profile-placeholder.png   ← YOUR PHOTO
│   ├── project-youhonk.png       ← Youhonk screenshot
│   ├── project-automation.png    ← Automation screenshot
│   ├── project-firebase.png      ← Firebase screenshot
│   ├── project-iims.png          ← IIMS screenshot
│   ├── og-image.png              ← Social share banner
│   └── IMAGE_GUIDE.md            ← This file
├── videos/
│   ├── hero-intro.mp4            ← Optional hero video
│   └── hero-intro.webm
└── resume/
    └── Sambhaji_Murdare_Resume.pdf
```

---

## Free tools to resize images

- **Mac Preview:** Tools → Adjust Size
- **Online:** squoosh.app, tinypng.com
- **Canva:** custom size export for og-image

---

## Checklist before going live

- [ ] Profile photo replaced
- [ ] All 4 project images replaced
- [ ] og-image.png created (1200×630)
- [ ] Hero video added OR fallback is acceptable
- [ ] Resume PDF is latest version
- [ ] No sensitive passwords/keys visible in screenshots
