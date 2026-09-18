import {
  Anchor,
  Award,
  Coins,
  Compass,
  Flag,
  Globe,
  Handshake,
  Heart,
  House,
  Layers,
  Megaphone,
  Scale,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Vote,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Accent } from '../lib/colors'

export interface Card {
  title: string
  description: string
  icon: LucideIcon
  accent: Accent
}

export const HERO_STATS = [
  { value: '10+', label: 'Strategic Pillars', className: 'text-amber-400' },
  { value: '100%', label: 'Grassroots Driven', className: 'text-emerald-300' },
  { value: 'CAC', label: 'Certified NGO', className: 'text-amber-400' },
]

export const PILLARS: Card[] = [
  {
    title: 'Skills & Capacity Development',
    description:
      'Facilitating vocational, technical, digital, and entrepreneurial training designed to build tangible, independent livelihoods for women and young people.',
    icon: Sparkles,
    accent: 'emerald',
  },
  {
    title: 'Cooperative Societies & Micro-Ventures',
    description:
      'Promoting viable cooperative societies and collective financial initiatives that pool resources, improve access to credit, and establish durable micro-enterprises.',
    icon: Coins,
    accent: 'amber',
  },
  {
    title: 'Grassroots Advocacy & Civic Enlightenment',
    description:
      'Serving as a trusted grassroots platform for civic awareness, community decision-making, democratic participation, and responsible national progress.',
    icon: Flag,
    accent: 'sky',
  },
]

export const COMMITMENTS: (Card & { footnote: string })[] = [
  {
    title: 'Civic Enlightenment & Inclusion',
    description:
      'Promoting greater awareness, inclusion, and representation of women and youths in governance, public leadership, policymaking, and democratic processes.',
    icon: Vote,
    accent: 'emerald',
    footnote: 'Responsible Democratic Engagement',
  },
  {
    title: 'Grassroots Advocacy Platform',
    description:
      'Serving as a credible grassroots platform for advocacy, civic mobilisation, and community-oriented development, working constructively with Federal, State, and Local governments.',
    icon: Megaphone,
    accent: 'amber',
    footnote: 'Constructive Stakeholder Partnership',
  },
  {
    title: 'Principled Leadership & Peace',
    description:
      'Our political engagement is strictly guided by integrity, loyalty, inclusiveness, service to humanity, respect for democratic values, and commitment to the unity of Nigeria.',
    icon: Shield,
    accent: 'sky',
    footnote: 'National Cohesion & Unity',
  },
]

export const OBJECTIVES: Card[] = [
  {
    title: 'Women & Youth Empowerment',
    description: 'Enhance economic independence, leadership capacity, and social wellbeing of women and youths.',
    icon: UserCheck,
    accent: 'emerald',
  },
  {
    title: 'Skills Development',
    description: 'Facilitate vocational, technical, digital, and entrepreneurial skills acquisition for members.',
    icon: Wrench,
    accent: 'amber',
  },
  {
    title: 'Entrepreneurship & SMEs',
    description: 'Encourage small and medium enterprises and create pathways to become economically productive.',
    icon: TrendingUp,
    accent: 'sky',
  },
  {
    title: 'Cooperative Development',
    description:
      'Promote viable cooperative societies and collective initiatives to improve access to resources and livelihoods.',
    icon: Layers,
    accent: 'purple',
  },
  {
    title: 'Political & Civic Action',
    description:
      'Encourage responsible participation in democratic processes, governance, and community decision-making.',
    icon: Award,
    accent: 'rose',
  },
  {
    title: 'Grassroots Mobilisation',
    description:
      'Establish a coordinated grassroots structure identifying needs and mobilising for positive development.',
    icon: Users,
    accent: 'emerald',
  },
  {
    title: 'Peace & Social Cohesion',
    description: 'Promote peaceful coexistence, unity, tolerance, and constructive engagement across communities.',
    icon: ShieldCheck,
    accent: 'amber',
  },
  {
    title: 'Strategic Partnerships',
    description: 'Establish productive relationships with MDAs, NGOs, private sector, and traditional leaders.',
    icon: Handshake,
    accent: 'sky',
  },
  {
    title: 'Community Advancement',
    description: 'Initiate practical programmes improving the quality of life for families and vulnerable individuals.',
    icon: House,
    accent: 'indigo',
  },
  {
    title: 'National Development',
    description:
      'Contribute meaningfully to the socio-economic and democratic development of the Federal Republic of Nigeria.',
    icon: Globe,
    accent: 'emerald',
  },
]

export const CORE_VALUES: { label: string; icon: LucideIcon; accent: Accent }[] = [
  { label: 'Integrity', icon: Shield, accent: 'emerald' },
  { label: 'Service', icon: Heart, accent: 'amber' },
  { label: 'Empowerment', icon: Zap, accent: 'sky' },
  { label: 'Unity', icon: Users, accent: 'emerald' },
  { label: 'Accountability', icon: Scale, accent: 'purple' },
  { label: 'Leadership', icon: Compass, accent: 'indigo' },
  { label: 'Inclusiveness', icon: Smile, accent: 'teal' },
  { label: 'Loyalty', icon: Anchor, accent: 'amber' },
  { label: 'Excellence', icon: Star, accent: 'rose' },
  { label: 'Patriotism', icon: Flag, accent: 'emerald' },
]

export const JOIN_STEPS = [
  'Register as an active member in your local government chapter',
  'Enroll in vocational, technical, and entrepreneurship training',
  'Partner with our cooperative societies for collective empowerment',
  'Institutional & MDA development partnership collaboration',
]

/** Options for the "I am interested in" field. `value` is what gets sent in the WhatsApp message. */
export const INTEREST_OPTIONS = [
  { value: 'Joining as Member', label: 'Joining as an Active Member' },
  { value: 'Skills Acquisition & Vocational Training', label: 'Skills Acquisition & Vocational Training' },
  { value: 'Cooperative Society / SME Support', label: 'Cooperative Society / SME Support' },
  { value: 'Partnership / Sponsorship', label: 'Institutional Partnership / Sponsorship' },
  { value: 'Volunteering / Community Mobilisation', label: 'Volunteering & Community Mobilisation' },
  { value: 'Other Inquiries', label: 'Other Inquiries' },
]
