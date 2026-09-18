/**
 * AMIDA NOBLE WOMEN — Photo & Outreach Gallery
 *
 * HOW TO ADD A NEW PHOTO:
 * 1. Save the image in `src/assets/images/gallery/` (e.g. `new-outreach.jpg`).
 * 2. Import it below, next to the other imports:
 *      import newOutreach from '../assets/images/gallery/new-outreach.jpg'
 * 3. Add an entry at the top of `GALLERY_ITEMS` using that import as `src`.
 *
 * To add a new filter category, add it to `GALLERY_CATEGORIES` — the filter
 * buttons are generated from that list.
 */

import convener from '../assets/images/convener.jpg'
import communityRally from '../assets/images/gallery/community-rally.jpg'
import empowermentBanner from '../assets/images/gallery/empowerment-banner.jpg'
import leadershipExecutives from '../assets/images/gallery/leadership-executives.jpg'

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'community', label: 'Community Mobilisation' },
  { id: 'leadership', label: 'Leadership & Board' },
  { id: 'empowerment', label: 'Empowerment' },
] as const

export type GalleryFilter = (typeof GALLERY_CATEGORIES)[number]['id']
export type GalleryCategory = Exclude<GalleryFilter, 'all'>

export interface GalleryItem {
  id: number
  title: string
  category: GalleryCategory
  /** Badge text on the card; falls back to the category id */
  categoryLabel?: string
  src: string
  /** Place or date shown above the title */
  date?: string
  caption: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Grassroots Mobilisation & Member Rally',
    category: 'community',
    categoryLabel: 'Community Mobilisation',
    src: communityRally,
    date: 'Lagos Chapter',
    caption:
      'Dedicated members of Amida Noble Women united in their official cyan blue colors during a community engagement and empowerment rally.',
  },
  {
    id: 2,
    title: 'Executive Leadership & Board of Trustees',
    category: 'leadership',
    categoryLabel: 'Executive Leadership',
    src: leadershipExecutives,
    date: 'Headquarters, Lagos',
    caption:
      "Convener and key executives standing proudly before the national banner, coordinating initiatives for women's development and civic participation.",
  },
  {
    id: 3,
    title: 'Community Outreach & Less Privileged Support',
    category: 'empowerment',
    categoryLabel: 'Grassroots Empowerment',
    src: empowermentBanner,
    date: 'Alimosho Secretariat',
    caption:
      "'Building with Passion — Supporting the Less Privileged'. Educational and vocational development drive organized for local women and families.",
  },
  {
    id: 4,
    title: 'Convener Mrs. Jarinat Amida Bukola',
    category: 'leadership',
    categoryLabel: 'Convener & Founder',
    src: convener,
    date: 'National Movement',
    caption:
      'Mrs. Jarinat Amida Bukola Babayale Adedayo Sadiq, Founder and Visionary Convener of the Amida Noble Women Progressive Achievers Initiative.',
  },
]
