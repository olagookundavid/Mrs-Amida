/**
 * Organisation details used across the site.
 * Change contact information here and every section picks it up.
 */

export const ORG = {
  name: 'AMIDA NOBLE WOMEN',
  fullName: 'AMIDA NOBLE WOMEN PROGRESSIVE ACHIEVERS INITIATIVE AND EMPOWERMENT',
  registeredName: 'AMIDA NOBLE WOMEN PROGRESSIVE ACHIEVERS INITIATIVES',
  shortTagline: 'Progressive Achievers Initiative',
  tagline: 'Progressive Achievers Initiative and Empowerment',
  slogan: '“Like Able Mind”',
  motto: 'IN GOD WE TRUST',
  convener: {
    name: 'Mrs. Jarinat Amida Bukola',
    otherNames: 'Babayale Adedayo Sadiq',
  },
} as const

export const LEGAL = {
  rcNumber: '7774320',
  incorporated: '29th July, 2024',
  incorporatedShort: 'July 29, 2024',
  tin: '2522507357821',
  trustees: 'JARINAT AMIDA BUKOLA BABAYALE ADEDAYO SADIQ',
  certificatePdf: '/docs/cac-certificate.pdf',
} as const

export interface Phone {
  /** International format, e.g. +234 803 410 0434 */
  display: string
  /** Local format, e.g. 0803 410 0434 */
  local: string
  /** Value for tel: links */
  tel: string
}

export const PHONES: Phone[] = [
  { display: '+234 803 410 0434', local: '0803 410 0434', tel: '+2348034100434' },
  { display: '+234 708 743 8149', local: '0708 743 8149', tel: '+2347087438149' },
]

export const PRIMARY_PHONE = PHONES[0]

/** Number (digits only, with country code) that receives WhatsApp messages */
export const WHATSAPP_NUMBER = '2348034100434'

export const EMAIL = 'funmi.amida@gmail.com'

export const ADDRESS_LINES = [
  'Shop 4, AC Street, Federal Housing Authority (FHA),',
  'Moshalasi Bus Stop, Iyana Ipaja,',
  'Alimosho, Lagos, Nigeria',
] as const

export interface NavLink {
  id: string
  /** Label in the desktop navbar (omit to hide it there) */
  label?: string
  /** Label in the mobile drawer */
  mobileLabel: string
  /** Label in the footer (omit to hide it there) */
  footerLabel?: string
}

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About Us', mobileLabel: 'About Us', footerLabel: 'About the Movement' },
  { id: 'convener', label: 'The Convener', mobileLabel: 'The Convener', footerLabel: "The Convener's Address" },
  {
    id: 'commitment',
    label: 'Commitment',
    mobileLabel: 'Political & Civic Commitment',
    footerLabel: 'Civic & Political Commitment',
  },
  {
    id: 'objectives',
    label: 'Strategic Objectives',
    mobileLabel: '10 Strategic Objectives',
    footerLabel: '10 Strategic Objectives',
  },
  {
    id: 'vision-mission',
    label: 'Vision & Mission',
    mobileLabel: 'Vision, Mission & Values',
    footerLabel: 'Vision, Mission & Values',
  },
  { id: 'gallery', label: 'Gallery', mobileLabel: 'Photo Gallery', footerLabel: 'Outreach Gallery' },
  { id: 'verification', mobileLabel: 'CAC Legal Accreditation' },
  { id: 'contact', label: 'Contact', mobileLabel: 'Contact & Address' },
]
