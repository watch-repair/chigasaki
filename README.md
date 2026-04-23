# Kawabata's Vintage Quartz Watch Repair — English Website

A complete, production-ready static website for **Kawabata's Vintage Quartz Watch Repair**, located inside **Yamada Denki LABI LIFE SELECT Chigasaki** (茅ヶ崎), Japan.

---

## Overview

This project delivers a responsive, accessible, and elegantly designed single-page website built entirely with **HTML5**, **CSS3**, and a minimal amount of **vanilla JavaScript**. The design blends vintage sophistication with modern minimalism to convey trust, craftsmanship, and timeless quality.

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic, accessible markup |
| CSS3 | Custom properties, Flexbox, Grid, transitions |
| Vanilla JS | Mobile hamburger menu toggle only |

**No frameworks.** No build tools. No jQuery. No Bootstrap/Tailwind.

---

## File Structure

```
kawabata/
├── index.html              # Main single-page website
├── css/
│   ├── reset.css           # Modern CSS reset (box-sizing, reduced motion)
│   ├── variables.css       # Design tokens (colors, typography, spacing)
│   ├── base.css            # Base styles, typography, focus states, skip link
│   ├── layout.css          # Grid system, containers, responsive breakpoints
│   └── components.css      # Header, nav, hero, cards, forms, footer
├── js/
│   └── menu.js             # Mobile navigation toggle & scroll header shadow
├── images/
│   └── (placeholders — see below)
└── README.md               # This file
```

---

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#1a1a2e` | Headings, header, footer backgrounds |
| Accent | `#c9a961` | Links, highlights, borders, CTAs |
| Background | `#f5f0e8` | Page background |
| Background Alt | `#faf8f3` | Alternating section backgrounds |
| Surface | `#ffffff` | Cards, form backgrounds |
| Text | `#1a1a1a` | Body text |
| Text Muted | `#5c5c5c` | Captions, secondary text |

### Typography

| Role | Font Stack |
|------|-----------|
| Headings | `Georgia, "Times New Roman", "Hiragino Mincho ProN", "Yu Mincho", serif` |
| Body | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans JP", sans-serif` |

### Breakpoints

| Name | Width | Target |
|------|-------|--------|
| Mobile (default) | < 768px | Smartphones |
| Tablet | ≥ 768px | Tablets, small laptops |
| Desktop | ≥ 1024px | Desktops, large screens |

**Mobile-first** approach: base styles target mobile; media queries enhance for larger screens.

---

## Sections

1. **Header / Navigation** — Fixed header with blur backdrop, logo, nav links, and animated hamburger menu for mobile.
2. **Hero** — Full-viewport banner with CSS vintage texture overlay, tagline, and CTA.
3. **About** — Shop philosophy, Mr. Kawabata's expertise, and dedication to vintage quartz movements.
4. **Services** — Four service cards (Battery Replacement, Movement Cleaning, Crown & Pusher Repair, Vintage Parts Sourcing).
5. **Location** — Address, business hours table, access info, and embedded map placeholder.
6. **Contact** — Phone (`tel:`), email (`mailto:`), walk-in info, and a contact form with HTML5 validation.
7. **Footer** — Brand info, navigation links, language switcher placeholder, and copyright.

---

## Accessibility (WCAG 2.1 AA)

- **Semantic HTML5** elements (`header`, `nav`, `main`, `section`, `article`, `footer`, `address`)
- **Proper heading hierarchy** (`h1` → `h2` → `h3`)
- **Skip navigation link** for keyboard users
- **`aria-label`** and **`aria-expanded`** on interactive elements
- **Visible focus states** with 3px accent-colored outline
- **Color contrast** ≥ 4.5:1 for all text
- **Alt text** on all images and `<figure>` captions
- **Reduced motion** support via `prefers-reduced-motion`
- **Form labels** associated with inputs via `for`/`id`
- **Language attributes** — `lang="en"` on `<html>`, `lang="ja"` on Japanese text spans

---

## Setup Instructions

### Option 1: Open Directly

Simply open `index.html` in any modern web browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Option 2: Local Development Server

For optimal development experience (especially for smooth scrolling and font loading):

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if npx is available)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

---

## Customization Guide

### Adding Real Images

Replace the SVG placeholder images in `index.html` with actual photos:

```html
<!-- Example: About section craftsman photo -->
<img src="images/craftsman.jpg" alt="Mr. Kawabata examining a Seiko quartz movement">
```

Recommended image dimensions:
- **Hero background**: 1920×1080px
- **About photo**: 600×700px (portrait)
- **Service icons**: 56×56px (or use inline SVG)
- **Map**: Responsive width, 400–600px height

### Updating Contact Information

Search for `TODO` comments in `index.html` and update:
- Phone number (line with `tel:`)
- Email address (line with `mailto:`)
- Exact floor/section inside Yamada Denki

### Embedding a Real Map

Replace the map placeholder `<div class="location__map">` with an iframe from Google Maps:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Map showing Yamada Denki LABI LIFE SELECT Chigasaki"
></iframe>
```

### Adding a Favicon

Create `images/favicon.svg` (or `.png`, `.ico`) and uncomment the favicon link in `<head>`.

### Enabling the Contact Form

The contact form includes HTML5 validation but **no backend**. To make it functional:

1. **Netlify Forms**: Add `data-netlify="true"` to the `<form>` tag.
2. **Formspree**: Change `action` to `https://formspree.io/f/YOUR_FORM_ID`.
3. **Custom backend**: Point the `action` attribute to your server endpoint.

---

## Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

---

## License

Copyright &copy; 2024 Kawabata's Vintage Quartz Watch Repair. All rights reserved.

---

## Credits

- Design & development: Custom build for Kawabata's
- Icons: Unicode symbols (no external icon library required)
- Placeholder images: Inline SVG data URIs
