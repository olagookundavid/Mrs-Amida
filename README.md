# AMIDA NOBLE WOMEN PROGRESSIVE ACHIEVERS INITIATIVE AND EMPOWERMENT

> **“Like Able Mind”**  
> *A National Movement for Women’s Empowerment, Progressive Development and Community Advancement*  
> **Motto:** *IN GOD WE TRUST*

---

## Overview

This repository hosts the official one-page website for **AMIDA NOBLE WOMEN PROGRESSIVE ACHIEVERS INITIATIVE AND EMPOWERMENT**. It introduces the movement to Nigerians, government agencies (MDAs), institutions, development partners and grassroots communities.

The site is built with **React 19**, **TypeScript**, **Vite** and **Tailwind CSS v4**, and compiles to a plain static site that can be hosted anywhere.

### Features
- **Official identity & charter:** introductory statement, political & developmental commitment, vision, mission and 10 core values.
- **The Convener's address:** featuring **Mrs. Jarinat Amida Bukola Babayale Adedayo Sadiq**.
- **10 strategic objectives:** cards for empowerment, skills, entrepreneurship, cooperatives, peace and national development.
- **Photo gallery:** category filters and a full-screen lightbox (arrow keys, Esc, previous/next buttons on mobile).
- **CAC accreditation:** certificate preview modal and downloadable PDF.
- **WhatsApp & phone integration:** the membership form opens a pre-filled WhatsApp chat with the secretariat.
- **Modern touches:** scroll-reveal animations (respecting reduced-motion settings), active-section highlighting in the navbar, keyboard-accessible modals, self-hosted fonts and SEO/social-sharing metadata.

---

## Getting started

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server at http://localhost:5173
npm run build      # type-check and build the production site into dist/
npm run preview    # serve the production build locally
npm run lint       # lint the code
```

---

## Project structure

```text
.
├── index.html                  # Page shell: title, SEO & social meta tags, structured data
├── public/                     # Copied as-is to the site root
│   ├── logo.jpg                # Favicon & social-sharing image
│   └── docs/cac-certificate.pdf
└── src/
    ├── main.tsx                # App entry point
    ├── App.tsx                 # Page layout: header, sections, footer
    ├── index.css               # Tailwind setup, brand colours & custom styles
    ├── data/
    │   ├── site.ts             # Contact details, legal info, navigation links
    │   ├── content.ts          # Pillars, objectives, core values, form options
    │   └── gallery.ts          # Gallery photos & filter categories
    ├── assets/images/          # Logo, convener portrait, certificate preview, gallery photos
    ├── components/
    │   ├── layout/             # Navbar, footer
    │   ├── sections/           # One component per page section (Hero, About, Gallery, …)
    │   ├── gallery/            # Lightbox
    │   ├── certificate/        # CAC certificate modal
    │   └── ui/                 # Shared building blocks (Modal, Reveal, SectionHeading)
    ├── hooks/                  # Scroll-spy, scroll-reveal, scroll lock
    └── lib/                    # WhatsApp link builder, accent colour classes
```

---

## Common edits

### Update phone numbers, email, address or registration details
Edit [`src/data/site.ts`](src/data/site.ts). Every section, the footer and the WhatsApp links read from this file.

### Add a new gallery photo
1. Save the photo in `src/assets/images/gallery/` (e.g. `new-outreach.jpg`).
2. Open [`src/data/gallery.ts`](src/data/gallery.ts) and import it next to the other imports:
   ```ts
   import newOutreach from '../assets/images/gallery/new-outreach.jpg'
   ```
3. Add an entry to the top of `GALLERY_ITEMS`:
   ```ts
   {
     id: 5,
     title: 'Youth Vocational Training Seminar',
     category: 'empowerment', // 'community' | 'leadership' | 'empowerment'
     categoryLabel: 'Skills & Vocational',
     src: newOutreach,
     date: 'October 2024',
     caption: 'Equipping women and youths with sustainable artisan and digital skills.',
   },
   ```
4. Save. The photo appears in the gallery, its category filter and the lightbox. If the file name is mistyped, `npm run build` fails and names the missing file.

To add a new filter category, add it to `GALLERY_CATEGORIES` in the same file.

### Change objectives, core values or other lists
Edit [`src/data/content.ts`](src/data/content.ts). Icons come from [Lucide](https://lucide.dev/icons/); import the icon by name at the top of the file.

---

## Deployment (Vercel or Netlify)

The site builds to static files in `dist/`, so no server or extra config is needed.

**Vercel:** import the GitHub repository at [vercel.com/new](https://vercel.com/new). It detects Vite automatically (build command `npm run build`, output directory `dist`).

**Netlify:** choose *Add new site → Import an existing project*, pick the repository, and use build command `npm run build` with publish directory `dist`.

Both redeploy automatically on every push to `main`.

> Once the site has its own domain, update the `og:image` / `logo` URLs in `index.html` to absolute URLs (e.g. `https://your-domain.org/logo.jpg`) so link previews on WhatsApp and social media show the logo.

---

## Secretariat & contact information

- **Address:** Shop 4, AC Street, Federal Housing Authority (FHA), Moshalasi Bus Stop, Iyana Ipaja, Alimosho, Lagos, Nigeria.
- **Hotlines:** `+234 803 410 0434` / `+234 708 743 8149`
- **Email:** `funmi.amida@gmail.com`
- **Motto:** *IN GOD WE TRUST*
