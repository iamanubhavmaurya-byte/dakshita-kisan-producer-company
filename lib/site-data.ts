/**
 * Central, editable configuration for Dakshita Kisan Producer Company Limited.
 * Update company details, social URLs, gallery images, stories and updates here.
 */

export const company = {
  name: 'Dakshita Kisan Producer Company Limited',
  shortName: 'Dakshita Kisan',
  tagline: 'Farmers Together. Growth Together.',
  location: 'Pratapgarh, Uttar Pradesh, India',
  established: '2021',
  focus: 'Agriculture, farming and horticulture',
  model: 'Farmer Producer Company / collective farmer enterprise',
  cin: 'U01100UP2021PTC156986',
  phone: '+91 94503 96351',
  phoneHref: 'tel:+919450396351',
  whatsapp: 'https://wa.me/919450396351',
  // Editable placeholders — replace with the official pages when available.
  linkedinUrl: '#linkedin',
  facebookUrl: '#facebook',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Farmers', href: '#supporting-farmers' },
  { label: 'Collective Farming', href: '#collective-farming' },
  { label: 'Our Work', href: '#how-we-work' },
  { label: 'Impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const glance = [
  { label: 'Company', value: 'Dakshita Kisan Producer Company Limited' },
  { label: 'Location', value: 'Pratapgarh, Uttar Pradesh, India' },
  { label: 'Established', value: '2021' },
  { label: 'Focus', value: 'Agriculture, farming and horticulture' },
  { label: 'Model', value: 'Farmer Producer Company / collective enterprise' },
  { label: 'CIN', value: 'U01100UP2021PTC156986' },
]

export const missions = [
  {
    title: 'Empower Farmers',
    description:
      'Equip farmers with knowledge, awareness and shared resources so they can make stronger decisions for their land and livelihood.',
  },
  {
    title: 'Encourage Collective Action',
    description:
      'Bring farmers together to plan, procure and negotiate as one, turning individual effort into shared strength.',
  },
  {
    title: 'Create Better Opportunities',
    description:
      'Open pathways to wider markets, fair value and new agricultural possibilities for member farmers.',
  },
  {
    title: 'Build Sustainable Growth',
    description:
      'Nurture long-term, responsible farming practices that grow both the land and the community over time.',
  },
]

export const collectiveFlow = [
  { title: 'Farmer', description: 'Every journey begins with the individual farmer and their land.' },
  { title: 'Collective Action', description: 'Farmers unite to plan and act together.' },
  { title: 'Aggregation', description: 'Produce and needs are pooled for scale.' },
  { title: 'Better Opportunities', description: 'Access to markets, inputs and knowledge widens.' },
  { title: 'Shared Growth', description: 'Value returns to the community that created it.' },
]

export const workSteps = [
  { step: '01', title: 'Understand Farmer Needs', description: 'Listen closely to the realities and priorities of farmers on the ground.' },
  { step: '02', title: 'Organise', description: 'Bring farmers together into an organised, cooperative structure.' },
  { step: '03', title: 'Collective Action', description: 'Plan and act as one to build shared strength.' },
  { step: '04', title: 'Better Practices', description: 'Share improved agricultural knowledge and methods.' },
  { step: '05', title: 'Aggregate Opportunities', description: 'Pool produce and resources to unlock scale.' },
  { step: '06', title: 'Market Linkages', description: 'Connect farmers to wider and fairer markets.' },
  { step: '07', title: 'Long-Term Value', description: 'Build durable value that stays within the community.' },
]

export const supportAreas = [
  {
    title: 'Agricultural Knowledge',
    description: 'Sharing improved practices, awareness and guidance for better farming outcomes.',
    icon: 'sprout',
  },
  {
    title: 'Collective Procurement',
    description: 'Buying agricultural inputs together to reduce costs and improve access.',
    icon: 'shopping-basket',
  },
  {
    title: 'Aggregation',
    description: 'Pooling produce and resources to build scale and bargaining strength.',
    icon: 'layers',
  },
  {
    title: 'Market Linkages',
    description: 'Connecting farmers to wider markets and more rewarding opportunities.',
    icon: 'route',
  },
  {
    title: 'Farmer Awareness',
    description: 'Building awareness around opportunities, practices and farmer rights.',
    icon: 'megaphone',
  },
  {
    title: 'Rural Enterprise',
    description: 'Encouraging farmer-led enterprise and economic participation in the region.',
    icon: 'store',
  },
]

export const impactAreas = [
  { title: 'Farmer Coordination', description: 'Strengthening how farmers plan and work together across the region.' },
  { title: 'Awareness', description: 'Growing understanding of practices, opportunities and collective benefits.' },
  { title: 'Collective Participation', description: 'Encouraging active involvement in shared agricultural action.' },
  { title: 'Market Opportunities', description: 'Opening pathways to wider and fairer market access.' },
  { title: 'Agricultural Networks', description: 'Building connections between farmers, resources and knowledge.' },
  { title: 'Rural Economic Development', description: 'Supporting sustainable economic activity within farming communities.' },
]

export const farmerStories = [
  { placeholder: 'Farmer Story Coming Soon' },
  { placeholder: 'Farmer Story Coming Soon' },
  { placeholder: 'Farmer Story Coming Soon' },
]

export type GalleryImage = {
  src: string
  alt: string
  span?: 'tall' | 'wide' | 'normal'
}

export const galleryImages: GalleryImage[] = [
  { src: '/images/gallery-crops.png', alt: 'Healthy green crops in an Indian farm', span: 'tall' },
  { src: '/images/gallery-meeting.png', alt: 'Farmers in a community meeting under a tree', span: 'wide' },
  { src: '/images/gallery-tractor.png', alt: 'A tractor plowing a field at golden hour' },
  { src: '/images/gallery-farmer.png', alt: 'Portrait of a smiling Indian farmer in his field', span: 'tall' },
  { src: '/images/gallery-harvest.png', alt: 'Farmer hands holding freshly harvested wheat grains' },
  { src: '/images/gallery-field.png', alt: 'Aerial view of green agricultural fields', span: 'wide' },
]

export const updates = [
  {
    tag: 'Farmer Meeting',
    title: 'Community planning sessions',
    description: 'Placeholder — share notes and highlights from farmer meetings and collective planning here.',
  },
  {
    tag: 'Field Activity',
    title: 'Seasonal agricultural activities',
    description: 'Placeholder — document ongoing field activities, sowing and harvesting initiatives here.',
  },
  {
    tag: 'Company Update',
    title: 'News from Dakshita Kisan',
    description: 'Placeholder — post company milestones, announcements and organisational updates here.',
  },
  {
    tag: 'Awareness',
    title: 'Farmer awareness drives',
    description: 'Placeholder — describe awareness initiatives around practices and opportunities here.',
  },
]
