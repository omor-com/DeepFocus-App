# DeepFocus Deployment & Verification Guide (GitHub Pages / Android Phone)

This guide explains how to update **https://deepfocus.asf.run/** directly from an Android phone browser so all CSS, JavaScript, subpages, and Bangla default rendering work properly.

---

## Why the Previous Deployment Appeared Unstyled

1. GitHub Pages was publishing the **repository root (`/`)** while `assets/` only lived inside `public/` and `deepfocus-landing/`.
2. Because `.nojekyll` was missing and `README.md` existed at the root, GitHub Pages automatically compiled its default **Jekyll Primer theme** into `/assets/css/style.css` (76 KB), replacing the real DeepFocus stylesheet.
3. Meanwhile, `/assets/js/main.js`, `/privacy.html`, `/sitemap.xml`, and other root pages returned **404 / 503**.

All static files (`.nojekyll`, `assets/`, `index.html`, `features.html`, `faq.html`, `privacy.html`, `terms.html`, `404.html`, `robots.txt`, `sitemap.xml`) are now placed at **both** the repository root and inside `deepfocus-landing/`.

---

## Updating Your Live GitHub Repository from an Android Phone

1. Open Chrome on Android and open your GitHub repository connected to `https://deepfocus.asf.run/`.
2. Make sure **`.nojekyll`** is uploaded to the repository root:
   - Tap **Add file → Create new file**, type `.nojekyll` as the filename, leave the content empty, and tap **Commit changes**.
   *(Important: GitHub web file pickers sometimes skip hidden dot-files—creating `.nojekyll` via **Create new file** guarantees it exists!)*
3. Upload/replace the root files:
   - `index.html`
   - `features.html`
   - `faq.html`
   - `privacy.html`
   - `terms.html`
   - `404.html`
   - `robots.txt`
   - `sitemap.xml`
4. Ensure `assets/css/style.css` and `assets/js/main.js` exist at the repository root:
   - If `assets/css/style.css` does not exist in the root `assets/` folder yet, tap **Add file → Create new file**, enter `assets/css/style.css`, paste the stylesheet, and commit.
   - Repeat for `assets/js/main.js`.
5. Keep your custom domain (`CNAME` file containing `deepfocus.asf.run`) intact in the repository root if GitHub Pages uses a `CNAME` file.
6. Wait 1–2 minutes for GitHub Pages to finish deploying (check the **Actions** tab on GitHub for the green checkmark).

---

## Post-Deploy Verification Checklist on Android

1. Open `https://deepfocus.asf.run/` in an **Incognito / Private** tab on Android Chrome (to avoid old cache).
2. Confirm the page renders in **Bangla (`বাংলা`)** with full navy/blue/white styling and zero horizontal overflow.
3. Confirm these URLs load cleanly:
   - `https://deepfocus.asf.run/assets/css/style.css`
   - `https://deepfocus.asf.run/assets/js/main.js`
   - `https://deepfocus.asf.run/features.html`
   - `https://deepfocus.asf.run/faq.html`
   - `https://deepfocus.asf.run/privacy.html`
   - `https://deepfocus.asf.run/terms.html`
   - `https://deepfocus.asf.run/robots.txt`
   - `https://deepfocus.asf.run/sitemap.xml`
4. Tap **EN** in the header and confirm the entire page switches cleanly to English; tap **বাংলা** to switch back to Bangla.
5. Tap **DeepFocus কিনুন** and confirm it opens `https://www.supportkori.com/muhammedomor/extras/deepfocus-app-ts3g`.

---

## Google Search Console & Bing Webmaster Tools

1. In **Google Search Console**, verify `https://deepfocus.asf.run/` and submit `https://deepfocus.asf.run/sitemap.xml`.
2. Use **URL Inspection → Test Live URL** to confirm `Googlebot` sees the styled Bangla page with `200 OK`.
3. In **Bing Webmaster Tools**, add `https://deepfocus.asf.run/` and submit `sitemap.xml`.
