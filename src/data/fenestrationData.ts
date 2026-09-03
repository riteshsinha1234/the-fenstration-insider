import { 
  Article, 
  MarketItem, 
  IndustryLeader, 
  ProjectCaseStudy, 
  DigitalMagazine, 
  EventItem, 
  VendorItem 
} from '../types';

export const BREAKING_NEWS_ITEMS: { id: string; text: string; category: string; tag: string; timestamp: string; articleId: string }[] = [
  {
    id: 'bn-1',
    text: 'Schüco unveils revolutionary 0.65 W/m²K Cradle-to-Cradle Gold certified façade system with recycled aluminium alloys.',
    category: 'Façades',
    tag: 'NEW RELEASE',
    timestamp: '12m ago',
    articleId: 'art-1'
  },
  {
    id: 'bn-2',
    text: 'Global Float Glass benchmark rises 2.4% following energy surcharge adjustments across European and Asian float plants.',
    category: 'Market Index',
    tag: 'COMMODITY ALERT',
    timestamp: '28m ago',
    articleId: 'art-4'
  },
  {
    id: 'bn-3',
    text: 'Vacuum Insulated Glazing (VIG) adoption surges 48% across urban retrofit projects in North America and DACH region.',
    category: 'Glass & Glazing',
    tag: 'TREND REPORT',
    timestamp: '45m ago',
    articleId: 'art-2'
  },
  {
    id: 'bn-4',
    text: 'CWCT and ASTM align on updated dynamic seismic and wind-driven water tightness test standards for unitized curtain walls.',
    category: 'Standards & Codes',
    tag: 'REGULATORY',
    timestamp: '1h ago',
    articleId: 'art-6'
  },
  {
    id: 'bn-5',
    text: 'Reynaers Aluminium expands Middle East zero-carbon extrusions production facility to meet green building mandates.',
    category: 'Industry',
    tag: 'EXPANSION',
    timestamp: '2h ago',
    articleId: 'art-5'
  },
  {
    id: 'bn-6',
    text: 'Next-generation electrochromic kinetic smart glass reduces HVAC peak cooling loads by 34% in tropical mega-towers.',
    category: 'Sustainability',
    tag: 'INNOVATION',
    timestamp: '3h ago',
    articleId: 'art-3'
  }
];

export const MARKET_INDICES: MarketItem[] = [
  {
    id: 'm-1',
    symbol: 'LME-ALU',
    name: 'LME Primary Aluminium (P1020A)',
    category: 'Metals',
    price: '$2,488.50',
    numericPrice: 2488.50,
    change: '+$34.20',
    changePercent: 1.39,
    isPositive: true,
    unit: 'USD / Metric Ton',
    high24h: '$2,510.00',
    low24h: '$2,452.10',
    history: [2440, 2455, 2462, 2450, 2478, 2488.5],
    lastUpdated: '10 mins ago'
  },
  {
    id: 'm-2',
    symbol: 'FLT-GLS-EU',
    name: 'European Clear Float Glass (6mm)',
    category: 'Glass',
    price: '€32.80',
    numericPrice: 32.80,
    change: '-€0.45',
    changePercent: -1.35,
    isPositive: false,
    unit: 'EUR / sq.m (Ex-works)',
    high24h: '€33.50',
    low24h: '€32.60',
    history: [33.5, 33.4, 33.1, 33.0, 32.9, 32.8],
    lastUpdated: '25 mins ago'
  },
  {
    id: 'm-3',
    symbol: 'LOWE-ARC',
    name: 'Architectural Triple Silver Low-E Glass',
    category: 'Glass',
    price: '$46.20',
    numericPrice: 46.20,
    change: '+$1.15',
    changePercent: 2.55,
    isPositive: true,
    unit: 'USD / sq.m',
    high24h: '$46.80',
    low24h: '$44.90',
    history: [44.8, 45.2, 45.0, 45.8, 46.0, 46.2],
    lastUpdated: '18 mins ago'
  },
  {
    id: 'm-4',
    symbol: 'PVB-ACOUSTIC',
    name: 'Acoustic PVB / SentryGlas Interlayer (0.76mm)',
    category: 'Polymers & Hardware',
    price: '$6.45',
    numericPrice: 6.45,
    change: '+$0.08',
    changePercent: 1.25,
    isPositive: true,
    unit: 'USD / sq.m',
    high24h: '$6.50',
    low24h: '$6.35',
    history: [6.32, 6.36, 6.40, 6.38, 6.42, 6.45],
    lastUpdated: '40 mins ago'
  },
  {
    id: 'm-5',
    symbol: 'PA66-STRUT',
    name: 'Polyamide 6.6 GF25 Thermal Break Struts',
    category: 'Polymers & Hardware',
    price: '€4.92',
    numericPrice: 4.92,
    change: '+$0.04',
    changePercent: 0.82,
    isPositive: true,
    unit: 'EUR / kg',
    high24h: '€4.95',
    low24h: '€4.86',
    history: [4.85, 4.88, 4.89, 4.90, 4.91, 4.92],
    lastUpdated: '32 mins ago'
  },
  {
    id: 'm-6',
    symbol: 'UPVC-RESIN',
    name: 'K-67 Suspension PVC Resin (Window Grade)',
    category: 'Polymers & Hardware',
    price: '$890.00',
    numericPrice: 890.00,
    change: '-$12.00',
    changePercent: -1.33,
    isPositive: false,
    unit: 'USD / Metric Ton',
    high24h: '$908.00',
    low24h: '$885.00',
    history: [908, 902, 898, 895, 892, 890],
    lastUpdated: '15 mins ago'
  },
  {
    id: 'm-7',
    symbol: 'SS-HARDWARE',
    name: 'AISI 316 Marine Architectural Hardware Index',
    category: 'Polymers & Hardware',
    price: '$3,820.00',
    numericPrice: 3820.00,
    change: '+$28.00',
    changePercent: 0.74,
    isPositive: true,
    unit: 'USD / Metric Ton',
    high24h: '$3,840.00',
    low24h: '$3,790.00',
    history: [3780, 3795, 3805, 3810, 3815, 3820],
    lastUpdated: '50 mins ago'
  }
];

export const INDUSTRY_LEADERS: IndustryLeader[] = [
  {
    id: 'lead-1',
    name: 'Dr. Andreas Engelhardt',
    company: 'Schüco International KG',
    role: 'CEO & Managing Partner',
    country: 'Germany',
    flag: '🇩🇪',
    logoUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=300&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'The future of building envelopes lies in carbon-neutral circularity, smart automated ventilation, and net-zero energy façades.',
    focusArea: 'Unitized Systems & Smart Envelope Integration',
    featuredProduct: 'Schüco FWS 50.SI+ & Carbon Control Solutions',
    certifications: ['Cradle to Cradle Gold', 'Passive House PhA+', 'ISO 14001'],
    websiteUrl: 'https://www.schueco.com',
    headquarters: 'Bielefeld, Germany',
    founded: 1951
  },
  {
    id: 'lead-2',
    name: 'Martine Reynaers',
    company: 'Reynaers Aluminium',
    role: 'Executive Chairwoman',
    country: 'Belgium',
    flag: '🇧🇪',
    logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'Architectural freedom and extreme thermal insulation are no longer compromises; they are the bedrock of sustainable skylines.',
    focusArea: 'High-Performance Sliding Doors & Curtain Walls',
    featuredProduct: 'Reynaers MasterLine 8 & Hi-Finity Minimal Frame',
    certifications: ['Minergie-P', 'Passive House Certified', 'EPD Verified'],
    websiteUrl: 'https://www.reynaers.com',
    headquarters: 'Duffel, Belgium',
    founded: 1965
  },
  {
    id: 'lead-3',
    name: 'Benoit d’Iribarne',
    company: 'Saint-Gobain Glass',
    role: 'SVP Manufacturing & High Performance Solutions',
    country: 'France',
    flag: '🇫🇷',
    logoUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'ORAÉ® low-carbon glass is reducing the embodied carbon of building envelopes by over 42%, transforming the global glass paradigm.',
    focusArea: 'Low-Carbon Architectural Float Glass & Solar Control',
    featuredProduct: 'COOL-LITE® XTREME ORAÉ® Triple Silver',
    certifications: ['Cradle to Cradle', 'CSTB Verified', 'LEED v4.1 Contributor'],
    websiteUrl: 'https://www.saint-gobain-glass.com',
    headquarters: 'Courbevoie, France',
    founded: 1665
  },
  {
    id: 'lead-4',
    name: 'Ron Vance',
    company: 'Guardian Glass Global',
    role: 'President - Architectural Glass Solutions',
    country: 'United States',
    flag: '🇺🇸',
    logoUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=300&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote: 'SunGuard coatings allow architects to achieve 70% visible light transmission with a solar factor below 0.28.',
    focusArea: 'Spectrally Selective High Performance Coatings',
    featuredProduct: 'SunGuard® SuperNeutral SNX 70 Coated Glass',
    certifications: ['NFRC Certified', 'ASTM Compliant', 'Declare Red List Free'],
    websiteUrl: 'https://www.guardianglass.com',
    headquarters: 'Auburn Hills, Michigan, USA',
    founded: 1932
  },
  {
    id: 'lead-5',
    name: 'Dr. Marcus Frank',
    company: 'Roto Frank Window & Door Technology',
    role: 'Managing Director Hardware Division',
    country: 'Germany',
    flag: '🇩🇪',
    logoUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=300&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    quote: 'Smart concealed hardware with motorized sensors turns passive windows into intelligent indoor air quality actuators.',
    focusArea: 'Concealed Tilt & Turn Hardware, RC3 Burglary Resistance',
    featuredProduct: 'Roto NX & Roto Patio Inowa Sliding Hardware',
    certifications: ['DIN EN 13126-8', 'SKG-IKOB RC3', 'ift Rosenheim Tested'],
    websiteUrl: 'https://ftt.roto-frank.com',
    headquarters: 'Leinfelden-Echterdingen, Germany',
    founded: 1935
  },
  {
    id: 'lead-6',
    name: 'Tomasz Kuraray',
    company: 'Kuraray Trosifol® & SentryGlas®',
    role: 'Director Structural Glazing & Interlayers',
    country: 'Japan / Germany',
    flag: '🇯🇵',
    logoUrl: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=300&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    quote: 'Ionoplast interlayers provide 100 times the stiffness and 5 times the tear strength of traditional PVB for open-edge structural glass.',
    focusArea: 'Hurricane-Resistant, Blast-Resistant & Structural Interlayers',
    featuredProduct: 'SentryGlas® Xtra (SGX) Structural Interlayer',
    certifications: ['Miami-Dade County NOA', 'DIBt National Technical Approval'],
    websiteUrl: 'https://www.trosifol.com',
    headquarters: 'Tokyo, Japan / Troisdorf, Germany',
    founded: 1926
  }
];

export const FEATURED_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'The Megawatt Façade: How Next-Gen Unitized Curtain Walls are Transforming Zero-Energy Skyscrapers',
    subtitle: 'An exhaustive engineering breakdown of thermal break polyamide optimization, structural silicone durability, and dynamic BIPV integration.',
    excerpt: 'Modern super-tall towers face unprecedented wind loads, solar gain fluctuations, and strict carbon limits. Discover how unitized systems with 38mm polyamide struts and triple-silver low-E coatings deliver U-values below 0.70 W/m²K.',
    content: `
      ### The Paradigm Shift in Building Envelope Engineering

      The architectural envelope is no longer a passive glass skin designed solely to shed rain and let in daylight. In 2026, the high-performance building envelope has transformed into an active, multi-layered energy synthesizer that regulates thermodynamics, harvests solar energy, and mitigates extreme meteorological forces.

      #### 1. Thermal Break Evolution: Beyond 34mm Polyamide
      Historically, thermal breaks in extruded aluminium profiles utilized 24mm straight polyamide strips with a 0.28 W/m²K thermal bridge penalty. The latest generation of unitized systems utilizes multi-chambered 38mm and 45mm low-density fiberglass-reinforced polyamide 6.6 with specialized insulation foam inserts (Aerogel and expanded polyolefin). 

      This configuration reduces the frame U-factor ($U_f$) from 2.1 W/m²K down to an astonishing **0.82 W/m²K**, enabling aluminium curtain walls to meet rigorous **Passive House Classic and Plus** certifications without sacrificing profile slimness.

      #### 2. Structural Silicone Glazing (SSG) in Hurricane & Seismic Zones
      Structural silicone sealants (ASTM C1184 and ETAG 002 compliant) are now formulated with high-modulus, two-component neutral cure polymers that retain elastic recovery after 20,000 thermal cycling hours. When paired with unitized male-female split mullions, they allow dynamic building movement up to $\\pm 25\\text{ mm}$ inter-story drift during seismic events.

      #### 3. BIPV and Active Solar Facades
      Integrating Cadmium Telluride (CdTe) and Perovskite-Silicon tandem solar cells into spandrel panels allows commercial towers to generate over 350 kWh per square meter of façade annually, effectively offsetting up to 28% of baseline building electrical consumption.
    `,
    category: 'facades',
    categoryLabel: 'Façades & Envelopes',
    author: {
      name: 'Dr. Julian Von Berg',
      role: 'Chief Façade Engineer & Senior Fellow CWCT',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      organization: 'European Façade Engineering Institute'
    },
    date: 'August 18, 2026',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Parametric unitized double-skin façade with integrated solar shading louvres and triple Low-E glazing.',
    tags: ['Curtain Walls', 'Thermal Breaks', 'Polyamide 6.6', 'BIPV', 'Passive House', 'Acoustic Rw 48dB'],
    isBreaking: true,
    isFeatured: true,
    isEditorChoice: true,
    isTrending: true,
    views: 14820,
    commentsCount: 38,
    techSpecs: [
      { label: 'Overall System U-Value (Ucw)', value: '0.68 W/m²K' },
      { label: 'Air Permeability', value: 'Class AE 1500 (EN 12152)' },
      { label: 'Water Tightness (Dynamic)', value: 'Class RE 1500 (EN 12154)' },
      { label: 'Acoustic Performance (Rw + Ctr)', value: '46 (-3) dB' },
      { label: 'Wind Load Resistance (Design)', value: '3.6 kPa (ASTM E330)' }
    ],
    keyTakeaways: [
      'Multi-chambered 38mm-45mm polyamide struts reduce overall frame U-factor by 60%.',
      'Two-component high-modulus structural silicones accommodate up to ±25mm dynamic drift in seismic zones.',
      'Spandrel BIPV tandem cells yield up to 350 kWh/m²/year while maintaining strict fire resistance (Class A2-s1,d0).'
    ]
  },
  {
    id: 'art-2',
    title: 'Vacuum Insulated Glass (VIG) vs. Triple Glazing: Comprehensive 2026 Lifecycle & Performance Benchmark',
    subtitle: 'Why ultra-slim 8.3mm VIG panels are displacing 44mm triple IGU units in historical retrofits and high-density urban towers.',
    excerpt: 'With a center-of-glass U-value of 0.45 W/m²K at a fraction of the weight, VIG is revolutionizing fenestration design. We review thermal bridging, edge seal longevity, and acoustic transmission test results.',
    content: `
      ### The Physics of Vacuum Insulation in Architectural Fenestration

      For decades, reducing thermal conduction through architectural glazing required adding glass plies and gas cavities (Argon and Krypton). However, triple and quadruple glazed units suffer from significant drawbacks: excessive weight (exceeding 45 kg/m²), thick frame profiles (requiring 85mm+ profile depths), and seal degradation over 25-year spans.

      #### How VIG Works: The 0.15mm Micro-Pillar Matrix
      Vacuum Insulated Glass utilizes two 4mm or 5mm tempered glass panes separated by a microscopic vacuum gap (less than $10^{-4}$ Torr, evacuated through a laser-fused port). Tiny ceramic or stainless steel micro-pillars (0.3mm diameter, spaced 40mm apart) prevent the panes from touching under atmospheric pressure.

      #### Comparison Matrix: VIG vs. Standard Triple IGU
      - **Thickness**: VIG (8.3 mm) vs. Triple Glazed IGU (36 mm - 48 mm)
      - **Weight**: VIG (18 kg/m²) vs. Triple Glazed IGU (32-42 kg/m²)
      - **Ug Value**: VIG (0.40 - 0.48 W/m²K) vs. Triple IGU (0.50 - 0.70 W/m²K)
      - **Visible Light Transmission**: VIG (76%) vs. Triple IGU (68%)
      - **Sound Insulation**: VIG with laminated ply reaches **Rw 41 dB** in single sash.

      #### Retrofit Advantage
      In landmark historic buildings where original wooden or steel frames cannot be enlarged, VIG can be dropped directly into existing 10mm glazing rebates, immediately boosting energy efficiency by 400% without altering historical sightlines.
    `,
    category: 'glass-glazing',
    categoryLabel: 'Architectural Glass',
    author: {
      name: 'Elena Rostova',
      role: 'Head of Glass Technology Research',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      organization: 'Fraunhofer Institute for Building Physics'
    },
    date: 'August 17, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['VIG', 'Vacuum Glazing', 'Low-E', 'Acoustic Glass', 'Historic Retrofit', 'U-value 0.45'],
    isFeatured: true,
    isTrending: true,
    views: 11290,
    commentsCount: 24,
    techSpecs: [
      { label: 'Center of Glass (Ug)', value: '0.45 W/m²K' },
      { label: 'Total Thickness', value: '8.3 mm' },
      { label: 'Light Transmission (VLT)', value: '76%' },
      { label: 'Solar Heat Gain (SHGC)', value: '0.38' },
      { label: 'Acoustic Rating (Rw)', value: '39 dB (Single) / 44 dB (Hybrid)' }
    ]
  },
  {
    id: 'art-3',
    title: 'Minimalist Large-Span Sliding Doors: Engineering Floor-to-Ceiling 6-Meter Panes with Zero Sightlines',
    subtitle: 'How bottom-bearing stainless rollers, recessed drainage tracks, and structural interlocks withstand 2,400 Pa wind pressures.',
    excerpt: 'Architects demand completely concealed outer frames with interlock profiles as slim as 18mm. Here is how modern hardware engineering solves drainage, acoustic bridging, and effortless 800kg motorized operation.',
    content: `
      ### The Pursuit of Continuous Transparency

      The architectural trend toward blurring the boundary between interior luxury and external panorama has driven sliding window dimensions to unprecedented scales. Single sliding glass panels regularly exceed 3.5m in width and 6m in height, weighing upwards of 800 kg per sash.

      #### 1. Weight Distribution and Micro-Bearing Tracks
      To ensure smooth manual gliding (operating force under 15 Newtons for an 800kg leaf), system manufacturers utilize high-precision synthetic rollers with ceramic needle bearings rolling along hardened stainless steel tracks.

      #### 2. Concealed Drainage & Siphonic Water Evacuation
      Recessed floor tracks embedded flush with indoor finished stone face severe water ingress challenges under driven rain. Multi-chamber stainless gutters equipped with automated siphonic drains and pneumatic rubber seals ensure zero water penetration at 1,200 Pa test pressures (Class E1200).

      #### 3. Smart Actuation and Building Management Integration
      Concealed linear magnetic drive motors integrated into the top transom profile allow silent operation (< 28 dB) with automated pinch-protection sensors and integration with KNX/Crestron home automation.
    `,
    category: 'windows-doors',
    categoryLabel: 'Windows & Doors',
    author: {
      name: 'Matteo Moretti',
      role: 'Principal Architectural Systems Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      organization: 'Milan Façade & Hardware Studio'
    },
    date: 'August 16, 2026',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Minimalist Sliding', 'Aluminium Systems', 'Concealed Drainage', 'Motorization', '18mm Sightline'],
    isFeatured: true,
    isEditorChoice: true,
    views: 9840,
    commentsCount: 19,
    techSpecs: [
      { label: 'Interlock Sightline Width', value: '18 mm' },
      { label: 'Max Sash Weight', value: '800 kg (Motorized) / 500 kg (Manual)' },
      { label: 'Max Glazing Height', value: '6,000 mm' },
      { label: 'Air Permeability', value: 'Class 4 (EN 12207)' },
      { label: 'Water Tightness', value: 'Class E1200 (EN 12208)' }
    ]
  },
  {
    id: 'art-4',
    title: 'Global Aluminium & Float Glass Price Volatility: Strategic Procurement Forecast Q3/Q4 2026',
    subtitle: 'Analyzing the impact of CBAM carbon border tariffs, natural gas prices, and green bauxite sourcing on fenestration fabricators.',
    excerpt: 'Raw material expenses represent 62% of a facade contractor’s cost base. Our commodities desk breaks down LME cash settlements, low-carbon billet premiums, and how to hedge against sudden cost escalations.',
    content: `
      ### Commodity Supply Chain Dynamics in Global Fenestration

      Fenestration fabricators and facade contractors face a shifting procurement landscape influenced by stringent carbon accounting, fluctuating bauxite supply chains, and evolving regional green building mandates.

      #### 1. Low-Carbon Billet Premiums (4.0 kg CO2 / kg Al)
      Primary aluminium produced via hydroelectric smelting (such as Hydro REDUXA and Schüco Low Carbon) commands a premium of $80-$120 per metric ton over standard coal-powered smelter output. However, compliance with European CBAM regulations and LEED v4.1 makes this investment essential for international tier-1 projects.

      #### 2. Float Glass Energy Tariffs & Raw Soda Ash Availability
      Float glass furnaces, which operate continuously at 1,600°C for 15-year campaigns, are increasingly transitioning to oxy-fuel and hybrid electric melting. In Europe, the introduction of certified recycled cullet targets (minimum 30% external cullet) has created regional scrap glass shortages, exerting upward pressure on base float prices.
    `,
    category: 'market-prices',
    categoryLabel: 'Market & Commodities',
    author: {
      name: 'Arthur Sterling',
      role: 'Senior Commodities Analyst',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      organization: 'Fenestration Financial Index Group'
    },
    date: 'August 15, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    tags: ['LME Aluminium', 'Float Glass', 'CBAM', 'Supply Chain', 'Procurement', 'Billet Costs'],
    isTrending: true,
    views: 8640,
    commentsCount: 15,
    techSpecs: [
      { label: 'LME 3-Month Aluminium Cash', value: '$2,488.50 / MT' },
      { label: 'Low-Carbon Billet Premium', value: '+$95 / MT' },
      { label: 'European Float Index (6mm Clear)', value: '€32.80 / sq.m' },
      { label: 'Architectural Hardware 316 SS', value: '$3,820 / MT' }
    ]
  },
  {
    id: 'art-5',
    title: 'Acoustic Comfort in Mega-City High-Rises: Designing Façades to Attenuate 50dB Ambient Traffic Noise',
    subtitle: 'Asymmetrical IGU configurations, acoustic PVB interlayers, and decoupling gaskets: The engineering blueprint.',
    excerpt: 'Airport noise and highway corridors require specialized acoustic facade design. Learn how unequal glass thicknesses prevent coincidence resonance dips and achieve sound reduction index Rw + Ctr up to 48dB.',
    content: `
      ### The Physics of Sound Transmission Through Glass and Framing

      Acoustic performance in building envelopes is governed by the mass law, stiffness, and damping characteristics of both the transparent glazing and the opaque profile framework.

      #### 1. Overcoming Coincidence Frequency Dip
      When sound waves strike a single glass pane at an angle matching the bending wave velocity, a severe drop in sound insulation occurs (the coincidence effect). By pairing unequal glass plies—for example, 10mm monolithic outer glass with 66.2 (12.76mm) acoustic laminated inner glass—the coincidence dips are decoupled across different frequency bands, preventing critical sound leaks.

      #### 2. The Acoustic PVB Damping Advantage
      Standard PVB interlayers (0.76mm) provide basic safety against shattered glass fallout. Specialized acoustic tri-layer PVB includes an ultra-soft viscoelastic core sandwiched between two structural PVB films. This core converts acoustic vibration energy into microscopic thermal friction, yielding an immediate +3dB to +5dB improvement in traffic noise attenuation ($R_{tr}$).
    `,
    category: 'hardware-automation',
    categoryLabel: 'Hardware & Acoustics',
    author: {
      name: 'Dr. Sofia Lindqvist',
      role: 'Senior Acoustic Consultant & Façade Physicist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      organization: 'Scandinavian Building Physics Lab'
    },
    date: 'August 14, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Acoustic Glass', 'Rw 48dB', 'Acoustic PVB', 'Sound Transmission Class', 'Decoupling Gaskets'],
    views: 7420,
    commentsCount: 12,
    techSpecs: [
      { label: 'Target Noise Reduction (Rw + Ctr)', value: '46 dB' },
      { label: 'Glass Build-up', value: '10mm Toughened + 16mm Argon + 66.2 Acoustic PVB' },
      { label: 'Gasket System', value: 'Dual Continuous EPDM with Corner Vulcanization' },
      { label: 'Profile Damping', value: 'Heavyweight Composite Acoustic Infills' }
    ]
  },
  {
    id: 'art-6',
    title: 'CWCT & ASTM Test Updates: Rigorous Dynamic Water Tightness & Inter-Story Seismic Drift Testing',
    subtitle: 'Navigating mock-up test protocols, chamber pressure pulses, and failure forensics for curtain wall fabricators.',
    excerpt: 'Full-scale chamber testing at notified bodies like ift Rosenheim, Lucideon, and Thomas Bell-Wright is mandatory for high-tier façades. We break down the top failure modes and preventative gasket details.',
    content: `
      ### Navigating Mandatory Façade Mock-up Test Protocols

      Prior to site installation, complex custom unitized curtain walls must undergo grueling laboratory mock-up tests. Standards including ASTM E283, E330, E331, AAMA 501.1 (dynamic water), and CWCT Section 5 to 9 subject full-scale 2-story prototypes to extreme environmental simulations.

      #### 1. Dynamic Water Penetration Testing (AAMA 501.1)
      Unlike static water tests where constant vacuum is applied, dynamic tests utilize an aircraft wind generator creating 120 km/h turbulent wind gusts while spraying 3.4 liters of water per minute per square meter. Any gasket bypass, weep hole back-pressure, or corner seal inadequacy is instantly exposed.

      #### 2. Seismic Drift & Racking Movement
      The mock-up frame is connected to hydraulic rams that shift the floor slabs horizontally by $\\pm 30\\text{ mm}$ to verify that glass plies do not clash with aluminium mullion rebates, gasket lips remain seated, and weather tightness is fully maintained after the earthquake simulation.
    `,
    category: 'facades',
    categoryLabel: 'Façades & Testing',
    author: {
      name: 'Kenneth O’Connor',
      role: 'Director of Façade Certification & Testing',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
      organization: 'International Testing Labs'
    },
    date: 'August 12, 2026',
    readTime: '9 min read',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    tags: ['CWCT Testing', 'ASTM E331', 'AAMA 501.1', 'ift Rosenheim', 'Seismic Drift', 'Gaskets'],
    views: 6890,
    commentsCount: 16,
    techSpecs: [
      { label: 'Static Air Infiltration', value: 'ASTM E283 @ 300 Pa (<0.05 L/s·m²)' },
      { label: 'Static Water Resistance', value: 'ASTM E331 @ 1000 Pa (No Leak)' },
      { label: 'Dynamic Water Tightness', value: 'AAMA 501.1 (Aero Engine @ 1000 Pa)' },
      { label: 'Structural Wind Deflection', value: 'L/175 or max 20mm @ 3.5 kPa' }
    ]
  }
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'proj-1',
    title: 'The Vertex Tower: 68-Storey Aerodynamic Unitized Façade with Integrated Photovoltaics',
    architect: 'Zaha Hadid Architects & Foster Studio',
    facadeConsultant: 'Buro Happold Façade Engineering',
    systemSupplier: 'Schüco International & Permasteelisa',
    location: 'London, United Kingdom',
    year: 2025,
    facadeType: 'Unitized Curtain Wall',
    glassSpec: 'Saint-Gobain COOL-LITE® XTREME 70/33 on ORAÉ® Low-Carbon Substrate (Triple IGU)',
    uValue: '0.64 W/m²K',
    shgc: '0.28',
    acousticRw: '47 dB',
    facadeArea: '52,000 m²',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    description: 'A benchmark in carbon-neutral skyscraper engineering featuring curved triple-glazed unitized panels, integrated motorized top-hung natural ventilation sashes, and 12,000 m² of custom BIPV spandrel glass.',
    features: ['Curved Warm-Edge Spacer Bars', 'Dynamic Wind-Load Pressure Equalization', 'BREEAM Outstanding Rated']
  },
  {
    id: 'proj-2',
    title: 'Oasis Marina Headquarters: Double-Skin Ventilated Glass Envelope with Kinetic Louvers',
    architect: 'Atelier Jean Nouvel',
    facadeConsultant: 'Arup Façade Engineering',
    systemSupplier: 'Reynaers Aluminium & AGC Glass',
    location: 'Dubai Marina, UAE',
    year: 2026,
    facadeType: 'Double-Skin Ventilated',
    glassSpec: 'AGC Energy 72/38 Extra Clear Laminated + Motorized Sand-Resistant Aluminium Fins',
    uValue: '0.82 W/m²K',
    shgc: '0.21',
    acousticRw: '51 dB',
    facadeArea: '38,500 m²',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    description: 'Engineered specifically for hyper-arid coastal environments, utilizing an automated ventilated thermal buffer cavity with smart solar tracking louvers that drop cooling energy requirements by 42%.',
    features: ['Thermal Chimney Stack Effect', 'Sand-Storm Abrasion Resistant Coating', 'Smart Sensor Sun-Tracking']
  },
  {
    id: 'proj-3',
    title: 'Nordic Botanical Pavilion: Frameless Structural Glazing with SentryGlas® Ionoplast Cables',
    architect: 'Snøhetta Architects',
    facadeConsultant: 'Eckersley O’Callaghan',
    systemSupplier: 'Kuraray Trosifol & Guardian Glass',
    location: 'Oslo, Norway',
    year: 2025,
    facadeType: 'Point-Fixed Cable Net',
    glassSpec: 'Guardian SunGuard® SNX 60 on UltraClear™ with 1.52mm SentryGlas® (12m Jumbo Panes)',
    uValue: '0.72 W/m²K',
    shgc: '0.33',
    acousticRw: '44 dB',
    facadeArea: '14,200 m²',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    description: 'An ethereal crystalline pavilion with 12-meter single span structural glass fins supported by pre-stressed stainless steel tension cables, creating maximum transparent vistas toward the fjord.',
    features: ['12-Meter Jumbo Sized Glass Panes', 'Zero-Steel Vertical Mullions', 'Tested down to -35°C Thermal Cycling']
  }
];

export const DIGITAL_MAGAZINES: DigitalMagazine[] = [
  {
    id: 'mag-vol-28',
    issueNumber: 'Issue 28 / 2026',
    volume: 'Vol. XXVIII',
    title: 'The Next Generation Façade: Smart Glass, Circular Aluminium & Kinetic Envelopes',
    monthYear: 'August - September 2026',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    pageCount: 148,
    featuredTopics: [
      'Top 50 Façade Innovations of 2026',
      'Vacuum Insulated Glass: Scaling to Mass Production',
      'Interview: Schüco CEO on Carbon Control Systems',
      'Special Report: Zak Doors & Windows Expo Preview'
    ],
    pdfSize: '34.2 MB',
    readTime: '45 mins',
    editorNote: 'In this milestone 28th edition, we dive into how building envelopes are evolving from passive weather barriers into intelligent thermodynamic powerhouses.'
  },
  {
    id: 'mag-vol-27',
    issueNumber: 'Issue 27 / 2026',
    volume: 'Vol. XXVII',
    title: 'Architectural Glass Mastery: Low-Carbon Float, VIG & Seismic Glazing',
    monthYear: 'June - July 2026',
    coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
    pageCount: 132,
    featuredTopics: [
      'Saint-Gobain ORAÉ® and Decarbonized Float Glass',
      'High-Load Interlayers for Hurricane Zones',
      'Minimalist Frame Hardware Engineering',
      'CWCT Dynamic Test Standards Deep-Dive'
    ],
    pdfSize: '29.8 MB',
    readTime: '40 mins',
    editorNote: 'Explore the chemistries, coatings, and testing rigs pushing the boundaries of architectural glass safety and environmental transparency.'
  },
  {
    id: 'mag-vol-26',
    issueNumber: 'Issue 26 / 2026',
    volume: 'Vol. XXVI',
    title: 'Windows & Hardware Systems: Precision Extrusions, Thermal Breaks & Automation',
    monthYear: 'April - May 2026',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    pageCount: 124,
    featuredTopics: [
      'Aluminium vs uPVC: 2026 Life-Cycle Carbon Audit',
      'Concealed Multi-Point Locking Hardware',
      'Fire-Rated Glazing (EI 60 to EI 120)',
      'Global Extrusion Die Manufacturing Advances'
    ],
    pdfSize: '28.1 MB',
    readTime: '38 mins',
    editorNote: 'A comprehensive technical overview of precision hardware, micro-rollers, thermal struts, and multi-point security mechanisms.'
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    name: 'Zak Doors & Windows Expo & Zak Façades Summit',
    dates: 'Dec 03 - 06, 2026',
    location: 'Mumbai, India',
    cityCountry: 'Mumbai, India',
    venue: 'Bombay Exhibition Centre (BEC)',
    category: 'Expo & Trade Fair',
    attendeesCount: '32,000+',
    exhibitorsCount: '550+',
    websiteUrl: 'https://zakdoorsandwindows.com',
    featured: true,
    description: 'South Asia’s leading expo on doors, windows, façades, glass processing, fenestration machinery, and architectural hardware.'
  },
  {
    id: 'ev-2',
    name: 'Fensterbau Frontale & HOLZ-HANDWERK',
    dates: 'March 24 - 27, 2027',
    location: 'Nuremberg, Germany',
    cityCountry: 'Nuremberg, Germany',
    venue: 'Exhibition Centre Nuremberg',
    category: 'Expo & Trade Fair',
    attendeesCount: '110,000+',
    exhibitorsCount: '1,300+',
    websiteUrl: 'https://www.frontale.de',
    featured: true,
    description: 'The world-leading trade fair for window, door, and facade technologies, profile systems, glass in architecture, and hardware.'
  },
  {
    id: 'ev-3',
    name: 'Glasstec Düsseldorf 2026',
    dates: 'Oct 20 - 23, 2026',
    location: 'Düsseldorf, Germany',
    cityCountry: 'Düsseldorf, Germany',
    venue: 'Messe Düsseldorf',
    category: 'Expo & Trade Fair',
    attendeesCount: '48,000+',
    exhibitorsCount: '1,200+',
    websiteUrl: 'https://www.glasstec-online.com',
    featured: true,
    description: 'The international mega-event for glass production, processing, finishing, solar glass, and architectural glass innovations.'
  },
  {
    id: 'ev-4',
    name: 'GlassBuild America 2026',
    dates: 'Sept 30 - Oct 02, 2026',
    location: 'Atlanta, Georgia, USA',
    cityCountry: 'Atlanta, GA, USA',
    venue: 'Georgia World Congress Center',
    category: 'Expo & Trade Fair',
    attendeesCount: '18,500+',
    exhibitorsCount: '480+',
    websiteUrl: 'https://www.glassbuildamerica.com',
    featured: false,
    description: 'The largest annual gathering for the North American glass, window, and door industries organized by NGA.'
  },
  {
    id: 'ev-5',
    name: 'BAU Munich 2027',
    dates: 'Jan 11 - 16, 2027',
    location: 'Munich, Germany',
    cityCountry: 'Munich, Germany',
    venue: 'Trade Fair Center Messe München',
    category: 'Expo & Trade Fair',
    attendeesCount: '250,000+',
    exhibitorsCount: '2,200+',
    websiteUrl: 'https://bau-muenchen.com',
    featured: false,
    description: 'World’s leading trade fair for architecture, building materials, systems, and smart envelope solutions.'
  }
];

export const DIRECTORY_VENDORS: VendorItem[] = [
  {
    id: 'v-1',
    companyName: 'Schüco International KG',
    category: 'Aluminium Systems',
    country: 'Germany',
    location: 'Bielefeld, Germany',
    verified: true,
    rating: 4.9,
    description: 'System specialist for high-quality aluminium, steel, and PVC-U window, door, and façade systems with smart building automation.',
    products: ['FWS 50 Façades', 'ASE 80.HI Sliding Doors', 'AWS 75 Windows', 'Schüco Building Skin Control'],
    certifications: ['Cradle to Cradle Certified', 'ISO 9001', 'ift Rosenheim Approved'],
    contactEmail: 'info@schueco.com',
    phone: '+49 521 783-0',
    website: 'https://www.schueco.com',
    logo: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'v-2',
    companyName: 'Saint-Gobain Glass Solutions',
    category: 'Architectural Glass',
    country: 'France',
    location: 'Paris, France',
    verified: true,
    rating: 4.9,
    description: 'Global manufacturer of advanced coated float glass, Low-E solar control glazing, acoustic laminates, and low-carbon glass.',
    products: ['COOL-LITE® XTREME', 'ORAÉ® Low Carbon Glass', 'STADIP SILENCE® Acoustic', 'MIRALITE®'],
    certifications: ['EPD Verified', 'CSTB', 'CE Marked', 'LEED Contributor'],
    contactEmail: 'contact@saint-gobain.com',
    phone: '+33 1 88 54 00 00',
    website: 'https://www.saint-gobain-glass.com',
    logo: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'v-3',
    companyName: 'Roto Frank Window & Door Technology',
    category: 'Hardware & Fittings',
    country: 'Germany',
    location: 'Leinfelden, Germany',
    verified: true,
    rating: 4.8,
    description: 'Market leader in hardware technology for tilt&turn windows, large sliding systems, and concealed architectural fittings.',
    products: ['Roto NX Tilt&Turn', 'Roto Patio Inowa Sliding', 'Roto Safe Locks', 'Roto Com-Tec Sensors'],
    certifications: ['DIN EN 13126', 'SKG-IKOB RC3', 'ift Rosenheim'],
    contactEmail: 'ftt@roto-frank.com',
    phone: '+49 711 7705-0',
    website: 'https://ftt.roto-frank.com',
    logo: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'v-4',
    companyName: 'Kuraray Trosifol & SentryGlas',
    category: 'Sealants & Interlayers',
    country: 'Japan / Germany',
    location: 'Troisdorf, Germany',
    verified: true,
    rating: 4.9,
    description: 'World-renowned supplier of structural ionoplast interlayers, acoustic PVB, color interlayers, and bird-friendly glass films.',
    products: ['SentryGlas® Structural Interlayer', 'Trosifol® SC Acoustic PVB', 'BirdSmart UV Films'],
    certifications: ['Miami-Dade NOA', 'DIBt Approved', 'ISO 14001'],
    contactEmail: 'trosifol@kuraray.com',
    phone: '+49 2241 2555 0',
    website: 'https://www.trosifol.com',
    logo: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'v-5',
    companyName: 'Reynaers Aluminium',
    category: 'Aluminium Systems',
    country: 'Belgium',
    location: 'Duffel, Belgium',
    verified: true,
    rating: 4.8,
    description: 'Leading European specialist in sustainable aluminium solutions for doors, windows, curtain walls, and solar shading.',
    products: ['MasterLine 8 Windows', 'ConceptWall 50', 'Hi-Finity Slim Frame Sliding', 'Parallux Shading'],
    certifications: ['Passive House Certified', 'Minergie-P', 'Cradle to Cradle Bronze'],
    contactEmail: 'info@reynaers.com',
    phone: '+32 15 308 500',
    website: 'https://www.reynaers.com',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'v-6',
    companyName: 'Fenesta Building Systems',
    category: 'uPVC Profiles',
    country: 'India',
    location: 'Gurugram, India',
    verified: true,
    rating: 4.7,
    description: 'India’s largest windows and doors brand providing bespoke uPVC and aluminium fenestration engineered for high wind-load and tropical noise insulation.',
    products: ['Villa Windows', 'Slide & Fold Doors', 'Heavy Duty Sliding uPVC', 'Thermal Aluminium Range'],
    certifications: ['BSI Kitemark', 'ISO 9001', 'ISO 14001'],
    contactEmail: 'response@fenesta.com',
    phone: '1800 102 9880',
    website: 'https://www.fenesta.com',
    logo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=200&q=80'
  }
];

export const TECHNICAL_CALCULATOR_PRESETS = [
  {
    name: 'Standard Double Glazing (Clear + Air)',
    description: '6mm Clear + 12mm Air + 6mm Clear',
    uValue: 2.75,
    shgc: 0.70,
    vlt: 78,
    acousticRw: 32,
    thickness: 24,
    costTier: 'Economic'
  },
  {
    name: 'High-Performance Double Low-E (Argon)',
    description: '6mm Low-E #2 + 16mm 90% Argon + 6mm Clear',
    uValue: 1.12,
    shgc: 0.35,
    vlt: 70,
    acousticRw: 35,
    thickness: 28,
    costTier: 'Mid-Range'
  },
  {
    name: 'Triple Glazed Solar Control (Passive House)',
    description: '6mm Solar Low-E #2 + 16mm Argon + 4mm Clear + 16mm Argon + 6mm Thermal Low-E #5',
    uValue: 0.58,
    shgc: 0.29,
    vlt: 62,
    acousticRw: 41,
    thickness: 48,
    costTier: 'Premium'
  },
  {
    name: 'Next-Gen Vacuum Insulated Glass (VIG Hybrid)',
    description: '4mm Low-E + 0.15mm Vacuum Gap + 4mm Tempered + 12mm Argon + 44.2 Acoustic Laminate',
    uValue: 0.44,
    shgc: 0.31,
    vlt: 72,
    acousticRw: 45,
    thickness: 24.5,
    costTier: 'Advanced'
  }
];
