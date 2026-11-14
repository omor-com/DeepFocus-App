# DeepFocus Deployment & Search Verification Guide (Android Phone Friendly)

This guide explains how to publish, configure, and verify the **DeepFocus** static website directly from an **Android phone browser** without needing a laptop, terminal, or paid hosting.

---

## 1. Free vs. Paid Options

- **GitHub Account & Public Repository:** Free
- **GitHub Pages Hosting:** Free for public repositories (`https://yourusername.github.io/deepfocus-landing/`)
- **Vercel Hobby Hosting:** Free for personal static projects (`https://deepfocus-landing.vercel.app`)
- **Google Search Console & Bing Webmaster Tools:** Free
- **Custom Domain (e.g., `deepfocus.com.bd`):** Optional & Paid (not required to start)

> **Security Reminder:** Never put passwords, GitHub personal access tokens, or secret keys inside any HTML, CSS, JS, or Markdown file in a public repository.

---

## 2. Which Files to Upload and Where They Belong

Upload the contents of the `deepfocus-landing/` folder so the repository root contains:

- `index.html`
- `features.html`
- `faq.html`
- `privacy.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `assets/css/style.css`
- `assets/js/main.js`

---

## 3. Deploying from an Android Phone (GitHub Pages — No Computer Needed)

1. Open Chrome on your Android phone and sign in to **github.com**.
2. Tap the **+** icon at the top right and select **New repository**.
3. Enter a repository name (for example, `deepfocus-landing`), choose **Public**, and tap **Create repository**.
4. On the repository page, tap **uploading an existing file** (or **Add file → Upload files**).
5. Upload the root HTML/TXT/XML files (`index.html`, `features.html`, `faq.html`, `privacy.html`, `404.html`, `robots.txt`, `sitemap.xml`) and tap **Commit changes**.
6. To create the `assets/css/` and `assets/js/` folders via the GitHub mobile web interface:
   - Tap **Add file → Create new file**.
   - Type `assets/css/style.css` in the filename box (typing `/` automatically creates the folders!).
   - Paste the contents of `style.css` and tap **Commit changes**.
   - Repeat for `assets/js/main.js`.
   *(Tip: If you have the static files extracted in your phone's Files app, you can also upload them directly, or enable Chrome's "Desktop site" mode for easier folder selection.)*
7. Open your repository **Settings → Pages**.
8. Under **Build and deployment → Source**, choose **Deploy from a branch**.
9. Select branch **main** and folder **/ (root)**, then tap **Save**.
10. Wait 1–2 minutes and refresh Settings → Pages to see your live HTTPS URL (for example: `https://yourusername.github.io/deepfocus-landing/`).

### Alternative: Deploying with Vercel (Free Tier)

1. Once your files are in your GitHub repository, open **vercel.com** in Chrome on your phone and sign in with GitHub.
2. Tap **Add New… → Project** and import your `deepfocus-landing` repository.
3. Leave Framework Preset as **Other** (static HTML) and Output Directory empty, then tap **Deploy**.
4. Vercel will give you a live URL such as `https://deepfocus-landing.vercel.app`.

---

## 4. Configure Canonical URLs, `sitemap.xml`, and `robots.txt`

Once you know your exact live URL (do not use placeholders):

1. Open `sitemap.xml` in GitHub mobile web editor (tap the pencil icon).
   - Replace every `https://YOUR-PRODUCTION-DOMAIN` with your real live URL (no trailing slash on the domain prefix if paths already start with `/`, e.g., `https://yourusername.github.io/deepfocus-landing/features.html`).
   - Commit changes.
2. Open `robots.txt` in GitHub editor.
   - Uncomment the last line and update it to your real sitemap URL:
     `Sitemap: https://yourusername.github.io/deepfocus-landing/sitemap.xml`
   - Commit changes.
3. Open `index.html`, `features.html`, `faq.html`, and `privacy.html` in GitHub editor.
   - Find the `POST-DEPLOYMENT CONFIGURATION` comment in `<head>`, remove the `<!--` and `-->` comment markers around `<link rel="canonical">` and `<meta property="og:url">`, and replace `https://YOUR-PRODUCTION-DOMAIN` with your live URL.
   - Commit changes.

---

## 5. Verify the Live Website from Your Phone

After publishing, check every item below in Chrome on Android:

1. Open your live URL and test **EN / বাংলা** switching across Home, Features, FAQ, and Privacy.
2. Tap the **menu button** on mobile width and verify every link opens properly with no horizontal scrolling.
3. Tap each **FAQ question** to confirm expand/collapse works smoothly.
4. Tap any **screenshot** to confirm the enlarge modal opens and Next/Previous/Close work.
5. Tap **Get DeepFocus on SupportKori** / **Buy Now** and verify it opens:
   `https://www.supportkori.com/muhammedomor/extras/deepfocus-app-ts3g`
6. Test `<your-live-url>/robots.txt`, `<your-live-url>/sitemap.xml`, and a non-existent path like `<your-live-url>/test-404` to confirm your custom `404.html` renders.

---

## 6. Connect Google Search Console & Bing Webmaster Tools

1. **Google Search Console (Free):**
   - Visit `search.google.com/search-console` on your phone.
   - Choose **URL prefix** and enter your exact live URL (e.g., `https://yourusername.github.io/deepfocus-landing/`).
   - Select the **HTML tag** verification method, copy the `<meta name="google-site-verification" ...>` tag, paste it into `<head>` of `index.html` on GitHub, commit, wait 1 minute, and tap **Verify**.
   - Open **Sitemaps** in the left menu, enter `sitemap.xml`, and tap **Submit**.
   - Use **URL Inspection → Test Live URL** on your homepage to confirm `Googlebot` can fetch and render the page cleanly.

2. **Bing Webmaster Tools (Free):**
   - Visit `bing.com/webmasters` and sign in.
   - You can either import directly from your verified Google Search Console account or add your site URL and verify via HTML meta tag.
   - Submit your `sitemap.xml` URL under **Sitemaps**.

3. **Verify Crawler Access (`Googlebot`, `Bingbot`, `OAI-SearchBot`):**
   - Open `<your-live-url>/robots.txt` in a browser to confirm `Allow: /` is active for `Googlebot`, `Bingbot`, `OAI-SearchBot`, and `*`.
   - Use Google Search Console's **URL Inspection** and Bing's **URL Inspection** tools to confirm HTTP 200 status and no blocked CSS/JS resources.
   - Note: Allowing search crawlers makes your pages eligible for indexing and AI search citation, though indexing and visibility depend on each search engine's own evaluation and quality criteria.
