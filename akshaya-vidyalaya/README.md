# Akshaya Vidyalaya MHSS — Website Recreation
## Project Structure

```
akshaya-vidyalaya/
│
├── index.html                  ← HOME PAGE (open this in browser)
│
├── pages/                      ← ALL INNER PAGES
│   ├── about.html              ← About Us
│   ├── trust.html              ← Management Trustees
│   ├── trustee-1.html          ← Managing Trustee Message
│   ├── trustee-2.html          ← Trustee Message
│   ├── trustee-3.html          ← Trustee Message
│   ├── principal.html          ← Principal's Message
│   ├── campus.html             ← Campus Details
│   ├── curriculum.html         ← Academics & Curriculum
│   ├── facilities.html         ← Laboratories & Facilities
│   ├── admission.html          ← Admission Procedure
│   ├── gallery.html            ← Photo Gallery
│   ├── career.html             ← Careers / Job Application
│   └── contact.html            ← Contact Us
│
├── css/
│   └── style.css               ← ALL STYLES (fully responsive)
│
├── js/
│   ├── components.js           ← Shared header + footer injector
│   └── main.js                 ← Slider, tabs, counter, lightbox, etc.
│
├── images/                     ← ALL IMAGES (replace placeholders with real photos)
│   ├── logo.png
│   ├── banner-1.jpg  banner-2.jpg  banner-3.jpg
│   ├── about-1.jpg ... about-4.jpg
│   ├── trustee-1.jpg ... trustee-3.jpg
│   ├── principal.jpg
│   ├── lab-*.jpg
│   ├── gallery-*.jpg
│   ├── campus-*.jpg
│   ├── post-1.jpg  post-2.jpg
│   ├── qr.png
│   └── placeholder.jpg
│
└── generate_placeholders.py    ← Run to recreate placeholder images

```

---

## How to Use

1. **Open in browser:** Double-click `index.html` — no server needed.
2. **Replace images:** Swap every file in `images/` with the real school photos.
   - Keep the same filenames, or update the `src` attributes in the HTML.
3. **Edit content:** All text content is inside the HTML files — plain and readable.
4. **Shared Header/Footer:** Edited once in `js/components.js` — updates all pages automatically.

---

## Pages Included

| Page | File |
|------|------|
| Home | index.html |
| About Us | pages/about.html |
| Management Trustees | pages/trust.html |
| Managing Trustee Message | pages/trustee-1.html |
| Trustee Message | pages/trustee-2.html |
| Trustee Message | pages/trustee-3.html |
| Principal's Message | pages/principal.html |
| Campus Details | pages/campus.html |
| Academics & Curriculum | pages/curriculum.html |
| Laboratories & Facilities | pages/facilities.html |
| Admission Procedure | pages/admission.html |
| School Gallery | pages/gallery.html |
| Careers | pages/career.html |
| Contact Us | pages/contact.html |

---

## Features

- ✅ Fully **responsive** (mobile, tablet, desktop)
- ✅ **Hero slider** with auto-play and manual controls
- ✅ **Sticky header** with dropdown navigation
- ✅ **Mobile hamburger menu** with slide-out nav
- ✅ **News ticker** (scrolling announcements)
- ✅ **Counter animation** (stats section)
- ✅ **Lab tabs** (switch between Chemistry / Biology / Physics)
- ✅ **Photo gallery** with filter and lightbox
- ✅ **Video modal** (YouTube embed)
- ✅ **Contact form** with JS validation
- ✅ **Career application form**
- ✅ **Back to top** button
- ✅ **WhatsApp floating** button
- ✅ **Google Maps** embed (Contact page)
- ✅ **Shared header & footer** via JS components
- ✅ Separate CSS / JS / Images folders

---

## Replacing Images

All `images/` files are coloured placeholders. Replace them:

| Placeholder | What to replace with |
|-------------|----------------------|
| logo.png | School official logo |
| banner-1/2/3.jpg | Hero slider banner photos |
| about-1/2/3/4.jpg | Campus / student photos |
| trustee-1/2/3.jpg | Trustee portrait photos |
| principal.jpg | Principal portrait |
| lab-*.jpg | Lab interior photos |
| gallery-*.jpg | Event / activity photos |
| campus-*.jpg | Campus exterior photos |
| qr.png | QR code for the website |

---

## Credits
- Original website: [akshayavidyalayamhss.com](https://www.akshayavidyalayamhss.com/)
- Fonts: Google Fonts (Playfair Display + Nunito Sans)
- Icons: Unicode emoji (no external dependency)
