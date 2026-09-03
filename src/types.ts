export type CategoryType = 
  | 'all'
  | 'facades'
  | 'windows-doors'
  | 'glass-glazing'
  | 'hardware-automation'
  | 'sustainability'
  | 'market-prices'
  | 'projects'
  | 'interviews';

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  category: CategoryType;
  categoryLabel: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    organization?: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
  imageCaption?: string;
  tags: string[];
  isBreaking?: boolean;
  isFeatured?: boolean;
  isEditorChoice?: boolean;
  isTrending?: boolean;
  views: number;
  commentsCount: number;
  techSpecs?: {
    label: string;
    value: string;
  }[];
  keyTakeaways?: string[];
  pdfDownloadUrl?: string;
}

export interface MarketItem {
  id: string;
  symbol: string;
  name: string;
  category: 'Metals' | 'Glass' | 'Polymers & Hardware' | 'Energy & Transport';
  price: string;
  numericPrice: number;
  change: string;
  changePercent: number;
  isPositive: boolean;
  unit: string;
  high24h: string;
  low24h: string;
  history: number[];
  lastUpdated: string;
}

export interface IndustryLeader {
  id: string;
  name: string;
  company: string;
  role: string;
  country: string;
  flag: string;
  logoUrl: string;
  avatarUrl: string;
  quote: string;
  focusArea: string;
  featuredProduct: string;
  certifications: string[];
  websiteUrl: string;
  headquarters: string;
  founded: number;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  architect: string;
  facadeConsultant: string;
  systemSupplier: string;
  location: string;
  year: number;
  facadeType: 'Unitized Curtain Wall' | 'Double-Skin Ventilated' | 'Structural Glazing' | 'Parametric Exoskeleton' | 'Point-Fixed Cable Net';
  glassSpec: string;
  uValue: string;
  shgc: string;
  acousticRw: string;
  facadeArea: string;
  imageUrl: string;
  description: string;
  features: string[];
}

export interface DigitalMagazine {
  id: string;
  issueNumber: string;
  volume: string;
  title: string;
  monthYear: string;
  coverImage: string;
  pageCount: number;
  featuredTopics: string[];
  pdfSize: string;
  readTime: string;
  editorNote: string;
}

export interface EventItem {
  id: string;
  name: string;
  dates: string;
  location: string;
  cityCountry: string;
  venue: string;
  category: 'Expo & Trade Fair' | 'Technical Conference' | 'Awards Gala' | 'Webinar';
  attendeesCount: string;
  exhibitorsCount: string;
  websiteUrl: string;
  featured: boolean;
  description: string;
}

export interface VendorItem {
  id: string;
  companyName: string;
  category: 'Aluminium Systems' | 'Architectural Glass' | 'Hardware & Fittings' | 'uPVC Profiles' | 'Machinery & Software' | 'Sealants & Interlayers';
  country: string;
  location: string;
  verified: boolean;
  rating: number;
  description: string;
  products: string[];
  certifications: string[];
  contactEmail: string;
  phone: string;
  website: string;
  logo: string;
}

export interface UserBookmark {
  articleId: string;
  savedAt: string;
}
