/**
 * AMIDA NOBLE WOMEN PROGRESSIVE ACHIEVERS INITIATIVE
 * Extensible NGO Gallery Data Configuration
 * 
 * INSTRUCTIONS FOR ADDING NEW PHOTOS:
 * 1. Drop your new image(s) into the `assets/images/gallery/` directory.
 * 2. Copy one of the item blocks below and paste it at the top of the `GALLERY_ITEMS` array.
 * 3. Update the `title`, `category`, `src`, `date`, and `caption`.
 * 
 * Supported categories:
 * - "all" (shows everything automatically)
 * - "community" (Grassroots Mobilisation & Community Outreaches)
 * - "leadership" (Executive & Trustee Gatherings)
 * - "empowerment" (Skills, Cooperatives & Workshops)
 */

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Grassroots Mobilisation & Member Rally",
    category: "community",
    categoryLabel: "Community Mobilisation",
    src: "assets/images/gallery/community-rally.jpg",
    date: "Lagos Chapter",
    caption: "Dedicated members of Amida Noble Women united in their official cyan blue colors during a community engagement and empowerment rally."
  },
  {
    id: 2,
    title: "Executive Leadership & Board of Trustees",
    category: "leadership",
    categoryLabel: "Executive Leadership",
    src: "assets/images/gallery/leadership-executives.jpg",
    date: "Headquarters, Lagos",
    caption: "Convener and key executives standing proudly before the national banner, coordinating initiatives for women's development and civic participation."
  },
  {
    id: 3,
    title: "Community Outreach & Less Privileged Support",
    category: "empowerment",
    categoryLabel: "Grassroots Empowerment",
    src: "assets/images/gallery/empowerment-banner.jpg",
    date: "Alimosho Secretariat",
    caption: "'Building with Passion — Supporting the Less Privileged'. Educational and vocational development drive organized for local women and families."
  },
  {
    id: 4,
    title: "Convener Mrs. Jarinat Amida Bukola",
    category: "leadership",
    categoryLabel: "Convener & Founder",
    src: "assets/images/convener.jpg",
    date: "National Movement",
    caption: "Mrs. Jarinat Amida Bukola Babayale Adedayo Sadiq, Founder and Visionary Convener of the Amida Noble Women Progressive Achievers Initiative."
  }
];

// Export for usage in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GALLERY_ITEMS };
}
