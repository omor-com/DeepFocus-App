# DeepFocus — Official Landing Website

A fast, lightweight, mobile-first static website for **DeepFocus**, an Android productivity and focus application developed by **Muhammed Omor**, tailored for users in Bangladesh in both **English** and **Bangla (বাংলা)**.

## Project Overview

- **Product Name:** DeepFocus
- **Category:** Android Productivity & Focus Application
- **Developer:** Muhammed Omor
- **Primary Target Market:** Bangladesh
- **Languages:** English (default crawlable HTML) and Bangla (full interactive bilingual switcher)
- **Official Product Listing:** https://www.supportkori.com/muhammedomor/extras/deepfocus-app-ts3g
- **Technology Stack:** Pure HTML5, CSS3, and Vanilla JavaScript (zero runtime frameworks, zero external font/CSS/JS CDNs, zero backend or database required)

## Folder Structure (`deepfocus-landing/`)

```text
deepfocus-landing/
├── index.html          # Main landing page (SEO + Schema.org JSON-LD + bilingual switcher)
├── features.html       # Detailed feature breakdown & Android limitations
├── faq.html            # Full 12-question bilingual FAQ + FAQPage JSON-LD
├── privacy.html        # Transparent privacy summary & pre-launch draft policy
├── 404.html            # Custom 404 page for GitHub Pages / Vercel
├── robots.txt          # Crawler access rules (Googlebot, Bingbot, OAI-SearchBot)
├── sitemap.xml         # Sitemap template (update with live domain before submission)
├── assets/
│   ├── css/
│   │   └── style.css   # Mobile-first stylesheet with system font stack
│   └── js/
│       └── main.js     # Bilingual EN/বাংলা switcher, mobile menu, FAQ accordion, lightbox
├── README.md           # Project overview & owner confirmation checklist
└── DEPLOYMENT.md       # Step-by-step Android phone deployment & SEO setup guide
```

## Official Screenshots Used

All four screenshots are loaded directly from their official URLs in their original aspect ratios without cropping:

1. Home Screen: `https://pockethostbd.github.io/drive-one/picture/mockup-1.png`
2. Focus Lock Screen: `https://pockethostbd.github.io/drive-one/picture/mockup-2.png`
3. Habit Tracker & Focus Statistics: `https://pockethostbd.github.io/drive-one/picture/mockup-3.png`
4. Settings & Android Platform Architecture: `https://pockethostbd.github.io/drive-one/picture/mockup-4.png`

## Product Facts Requiring Owner Confirmation Before Launch

Review and update the following placeholders marked in `index.html`, `features.html`, `faq.html`, and `privacy.html` before public promotion:

1. **Supported Android Versions:** Exact minimum and maximum Android OS / API versions.
2. **Required Android Permissions:** Exact permissions requested in `AndroidManifest.xml` (e.g., Usage Access, Overlay, Accessibility Service, or Default Home App only) and why each is required.
3. **Battery Optimization Guidance:** Specific OEM instructions (Xiaomi/MIUI, Samsung, Realme, Tecno, etc.) if needed to keep timers reliable.
4. **Installation Procedure:** Exact post-checkout steps users follow after acquiring DeepFocus on SupportKori.
5. **Troubleshooting Steps:** Official guidance if Focus Lock or launcher switching behaves unexpectedly.
6. **Privacy Policy Verification:** Confirm local storage, encryption, offline behavior, and whether any network calls or third-party SDKs exist in the APK.
7. **Support Contact Method:** Official developer support email or SupportKori messaging channel.
8. **Official Brand Favicon / Icon:** Add an official `favicon` only when the official app icon asset is confirmed.
9. **Production Domain:** Replace `https://YOUR-PRODUCTION-DOMAIN` in `sitemap.xml`, `robots.txt`, and the commented canonical / `og:url` tags inside the HTML files once deployed.
