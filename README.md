# AMIDA NOBLE WOMEN PROGRESSIVE ACHIEVERS INITIATIVE AND EMPOWERMENT

> **“Like Able Mind”**  
> *A National Movement for Women’s Empowerment, Progressive Development and Community Advancement*  
> **Motto:** *IN GOD WE TRUST*  
> **CAC Registration Number:** `RC 7774320` (Incorporated 29th July, 2024)  
> **Tax Identification Number (TIN):** `2522507357821`

---

## Overview

This repository hosts the official 1-page responsive website for **AMIDA NOBLE WOMEN PROGRESSIVE ACHIEVERS INITIATIVE AND EMPOWERMENT**.

The platform is designed to introduce the national movement to Nigerians, government agencies (MDAs), institutions, development partners, and grassroots communities.

### Key Highlights & Features
- **Official Identity & Charter:** Complete text of the introductory statement, political & developmental commitment, vision, mission, and 10 core values.
- **The Convener's Address:** Featuring **Mrs. Jarinat Amida Bukola Babayale Adedayo Sadiq** with high-resolution portrait photography.
- **10 Strategic Objectives:** Comprehensive cards outlining women & youth empowerment, skills acquisition, entrepreneurship, cooperative development, peace, and national development.
- **Extensible NGO Photo Gallery:** Dynamic categorization (`Community Mobilisation`, `Leadership & Board`, `Grassroots Empowerment`) with full-screen interactive lightbox viewer.
- **CAC Accreditation Verification:** High-resolution preview and downloadable PDF of the Corporate Affairs Commission Certificate of Incorporation.
- **Direct WhatsApp & Phone Integration:** Instant routing to the secretariat hotlines (`+234 803 410 0434` / `+234 708 743 8149`).
- **Zero-Dependency Architecture:** Clean HTML5, Tailwind CSS, and vanilla JavaScript—runs immediately in any browser or static host (GitHub Pages, Netlify, Vercel, cPanel).

---

## File Structure

```text
.
├── index.html                    # Main website markup & layout
├── css/
│   └── style.css                 # Brand typography, themes & custom animation styles
├── js/
│   ├── gallery-data.js           # Extensible photo & outreach records
│   └── main.js                   # Interactivity, lightbox modal, CAC viewer & mobile menu
├── assets/
│   ├── images/
│   │   ├── logo.jpg              # Official circular logo
│   │   ├── convener.jpg          # Mrs. Jarinat Amida Bukola official portrait
│   │   ├── cac-certificate-preview.jpg # High-res CAC certificate preview
│   │   └── gallery/              # Outreach, rally, and executive photos
│   │       ├── community-rally.jpg
│   │       ├── leadership-executives.jpg
│   │       └── empowerment-banner.jpg
│   └── docs/
│       └── cac-certificate.pdf   # Original CAC certificate document
└── README.md                     # Documentation
```

---

## How to Add More NGO Photos (Extensibility Guide)

To add new photos to the gallery:

1. **Save the photo** in `assets/images/gallery/` (e.g. `assets/images/gallery/new-outreach.jpg`).
2. **Open** `js/gallery-data.js` in any text editor.
3. **Add a new record** to the `GALLERY_ITEMS` array:
   ```javascript
   {
     id: 5,
     title: "Youth Vocational Training Seminar",
     category: "empowerment", // "community" | "leadership" | "empowerment"
     categoryLabel: "Skills & Vocational",
     src: "assets/images/gallery/new-outreach.jpg",
     date: "October 2024",
     caption: "Equipping women and youths with sustainable artisan and digital skills."
   },
   ```
4. Save the file. The website will automatically render the new photo, category filter, and lightbox view!

---

## Local Development & Preview

Because this project uses standard web technologies with no build steps required:

- **Double-click:** Open `index.html` directly in Google Chrome, Safari, Firefox, or Edge.
- **Using Python:**
  ```bash
  python3 -m http.server 8000
  ```
  Then navigate to `http://localhost:8000`.
- **Using Node:**
  ```bash
  npx serve .
  ```

---

## Secretariat & Contact Information

- **Address:** Shop 4, AC Street, Federal Housing Authority (FHA), Moshalasi Bus Stop, Iyana Ipaja, Alimosho, Lagos, Nigeria.
- **Hotlines:** `+234 803 410 0434` / `+234 708 743 8149`
- **Email:** `funmi.amida@gmail.com`
- **Motto:** *IN GOD WE TRUST*
