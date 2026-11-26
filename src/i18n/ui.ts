export const languages = { en: 'English', az: 'Azərbaycanca' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const EMAIL = 'hello@merideladvisory.com';
export const FOUNDER = 'Tural Bayramli';
/** Tural Bayramli's own LinkedIn profile (founder block, contact page). */
export const LINKEDIN = 'https://www.linkedin.com/in/turalbayramli/';
/** Meridel Advisory's company pages. */
export const COMPANY_LINKEDIN = 'https://www.linkedin.com/company/145515249/';
export const INSTAGRAM = 'https://www.instagram.com/merideladvisory/';
export const SOCIAL = [
  { name: 'LinkedIn', href: COMPANY_LINKEDIN },
  { name: 'Instagram', href: INSTAGRAM },
];

/** Build a URL for a language-neutral path such as "/services". */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (lang === defaultLang) return clean || '/';
  return `/${lang}${clean}`;
}

export type ServiceId = 'transport' | 'network' | 'inventory' | 'cost-to-serve' | 'carbon' | 'data';
export type Service = {
  id: ServiceId;
  /** Short name for tabs and menus. */
  tab: string;
  title: string;
  text: string;
  questions: string[];
  deliverables: string[];
};
type Mode = { key: 'sea-river' | 'rail' | 'road' | 'warehouse'; title: string; text: string };
type Step = { title: string; text: string };
type Engagement = { title: string; length: string; text: string };

export interface Dict {
  htmlLang: string;
  locale: string;
  skip: string;
  nav: {
    services: string;
    insights: string;
    about: string;
    contact: string;
    menu: string;
    main: string;
    close: string;
    bookCall: string;
    allServices: string;
    company: string;
  };
  switchLabel: string;
  switchShort: string;
  home: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    adviseTitle: string;
    adviseText: string;
    servicesTitle: string;
    servicesLead: string;
    servicesMore: string;
    mapTitle: string;
    mapLead: string;
    lanes: { middle: string; south: string; europe: string };
    cities: Record<string, string>;
    regions: Record<string, string>;
    dataTitle: string;
    dataText: string;
    dataPoints: string[];
    toolsLabel: string;
    workshopTitle: string;
    workshopText: string;
    approachTitle: string;
    approachLead: string;
    engagementsTitle: string;
    engagementsLead: string;
    insightsTitle: string;
    insightsAll: string;
    founderTitle: string;
    founderText: string;
    founderMore: string;
    videoPause: string;
    videoPlay: string;
    bandText: string;
    bandCta: string;
  };
  modes: Mode[];
  services: Service[];
  questionsLabel: string;
  deliverablesLabel: string;
  steps: Step[];
  engagements: Engagement[];
  servicesPage: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    independentTitle: string;
    independentText: string;
    workshopsTitle: string;
    workshopsText: string;
    workshopTopics: string[];
    pricingTitle: string;
    pricingText: string;
  };
  diagrams: {
    example: string;
    modes: { title: string; x: string; y: string; sea: string; river: string; rail: string; multimodal: string; road: string };
    network: { title: string; customers: string; sites: string; best: string };
    abc: { title: string; value: string; demand: string; rows: string[]; cols: string[]; cells: string[][] };
    cts: { title: string; a: string; b: string; margin: string; costs: string; net: string; currency: string };
    carbon: { title: string; note: string; rows: { label: string; value: number }[] };
    dash: {
      title: string;
      kpis: { label: string; value: string }[];
      funnelTitle: string;
      stages: string[];
      failTitle: string;
      fails: string[];
    };
  };
  insights: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    readMore: string;
    by: string;
    back: string;
    otherLang: string;
    keyTakeaways: string;
    contents: string;
    related: string;
    watch: string;
    watchText: string;
    minRead: string;
  };
  anim: {
    replay: string;
    cts: { title: string; a: string; b: string; margin: string; costs: string[]; net: string; note: string };
    safety: {
      title: string;
      stock: string;
      rop: string;
      ss: string;
      order: string;
      arrive: string;
      lead: string;
      time: string;
      note: string;
    };
    audit: {
      title: string;
      shipment: string;
      invoiced: string;
      contract: string;
      check: string;
      ok: string;
      found: string;
      rows: { lane: string; invoiced: number; contract: number; note: string }[];
    };
  };
  about: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    bio: string[];
    industriesTitle: string;
    industries: string[];
    founderTitle: string;
    founderRole: string;
    credentialsTitle: string;
    credentials: string[];
    toolsTitle: string;
    languagesTitle: string;
    languages: string;
    principlesTitle: string;
    principles: Step[];
  };
  contact: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    emailLabel: string;
    whatTitle: string;
    what: string[];
    locationTitle: string;
    location: string;
    linkedinLabel: string;
  };
  cta: { title: string; text: string; button: string };
  footer: { rights: string; tagline: string };
  notFound: { title: string; text: string; home: string };
}

const en: Dict = {
  htmlLang: 'en',
  locale: 'en-GB',
  skip: 'Skip to content',
  nav: {
    services: 'Services',
    insights: 'Insights',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    main: 'Main',
    close: 'Close menu',
    bookCall: 'Book a call',
    allServices: 'All services',
    company: 'Company',
  },
  switchLabel: 'Azərbaycanca',
  switchShort: 'AZ',
  home: {
    title: 'Meridel Advisory | Supply chain and logistics consulting',
    description:
      'Supply chain consulting from Warsaw and Baku. We design transport corridors, warehouse networks and inventory policies, measure cost to serve and logistics emissions, and build the dashboards to run them, from Europe to Asia and the Gulf.',
    h1: 'We find your position. Together, we chart the course.',
    lead:
      'Meridel Advisory is a supply chain consultancy. We build the models behind better logistics decisions: which corridor and transport mode, where to hold stock, what each customer really costs to serve, and how much carbon your freight emits.',
    ctaPrimary: 'Book a free call',
    ctaSecondary: 'See our services',
    adviseTitle: 'We design how your goods move. We do not move them.',
    adviseText:
      'We are not a forwarder or a carrier, so we have nothing to sell you but the answer. We compare every way to move and store your goods on cost, time, risk and carbon, and recommend the one that fits.',
    servicesTitle: 'What we work on',
    servicesLead: 'Six areas, one method: get the facts straight, model the options, recommend one direction.',
    servicesMore: 'All services in detail',
    mapTitle: 'From Europe to China and the Gulf, through the Caucasus and Central Asia',
    mapLead:
      'We work along the trade routes that connect Europe with Türkiye, the Caucasus, the Caspian, Central Asia, China and the Gulf. We know the operators and carriers on them, so every option we model is one you can actually book.',
    lanes: {
      middle: 'Middle Corridor: China, Kazakhstan, the Caspian, the Caucasus, Türkiye and Europe',
      south: 'North–South: from the Caspian to the Gulf',
      europe: 'Within Europe: road, rail and river',
    },
    cities: {
      rotterdam: 'Rotterdam',
      warsaw: 'Warsaw',
      istanbul: 'Istanbul',
      tbilisi: 'Tbilisi',
      baku: 'Baku',
      aktau: 'Aktau',
      almaty: 'Almaty',
      xian: 'Xi’an',
      dubai: 'Dubai',
    },
    regions: {
      europe: 'Europe',
      turkiye: 'Türkiye',
      caucasus: 'Caucasus',
      centralAsia: 'Central Asia',
      china: 'China',
      gulf: 'Gulf',
    },
    dataTitle: 'Data your team can act on',
    dataText:
      'We turn raw operational data into models and live dashboards that people keep using: clean, documented and easy to change, not a one-off spreadsheet.',
    dataPoints: [
      'Delivery and last-mile performance: where orders slow down, fail or get cancelled, from order to doorstep',
      'Logistics KPI frameworks and control-tower dashboards, with one view for management and one for daily operations',
      'Automated data preparation from ERP, TMS and spreadsheets, so the monthly report builds itself',
    ],
    toolsLabel: 'Tools we build in',
    workshopTitle: 'Workshops and training',
    workshopText:
      'Hands-on sessions for analysts and managers, built on your own data: dashboard design, data preparation and modelling, and how AI and automation are changing supply chain analytics.',
    approachTitle: 'How an engagement runs',
    approachLead: 'Every project follows the same three stages, so you always know where we are and what comes next.',
    engagementsTitle: 'Typical engagements',
    engagementsLead: 'Examples of the work we take on. Each is scoped to a clear question, timeline and fixed fee.',
    insightsTitle: 'Latest insights',
    insightsAll: 'All insights',
    founderTitle: 'Who we are',
    founderText:
      'We are a small team of supply chain, finance and data specialists, founded by Tural Bayramli. We have worked inside international companies in Poland and Azerbaijan, in banking, healthcare, retail, building materials manufacturing and on-demand delivery, so we know how these decisions look from the inside. Our network, cost-to-serve and inventory models have delivered over €700,000 in annual savings.',
    founderMore: 'More about us',
    videoPause: 'Pause background video',
    videoPlay: 'Play background video',
    bandText: 'Every container, ship and truck is a line in your data. We turn those lines into decisions.',
    bandCta: 'Start with a free 30-minute call.',
  },
  modes: [
    {
      key: 'sea-river',
      title: 'Sea and river',
      text: 'Container lines, Caspian ferries and river barges: the lowest cost per tonne when time allows.',
    },
    {
      key: 'rail',
      title: 'Rail',
      text: 'Block trains and wagons across Central Asia and the Caucasus, between China and Europe.',
    },
    {
      key: 'road',
      title: 'Road',
      text: 'Full truckloads and groupage for speed, flexibility and the last mile to the customer.',
    },
    {
      key: 'warehouse',
      title: 'Warehousing',
      text: 'Where your stock sits decides how fast, and how cheaply, you can serve each market.',
    },
  ],
  services: [
    {
      id: 'transport',
      tab: 'Transport',
      title: 'Transport and corridors',
      text: 'Which route and which mode: sea, river, rail, road or a combination. We compare corridors and carriers on landed cost, transit time, reliability and risk, then help you tender.',
      questions: [
        'Is the Middle Corridor faster and cheaper than sea for our flows?',
        'Full truckload, groupage, rail or river: which fits each lane?',
        'Are we paying the right freight rates, and which lanes should we re-tender?',
      ],
      deliverables: [
        'Corridor and mode comparison on cost, time and risk',
        'Carrier shortlist, tender pack and scorecards',
        'Freight invoice audit against contracted rates',
      ],
    },
    {
      id: 'network',
      tab: 'Warehouses',
      title: 'Networks and warehouses',
      text: 'Where your warehouses should be, how many you need and which flows go through them. We model demand, transport cost and service, and test each option.',
      questions: [
        'Where should our next warehouse be?',
        'Should we serve this region ourselves or through a 3PL?',
        'Is our space in the right place for where demand is going?',
      ],
      deliverables: [
        'Network model with centre-of-gravity and site scenarios',
        'Warehouse capacity and flow review',
        '3PL options compared on total cost',
      ],
    },
    {
      id: 'inventory',
      tab: 'Inventory',
      title: 'Inventory',
      text: 'How much stock you need, where, and of which items. ABC-XYZ analysis sorts your range by value and by how steady demand is, so each group gets the right policy.',
      questions: [
        'Which items tie up cash without protecting service?',
        'How much safety stock do we really need?',
        'Which products should we stock, and which should we buy to order?',
      ],
      deliverables: [
        'ABC-XYZ segmentation of your range',
        'Safety stock and reorder points by item',
        'Stock and service-level dashboard',
      ],
    },
    {
      id: 'cost-to-serve',
      tab: 'Cost to serve',
      title: 'Cost to serve',
      text: 'The real profit of each customer, product and channel after order handling, warehousing, transport, returns and payment terms.',
      questions: [
        'Which customers cost more than they earn?',
        'What minimum order or delivery terms would fix it?',
        'Where should we price by service level?',
      ],
      deliverables: [
        'Cost-to-serve model by customer, product and route',
        'Profitability map with ranked actions',
        'Pricing and service-policy options',
      ],
    },
    {
      id: 'carbon',
      tab: 'Carbon',
      title: 'Logistics emissions',
      text: 'How much CO₂e your freight emits by lane, mode, shipment and customer, calculated with the GLEC Framework and ISO 14083, and which changes cut it without raising cost.',
      questions: [
        'What is the carbon footprint of our transport?',
        'How much would moving from road to rail or river save?',
        'What do we tell customers who ask for shipment emissions?',
      ],
      deliverables: [
        'Transport emissions baseline by lane and mode',
        'Reduction scenarios with their cost impact',
        'Emission figures for customer and sustainability reporting',
      ],
    },
    {
      id: 'data',
      tab: 'Data and dashboards',
      title: 'Data analysis and dashboards',
      text: 'Clean data, models and live dashboards your team can trust, from delivery funnels to control towers, built in the tools you already use, plus workshops to train your people.',
      questions: [
        'Can we trust the numbers in our logistics reports?',
        'Where do deliveries slow down or fail, and why?',
        'How do we stop rebuilding the same report every month?',
      ],
      deliverables: [
        'KPI framework and a live, documented dashboard',
        'Automated data preparation and models',
        'Workshops and training on your own data',
      ],
    },
  ],
  questionsLabel: 'Questions we answer',
  deliverablesLabel: 'What you receive',
  steps: [
    {
      title: 'Fix the position',
      text: 'We collect your data, map how goods, cost and service really move today, and agree on the facts.',
    },
    {
      title: 'Model the options',
      text: 'We build scenarios for the choices in front of you, with cost, service, time and carbon side by side.',
    },
    {
      title: 'Set the course',
      text: 'We recommend one direction, a plan to deliver it, and the tools your team needs to keep track.',
    },
  ],
  engagements: [
    {
      title: 'Corridor and mode study',
      length: '4–6 weeks',
      text: 'Routes and modes for a flow compared on landed cost, transit time, reliability and CO₂e, with operators who can run them.',
    },
    {
      title: 'Warehouse location study',
      length: '6–10 weeks',
      text: 'Where to hold stock, how many sites and which flows, tested on total cost and service, ready for an investment decision.',
    },
    {
      title: 'Inventory segmentation',
      length: '4–8 weeks',
      text: 'ABC-XYZ analysis of your range, with safety stock and reorder rules for every segment.',
    },
    {
      title: 'Cost-to-serve review',
      length: '4–6 weeks',
      text: 'Profit by customer, product and channel after logistics cost, with a ranked list of actions.',
    },
    {
      title: 'Logistics carbon footprint',
      length: '3–6 weeks',
      text: 'Transport emissions by lane, mode and customer under the GLEC Framework, with reduction scenarios.',
    },
    {
      title: 'Dashboard build and training',
      length: '2–6 weeks',
      text: 'A KPI framework and a live dashboard in your tool of choice, handed over with a workshop for your team.',
    },
  ],
  servicesPage: {
    title: 'Services | Meridel Advisory',
    description:
      'Supply chain and logistics consulting: transport and corridors, warehouse networks, inventory and ABC-XYZ analysis, cost to serve, logistics emissions, data analysis and dashboards.',
    h1: 'Services',
    lead: 'We build the models behind supply chain and logistics decisions. Each engagement ends with one clear recommendation and tools your team keeps using.',
    independentTitle: 'Independent by design',
    independentText:
      'We do not sell freight, storage or software. That is what lets us compare every option honestly, and it is why our recommendations hold up when finance and operations look at them together.',
    workshopsTitle: 'Workshops and training',
    workshopsText:
      'Half-day to two-day sessions for analysts, planners and managers, run in person or online, in English, Azerbaijani or Turkish. We use your own data, so the dashboards and models built in the room are ones you keep.',
    workshopTopics: [
      'Dashboard design that people actually read',
      'Data preparation with Power Query, Alteryx and Tableau Prep',
      'Logistics KPIs: what to measure and how',
      'AI and automation in supply chain analytics',
    ],
    pricingTitle: 'How we price',
    pricingText:
      'After a free first call, we send a short proposal with the question, scope, timeline and a fixed fee. No open-ended hourly billing.',
  },
  diagrams: {
    example: 'Illustrative example',
    modes: {
      title: 'Choosing a mode: cost against time',
      x: 'Faster',
      y: 'Cheaper per tonne',
      sea: 'Sea',
      river: 'River',
      rail: 'Rail',
      multimodal: 'Rail + road',
      road: 'Road',
    },
    network: {
      title: 'Finding the best warehouse location',
      customers: 'Customers, by volume',
      sites: 'Candidate sites',
      best: 'Best location',
    },
    abc: {
      title: 'ABC-XYZ: a policy for every group',
      value: 'Value',
      demand: 'Demand',
      rows: ['A', 'B', 'C'],
      cols: ['X steady', 'Y variable', 'Z irregular'],
      cells: [
        ['Lean stock, automatic reorder', 'Safety stock, close review', 'Buy or make to order'],
        ['Automatic reorder', 'Standard safety stock', 'Small buffer or to order'],
        ['Simple min–max', 'Periodic review', 'Review or delist'],
      ],
    },
    cts: {
      title: 'Same sales, different profit',
      a: 'Customer A',
      b: 'Customer B',
      margin: 'Gross margin',
      costs: 'Cost to serve',
      net: 'Net profit',
      currency: 'AZN',
    },
    carbon: {
      title: 'CO₂e per tonne shipped',
      note: 'Index, road all the way = 100',
      rows: [
        { label: 'Road all the way', value: 100 },
        { label: 'Rail with road at each end', value: 42 },
        { label: 'Sea, then rail', value: 26 },
      ],
    },
    dash: {
      title: 'Delivery performance',
      kpis: [
        { label: 'Completed', value: '94.2%' },
        { label: 'On time', value: '88.6%' },
        { label: 'Avg. delivery', value: '41 min' },
      ],
      funnelTitle: 'Order funnel',
      stages: ['Created', 'Accepted', 'Picked up', 'Delivered'],
      failTitle: 'Where orders fail',
      fails: ['No courier', 'Store delay', 'Customer'],
    },
  },
  insights: {
    title: 'Insights | Meridel Advisory',
    description: 'Practical articles on supply chain cost, inventory and logistics data, written for the people who run the numbers.',
    h1: 'Insights',
    lead: 'Practical articles on supply chain cost, inventory and logistics data, written for the people who run the numbers.',
    readMore: 'Read the article',
    by: 'By',
    back: 'All insights',
    otherLang: 'Bu məqaləni azərbaycanca oxuyun',
    keyTakeaways: 'Key takeaways',
    contents: 'In this article',
    related: 'More insights',
    watch: 'Cost to serve in 90 seconds',
    watchText: 'A short animated explainer with the same example as this article.',
    minRead: 'min read',
  },
  anim: {
    replay: 'Play again',
    cts: {
      title: 'Same sales, different profit',
      a: 'Customer A',
      b: 'Customer B',
      margin: 'Gross margin',
      costs: ['Order handling', 'Warehousing', 'Transport', 'Returns', 'Payment terms'],
      net: 'Net profit',
      note: 'Example figures per customer per month, in AZN.',
    },
    safety: {
      title: 'How safety stock protects service',
      stock: 'Stock on hand',
      rop: 'Reorder point',
      ss: 'Safety stock',
      order: 'Order placed',
      arrive: 'Delivery arrives',
      lead: 'Lead time',
      time: 'Weeks',
      note: 'Demand of about 100 units a week, a four-week lead time and a 95% service level.',
    },
    audit: {
      title: 'Checking invoices against the contract',
      shipment: 'Shipment',
      invoiced: 'Invoiced',
      contract: 'Contract',
      check: 'Check',
      ok: 'OK',
      found: 'Overcharges found',
      rows: [
        { lane: 'Warsaw → Berlin', invoiced: 1150, contract: 1150, note: '' },
        { lane: 'Warsaw → Prague', invoiced: 1386, contract: 1300, note: 'Fuel surcharge' },
        { lane: 'Łódź → Vilnius', invoiced: 1050, contract: 1050, note: '' },
        { lane: 'Poznań → Riga', invoiced: 1542, contract: 1450, note: 'Wrong weight band' },
        { lane: 'Warsaw → Kyiv', invoiced: 1636, contract: 1600, note: 'Waiting time not ordered' },
      ],
    },
  },
  about: {
    title: 'About | Meridel Advisory',
    description: 'Meridel Advisory is a small, independent team of supply chain, finance and data specialists working from Warsaw and Baku.',
    h1: 'About us',
    lead: 'A meridian is the line navigators use to fix their position. We do the same for your supply chain: establish where you stand, then set a clear direction.',
    bio: [
      'Meridel Advisory is a small, independent team of supply chain, finance and data specialists. We work from Warsaw and Baku with companies that trade across Europe, the Caucasus, Central Asia, China and the Gulf.',
      'We built our experience inside international companies in Poland and Azerbaijan: in banking, healthcare and medical products, retail, building materials manufacturing, and on-demand delivery and ride-hailing. That is where we learned how logistics, cost and service decisions are really made, and what it takes for a model to be used after the consultants leave.',
      'Our work covers logistics network and cost-to-serve models, inventory risk simulations, warehouse location studies, logistics carbon emission calculations, delivery performance analytics and the dashboards that track them. Together these models have delivered over €700,000 in annual savings across Benelux, DACH, Iberia, Italy and the wider EMEA region.',
      'Because our background is in finance as well as operations, every recommendation we make is tied to the profit and loss statement, not only to operational metrics.',
    ],
    industriesTitle: 'Industries we have worked in',
    industries: [
      'Banking and financial services',
      'Healthcare and medical products',
      'Retail',
      'Building materials manufacturing',
      'On-demand delivery and ride-hailing',
      'Logistics and transport',
    ],
    founderTitle: 'Founder',
    founderRole: 'Founder, supply chain finance and network optimisation',
    credentialsTitle: 'Education and certifications',
    credentials: [
      'Master’s degree in Data Science (WSB University, Poland), with distinction',
      'Master’s degree in Accounting and Audit (UNEC, Azerbaijan)',
      'Bachelor’s degree in Finance (UNEC, Azerbaijan)',
      'Alteryx Designer Core certification',
      'J.P. Morgan Greenbelt certificate in Alteryx, Tableau and Python',
      'CFA Institute Investment Foundations',
    ],
    toolsTitle: 'Tools we work with',
    languagesTitle: 'Languages',
    languages: 'English, Azerbaijani and Turkish',
    principlesTitle: 'How we work',
    principles: [
      { title: 'Facts before opinions', text: 'Every recommendation traces back to your own data, and we show the working.' },
      { title: 'One clear direction', text: 'We compare the options, then recommend one. You should never leave with only a list of possibilities.' },
      { title: 'Tools that stay', text: 'Models and dashboards are handed over, documented, so your team can run them without us.' },
    ],
  },
  contact: {
    title: 'Contact | Meridel Advisory',
    description: 'Book a free 30-minute call with Meridel Advisory.',
    h1: 'Start with a 30-minute call',
    lead: 'Tell us what you are trying to decide. The first call is free, and if we are not the right fit, we will say so.',
    emailLabel: 'Email us',
    whatTitle: 'Useful to include',
    what: [
      'The decision or problem in one or two sentences',
      'Which systems your data lives in (ERP, TMS, planning tools, spreadsheets)',
      'Any deadline you are working to',
    ],
    locationTitle: 'Where we are',
    location: 'Warsaw, Poland and Baku, Azerbaijan. Meetings in person or online.',
    linkedinLabel: 'Tural Bayramli on LinkedIn',
  },
  cta: {
    title: 'Have a supply chain decision to make?',
    text: 'Tell us about it. The first call is free.',
    button: 'Book a free call',
  },
  footer: {
    rights: 'All rights reserved.',
    tagline: 'Supply chain and logistics consulting, from Europe to Asia and the Gulf.',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has moved.',
    home: 'Go to the home page',
  },
};

const az: Dict = {
  htmlLang: 'az',
  locale: 'az-AZ',
  skip: 'Məzmuna keçin',
  nav: {
    services: 'Xidmətlər',
    insights: 'Məqalələr',
    about: 'Haqqımızda',
    contact: 'Əlaqə',
    menu: 'Menyu',
    main: 'Əsas bölmələr',
    close: 'Menyunu bağlayın',
    bookCall: 'Görüş təyin edin',
    allServices: 'Bütün xidmətlər',
    company: 'Şirkət',
  },
  switchLabel: 'English',
  switchShort: 'EN',
  home: {
    title: 'Meridel Advisory | Təchizat zənciri və logistika üzrə konsaltinq',
    description:
      'Varşava və Bakıdan təchizat zənciri üzrə konsaltinq. Daşıma dəhlizlərini, anbar şəbəkələrini və ehtiyat siyasətini qurur, xidmət xərcini və logistika emissiyalarını ölçür, onları idarə etmək üçün panellər hazırlayırıq: Avropadan Asiyaya və Körfəzə qədər.',
    h1: 'Mövqeyinizi müəyyən edirik. İstiqaməti birlikdə qururuq.',
    lead:
      'Meridel Advisory təchizat zənciri üzrə konsaltinq şirkətidir. Daha yaxşı logistika qərarlarının arxasındakı modelləri qururuq: hansı dəhliz və daşıma növü, ehtiyatı harada saxlamaq, hər müştəriyə xidmətin real xərci və yüklərinizin nə qədər karbon atdığı.',
    ctaPrimary: 'Ödənişsiz görüş təyin edin',
    ctaSecondary: 'Xidmətlərimizə baxın',
    adviseTitle: 'Yüklərinizin necə hərəkət edəcəyini biz qururuq. Daşımanı isə biz etmirik.',
    adviseText:
      'Ekspeditor və ya daşıyıcı deyilik, ona görə sizə satacağımız yeganə şey düzgün cavabdır. Mallarınızı daşımağın və saxlamağın hər yolunu xərc, vaxt, risk və karbon baxımından müqayisə edir, sizə uyğun olanı tövsiyə edirik.',
    servicesTitle: 'Nə üzərində işləyirik',
    servicesLead: 'Altı sahə, bir metod: faktları dəqiqləşdiririk, variantları modelləşdiririk, bir istiqamət tövsiyə edirik.',
    servicesMore: 'Bütün xidmətlər ətraflı',
    mapTitle: 'Avropadan Çinə və Körfəzə, Qafqaz və Mərkəzi Asiya üzərindən',
    mapLead:
      'Avropanı Türkiyə, Qafqaz, Xəzər, Mərkəzi Asiya, Çin və Körfəzlə birləşdirən ticarət yolları üzərində işləyirik. Bu yollardakı operatorları və daşıyıcıları tanıyırıq, ona görə modelləşdirdiyimiz hər variant real olaraq sifariş verə biləcəyiniz variantdır.',
    lanes: {
      middle: 'Orta Dəhliz: Çin, Qazaxıstan, Xəzər, Qafqaz, Türkiyə və Avropa',
      south: 'Şimal–Cənub: Xəzərdən Körfəzə',
      europe: 'Avropa daxilində: avtomobil, dəmir yolu və çay',
    },
    cities: {
      rotterdam: 'Rotterdam',
      warsaw: 'Varşava',
      istanbul: 'İstanbul',
      tbilisi: 'Tbilisi',
      baku: 'Bakı',
      aktau: 'Aktau',
      almaty: 'Almatı',
      xian: 'Sian',
      dubai: 'Dubay',
    },
    regions: {
      europe: 'Avropa',
      turkiye: 'Türkiyə',
      caucasus: 'Qafqaz',
      centralAsia: 'Mərkəzi Asiya',
      china: 'Çin',
      gulf: 'Körfəz',
    },
    dataTitle: 'Komandanızın istifadə edə biləcəyi məlumatlar',
    dataText:
      'Xam əməliyyat məlumatlarını insanların davamlı istifadə etdiyi modellərə və canlı panellərə çeviririk: təmiz, sənədləşdirilmiş və asan dəyişdirilə bilən, birdəfəlik cədvəl deyil.',
    dataPoints: [
      'Çatdırılma və son mil performansı: sifarişdən qapıya qədər sifarişlər harada yavaşlayır, uğursuz olur və ya ləğv edilir',
      'Logistika KPI sistemləri və idarəetmə panelləri: rəhbərlik üçün bir görünüş, gündəlik əməliyyat üçün digəri',
      'ERP, TMS və cədvəllərdən avtomatlaşdırılmış məlumat hazırlığı ki, aylıq hesabat özü qurulsun',
    ],
    toolsLabel: 'İşlədiyimiz alətlər',
    workshopTitle: 'Seminarlar və təlimlər',
    workshopText:
      'Analitiklər və menecerlər üçün sizin öz məlumatlarınız üzərində praktik məşğələlər: panel dizaynı, məlumatların hazırlanması və modelləşdirmə, süni intellekt və avtomatlaşdırmanın təchizat zənciri analitikasını necə dəyişdirdiyi.',
    approachTitle: 'Layihə necə gedir',
    approachLead: 'Hər layihə eyni üç mərhələdən keçir, ona görə harada olduğumuzu və növbəti addımı həmişə bilirsiniz.',
    engagementsTitle: 'Tipik layihələr',
    engagementsLead: 'Gördüyümüz işlərdən nümunələr. Hər biri aydın sual, müddət və sabit ödəniş üzrə planlaşdırılır.',
    insightsTitle: 'Son məqalələr',
    insightsAll: 'Bütün məqalələr',
    founderTitle: 'Biz kimik',
    founderText:
      'Biz Tural Bayramli tərəfindən təsis edilmiş, təchizat zənciri, maliyyə və məlumat üzrə mütəxəssislərdən ibarət kiçik komandayıq. Polşa və Azərbaycanda beynəlxalq şirkətlərin daxilində bankçılıq, səhiyyə, pərakəndə satış, tikinti materialları istehsalı və çatdırılma sahələrində çalışmışıq, ona görə bu qərarların içəridən necə göründüyünü bilirik. Şəbəkə, xidmət xərci və ehtiyat modellərimiz illik 700 000 avrodan çox qənaət gətirib.',
    founderMore: 'Bizim haqqımızda ətraflı',
    videoPause: 'Fon videosunu dayandırın',
    videoPlay: 'Fon videosunu oynadın',
    bandText: 'Hər konteyner, gəmi və yük maşını məlumatlarınızda bir sətirdir. Biz bu sətirləri qərarlara çeviririk.',
    bandCta: 'Ödənişsiz 30 dəqiqəlik görüşlə başlayın.',
  },
  modes: [
    {
      key: 'sea-river',
      title: 'Dəniz və çay',
      text: 'Konteyner xətləri, Xəzər bərələri və çay barjaları: vaxt imkan verəndə tona düşən ən aşağı xərc.',
    },
    {
      key: 'rail',
      title: 'Dəmir yolu',
      text: 'Çin ilə Avropa arasında, Mərkəzi Asiya və Qafqaz üzərindən blok qatarlar və vaqonlar.',
    },
    {
      key: 'road',
      title: 'Avtomobil yolu',
      text: 'Sürət, çeviklik və müştəriyə qədər son mil üçün tam yük və yığma yük daşımaları.',
    },
    {
      key: 'warehouse',
      title: 'Anbar',
      text: 'Ehtiyatınızın harada saxlanması hər bazara nə qədər tez və ucuz xidmət göstərə biləcəyinizi müəyyən edir.',
    },
  ],
  services: [
    {
      id: 'transport',
      tab: 'Daşıma',
      title: 'Daşıma və dəhlizlər',
      text: 'Hansı marşrut və hansı daşıma növü: dəniz, çay, dəmir yolu, avtomobil yolu və ya onların birləşməsi. Dəhlizləri və daşıyıcıları çatdırılmış xərc, yolda keçən vaxt, etibarlılıq və risk baxımından müqayisə edir, sonra tender keçirməyə kömək edirik.',
      questions: [
        'Yüklərimiz üçün Orta Dəhliz dənizdən daha sürətli və ucuzdurmu?',
        'Tam yük, yığma yük, dəmir yolu, yoxsa çay: hər marşruta hansı uyğundur?',
        'Daşımaya düzgün tarif ödəyirikmi və hansı marşrutları yenidən tenderə çıxarmalıyıq?',
      ],
      deliverables: [
        'Dəhliz və daşıma növlərinin xərc, vaxt və risk üzrə müqayisəsi',
        'Daşıyıcıların qısa siyahısı, tender paketi və reytinqlər',
        'Hesab-fakturaların müqavilə tarifləri ilə auditi',
      ],
    },
    {
      id: 'network',
      tab: 'Anbarlar',
      title: 'Şəbəkələr və anbarlar',
      text: 'Anbarlarınız harada olmalıdır, neçəsi lazımdır və hansı axınlar onlardan keçməlidir. Tələbi, daşıma xərcini və xidmət səviyyəsini modelləşdirir, hər variantı yoxlayırıq.',
      questions: [
        'Növbəti anbarımız harada olmalıdır?',
        'Bu regiona özümüz, yoxsa 3PL vasitəsilə xidmət göstərməliyik?',
        'Anbar sahəmiz tələbin getdiyi istiqamətdə yerləşirmi?',
      ],
      deliverables: [
        'Ağırlıq mərkəzi və yer ssenariləri ilə şəbəkə modeli',
        'Anbar tutumu və axınlarının təhlili',
        '3PL variantlarının ümumi xərc üzrə müqayisəsi',
      ],
    },
    {
      id: 'inventory',
      tab: 'Ehtiyat',
      title: 'Ehtiyat',
      text: 'Nə qədər ehtiyat lazımdır, harada və hansı məhsullardan. ABC-XYZ təhlili çeşidinizi dəyərə və tələbin nə qədər sabit olduğuna görə qruplaşdırır ki, hər qrupa düzgün siyasət tətbiq edilsin.',
      questions: [
        'Hansı məhsullar xidməti qorumadan pulu dondurur?',
        'Əslində nə qədər sığorta ehtiyatı lazımdır?',
        'Hansı məhsulları anbarda saxlamalı, hansını sifarişlə almalıyıq?',
      ],
      deliverables: [
        'Çeşidinizin ABC-XYZ seqmentasiyası',
        'Hər məhsul üzrə sığorta ehtiyatı və sifariş nöqtələri',
        'Ehtiyat və xidmət səviyyəsi paneli',
      ],
    },
    {
      id: 'cost-to-serve',
      tab: 'Xidmət xərci',
      title: 'Xidmət xərci',
      text: 'Sifarişlərin emalı, anbar, daşıma, qaytarmalar və ödəniş şərtlərindən sonra hər müştərinin, məhsulun və kanalın real mənfəəti.',
      questions: [
        'Hansı müştərilər gətirdiyindən çox xərc yaradır?',
        'Hansı minimum sifariş və ya çatdırılma şərtləri bunu düzəldər?',
        'Harada xidmət səviyyəsinə görə qiymət qoymalıyıq?',
      ],
      deliverables: [
        'Müştəri, məhsul və marşrut üzrə xidmət xərci modeli',
        'Prioritetə görə sıralanmış addımlarla gəlirlilik xəritəsi',
        'Qiymət və xidmət siyasəti variantları',
      ],
    },
    {
      id: 'carbon',
      tab: 'Karbon',
      title: 'Logistika emissiyaları',
      text: 'Yükləriniz marşrut, daşıma növü, göndəriş və müştəri üzrə nə qədər CO₂e atır: GLEC Framework və ISO 14083 standartı ilə hesablanır. Həmçinin xərci artırmadan emissiyanı azaldan dəyişiklikləri göstəririk.',
      questions: [
        'Daşımalarımızın karbon izi nə qədərdir?',
        'Avtomobil yolundan dəmir yoluna və ya çaya keçid nə qədər qənaət edər?',
        'Göndəriş emissiyalarını soruşan müştərilərə nə deyək?',
      ],
      deliverables: [
        'Marşrut və daşıma növü üzrə emissiyaların ilkin hesabı',
        'Xərc təsiri ilə birlikdə azaltma ssenariləri',
        'Müştəri və davamlılıq hesabatları üçün emissiya rəqəmləri',
      ],
    },
    {
      id: 'data',
      tab: 'Məlumat və panellər',
      title: 'Məlumat təhlili və panellər',
      text: 'Komandanızın etibar edə biləcəyi təmiz məlumatlar, modellər və canlı panellər: çatdırılma mərhələlərindən idarəetmə mərkəzinə qədər, artıq istifadə etdiyiniz alətlərdə. Həmçinin komandanız üçün seminarlar keçirik.',
      questions: [
        'Logistika hesabatlarımızdakı rəqəmlərə etibar edə bilərikmi?',
        'Çatdırılmalar harada yavaşlayır və ya uğursuz olur, niyə?',
        'Hər ay eyni hesabatı yenidən qurmağı necə dayandıraq?',
      ],
      deliverables: [
        'KPI sistemi və sənədləşdirilmiş canlı panel',
        'Avtomatlaşdırılmış məlumat hazırlığı və modellər',
        'Sizin məlumatlarınız üzərində seminarlar və təlimlər',
      ],
    },
  ],
  questionsLabel: 'Cavab verdiyimiz suallar',
  deliverablesLabel: 'Nə əldə edirsiniz',
  steps: [
    {
      title: 'Mövqeyi müəyyən edirik',
      text: 'Məlumatlarınızı toplayır, malların, xərcin və xidmətin bu gün necə hərəkət etdiyini xəritələyir və faktlar üzərində razılaşırıq.',
    },
    {
      title: 'Variantları modelləşdiririk',
      text: 'Qarşınızdakı seçimlər üçün ssenarilər qurur, onların xərcini, xidmət səviyyəsini, vaxtını və karbonunu yan-yana qoyuruq.',
    },
    {
      title: 'İstiqaməti təyin edirik',
      text: 'Bir aydın istiqamət, onu həyata keçirmək üçün plan və komandanızın nəzarəti davam etdirməsi üçün alətlər təklif edirik.',
    },
  ],
  engagements: [
    {
      title: 'Dəhliz və daşıma növü tədqiqatı',
      length: '4–6 həftə',
      text: 'Bir axın üçün marşrut və daşıma növlərinin çatdırılmış xərc, vaxt, etibarlılıq və CO₂e üzrə müqayisəsi, onları icra edə biləcək operatorlarla.',
    },
    {
      title: 'Anbar yeri tədqiqatı',
      length: '6–10 həftə',
      text: 'Ehtiyatı harada saxlamaq, neçə anbar və hansı axınlar: ümumi xərc və xidmət üzrə yoxlanılmış, investisiya qərarına hazır.',
    },
    {
      title: 'Ehtiyatın seqmentasiyası',
      length: '4–8 həftə',
      text: 'Çeşidinizin ABC-XYZ təhlili, hər seqment üçün sığorta ehtiyatı və sifariş qaydaları ilə.',
    },
    {
      title: 'Xidmət xərcinin təhlili',
      length: '4–6 həftə',
      text: 'Logistika xərcləri nəzərə alınmaqla müştəri, məhsul və kanal üzrə mənfəət və prioritetə görə sıralanmış addımlar.',
    },
    {
      title: 'Logistikanın karbon izi',
      length: '3–6 həftə',
      text: 'GLEC Framework əsasında marşrut, daşıma növü və müştəri üzrə emissiyalar və azaltma ssenariləri.',
    },
    {
      title: 'Panel qurulması və təlim',
      length: '2–6 həftə',
      text: 'Seçdiyiniz alətdə KPI sistemi və canlı panel, komandanız üçün seminarla birlikdə təhvil verilir.',
    },
  ],
  servicesPage: {
    title: 'Xidmətlər | Meridel Advisory',
    description:
      'Təchizat zənciri və logistika üzrə konsaltinq: daşıma və dəhlizlər, anbar şəbəkələri, ehtiyat və ABC-XYZ təhlili, xidmət xərci, logistika emissiyaları, məlumat təhlili və panellər.',
    h1: 'Xidmətlər',
    lead: 'Təchizat zənciri və logistika qərarlarının arxasındakı modelləri qururuq. Hər layihə bir aydın tövsiyə və komandanızın istifadə etməyə davam edəcəyi alətlərlə bitir.',
    independentTitle: 'Müstəqil yanaşma',
    independentText:
      'Daşıma, anbar xidməti və ya proqram təminatı satmırıq. Məhz buna görə hər variantı obyektiv müqayisə edə bilirik və tövsiyələrimiz maliyyə ilə əməliyyat birlikdə baxanda da özünü doğruldur.',
    workshopsTitle: 'Seminarlar və təlimlər',
    workshopsText:
      'Analitiklər, planlaşdırıcılar və menecerlər üçün yarım gündən iki günə qədər məşğələlər: əyani və ya onlayn, ingilis, Azərbaycan və ya türk dilində. Sizin öz məlumatlarınızdan istifadə edirik, ona görə məşğələdə qurulan panellər və modellər sizdə qalır.',
    workshopTopics: [
      'İnsanların həqiqətən oxuduğu panellərin dizaynı',
      'Power Query, Alteryx və Tableau Prep ilə məlumat hazırlığı',
      'Logistika KPI-ları: nəyi və necə ölçmək',
      'Təchizat zənciri analitikasında süni intellekt və avtomatlaşdırma',
    ],
    pricingTitle: 'Qiymətləndirmə',
    pricingText:
      'Ödənişsiz ilk görüşdən sonra sual, əhatə, müddət və sabit ödənişi göstərən qısa təklif göndəririk. Saatlıq, sonu bilinməyən hesablaşma yoxdur.',
  },
  diagrams: {
    example: 'İllüstrativ nümunə',
    modes: {
      title: 'Daşıma növünün seçimi: xərc və vaxt',
      x: 'Daha sürətli',
      y: 'Tona görə daha ucuz',
      sea: 'Dəniz',
      river: 'Çay',
      rail: 'Dəmir yolu',
      multimodal: 'Dəmir yolu + avtomobil',
      road: 'Avtomobil',
    },
    network: {
      title: 'Anbar üçün ən yaxşı yerin tapılması',
      customers: 'Müştərilər, həcmə görə',
      sites: 'Mümkün yerlər',
      best: 'Ən yaxşı yer',
    },
    abc: {
      title: 'ABC-XYZ: hər qrup üçün öz siyasəti',
      value: 'Dəyər',
      demand: 'Tələb',
      rows: ['A', 'B', 'C'],
      cols: ['X sabit', 'Y dəyişkən', 'Z qeyri-müntəzəm'],
      cells: [
        ['Az ehtiyat, avtomatik sifariş', 'Sığorta ehtiyatı, yaxın nəzarət', 'Sifarişlə alış və ya istehsal'],
        ['Avtomatik sifariş', 'Standart sığorta ehtiyatı', 'Kiçik bufer və ya sifarişlə'],
        ['Sadə min–maks', 'Dövri yoxlama', 'Yoxlayın və ya çeşiddən çıxarın'],
      ],
    },
    cts: {
      title: 'Eyni satış, fərqli mənfəət',
      a: 'Müştəri A',
      b: 'Müştəri B',
      margin: 'Ümumi marja',
      costs: 'Xidmət xərci',
      net: 'Xalis mənfəət',
      currency: 'AZN',
    },
    carbon: {
      title: 'Daşınan hər ton üçün CO₂e',
      note: 'İndeks, bütün yol avtomobillə = 100',
      rows: [
        { label: 'Bütün yol avtomobillə', value: 100 },
        { label: 'Dəmir yolu, uclarda avtomobil', value: 42 },
        { label: 'Dəniz, sonra dəmir yolu', value: 26 },
      ],
    },
    dash: {
      title: 'Çatdırılma performansı',
      kpis: [
        { label: 'Tamamlanıb', value: '94,2%' },
        { label: 'Vaxtında', value: '88,6%' },
        { label: 'Orta çatdırılma', value: '41 dəq' },
      ],
      funnelTitle: 'Sifariş mərhələləri',
      stages: ['Yaradılıb', 'Qəbul edilib', 'Götürülüb', 'Çatdırılıb'],
      failTitle: 'Sifarişlər harada pozulur',
      fails: ['Kuryer yoxdur', 'Mağazada gecikmə', 'Müştəri'],
    },
  },
  insights: {
    title: 'Məqalələr | Meridel Advisory',
    description: 'Təchizat zənciri xərcləri, ehtiyat və logistika məlumatları haqqında rəqəmlərlə işləyən insanlar üçün praktik məqalələr.',
    h1: 'Məqalələr',
    lead: 'Təchizat zənciri xərcləri, ehtiyat və logistika məlumatları haqqında rəqəmlərlə işləyən insanlar üçün praktik məqalələr.',
    readMore: 'Məqaləni oxuyun',
    by: 'Müəllif:',
    back: 'Bütün məqalələr',
    otherLang: 'Read this article in English',
    keyTakeaways: 'Əsas məqamlar',
    contents: 'Bu məqalədə',
    related: 'Digər məqalələr',
    watch: 'Xidmət xərci 90 saniyədə',
    watchText: 'Bu məqalədəki nümunəni izah edən qısa animasiyalı video.',
    minRead: 'dəq oxu',
  },
  anim: {
    replay: 'Yenidən oynadın',
    cts: {
      title: 'Eyni satış, fərqli mənfəət',
      a: 'Müştəri A',
      b: 'Müştəri B',
      margin: 'Ümumi marja',
      costs: ['Sifarişlərin emalı', 'Anbar əməliyyatları', 'Daşıma', 'Qaytarmalar', 'Ödəniş müddəti'],
      net: 'Xalis mənfəət',
      note: 'Nümunə rəqəmlər, bir müştəri üzrə bir ayda, AZN ilə.',
    },
    safety: {
      title: 'Sığorta ehtiyatı xidməti necə qoruyur',
      stock: 'Anbardakı ehtiyat',
      rop: 'Sifariş nöqtəsi',
      ss: 'Sığorta ehtiyatı',
      order: 'Sifariş verilir',
      arrive: 'Mal gəlir',
      lead: 'Çatdırılma müddəti',
      time: 'Həftələr',
      note: 'Həftəlik tələb təxminən 100 ədəd, çatdırılma müddəti dörd həftə, xidmət səviyyəsi 95%.',
    },
    audit: {
      title: 'Hesab-fakturaların müqavilə ilə yoxlanılması',
      shipment: 'Daşıma',
      invoiced: 'Faktura',
      contract: 'Müqavilə',
      check: 'Yoxlama',
      ok: 'Düzdür',
      found: 'Aşkar edilən artıq ödənişlər',
      rows: [
        { lane: 'Bakı → Tbilisi', invoiced: 1100, contract: 1100, note: '' },
        { lane: 'Bakı → İstanbul', invoiced: 3486, contract: 3400, note: 'Yanacaq əlavəsi' },
        { lane: 'Sumqayıt → Gəncə', invoiced: 460, contract: 460, note: '' },
        { lane: 'Bakı → Aktau', invoiced: 2612, contract: 2520, note: 'Yanlış çəki aralığı' },
        { lane: 'Bakı → Varşava', invoiced: 4516, contract: 4480, note: 'Sifariş edilməmiş gözləmə' },
      ],
    },
  },
  about: {
    title: 'Haqqımızda | Meridel Advisory',
    description: 'Meridel Advisory Varşava və Bakıdan işləyən, təchizat zənciri, maliyyə və məlumat üzrə mütəxəssislərdən ibarət kiçik, müstəqil komandadır.',
    h1: 'Haqqımızda',
    lead: 'Meridian dənizçilərin öz mövqelərini müəyyən etmək üçün istifadə etdiyi xətdir. Biz də təchizat zənciriniz üçün eyni şeyi edirik: harada dayandığınızı dəqiqləşdirir, sonra aydın istiqamət təyin edirik.',
    bio: [
      'Meridel Advisory təchizat zənciri, maliyyə və məlumat üzrə mütəxəssislərdən ibarət kiçik, müstəqil komandadır. Varşava və Bakıdan Avropa, Qafqaz, Mərkəzi Asiya, Çin və Körfəz arasında ticarət edən şirkətlərlə işləyirik.',
      'Təcrübəmizi Polşa və Azərbaycanda beynəlxalq şirkətlərin daxilində qazanmışıq: bankçılıq, səhiyyə və tibbi məhsullar, pərakəndə satış, tikinti materialları istehsalı, sifarişlə çatdırılma və taksi xidmətləri. Logistika, xərc və xidmət qərarlarının əslində necə verildiyini və modelin məsləhətçilər gedəndən sonra da istifadə olunması üçün nə lazım olduğunu orada öyrənmişik.',
      'İşimizə logistika şəbəkəsi və xidmət xərci modelləri, ehtiyat risklərinin simulyasiyası, anbar yerləşdirmə tədqiqatları, logistika karbon emissiyalarının hesablanması, çatdırılma performansı analitikası və bunları izləyən panellər daxildir. Bu modellər birlikdə Benilüks, DACH, İberiya, İtaliya və daha geniş EMEA regionunda illik 700 000 avrodan çox qənaət gətirib.',
      'Təcrübəmiz həm maliyyə, həm də əməliyyat sahəsində olduğuna görə hər tövsiyəmiz yalnız əməliyyat göstəriciləri ilə deyil, mənfəət və zərər hesabatı ilə də əlaqələndirilir.',
    ],
    industriesTitle: 'Çalışdığımız sahələr',
    industries: [
      'Bank və maliyyə xidmətləri',
      'Səhiyyə və tibbi məhsullar',
      'Pərakəndə satış',
      'Tikinti materialları istehsalı',
      'Sifarişlə çatdırılma və taksi xidmətləri',
      'Logistika və daşıma',
    ],
    founderTitle: 'Təsisçi',
    founderRole: 'Təsisçi, təchizat zənciri maliyyəsi və şəbəkə optimallaşdırılması',
    credentialsTitle: 'Təhsil və sertifikatlar',
    credentials: [
      'Data Elmi üzrə magistr dərəcəsi (WSB Universiteti, Polşa), fərqlənmə ilə',
      'Mühasibat uçotu və audit üzrə magistr dərəcəsi (UNEC, Azərbaycan)',
      'Maliyyə üzrə bakalavr dərəcəsi (UNEC, Azərbaycan)',
      'Alteryx Designer Core sertifikatı',
      'J.P. Morgan Greenbelt sertifikatı (Alteryx, Tableau, Python)',
      'CFA Institute Investment Foundations',
    ],
    toolsTitle: 'İstifadə etdiyimiz alətlər',
    languagesTitle: 'Dillər',
    languages: 'İngilis, Azərbaycan və türk dilləri',
    principlesTitle: 'Necə işləyirik',
    principles: [
      { title: 'Əvvəl faktlar, sonra fikirlər', text: 'Hər tövsiyə sizin öz məlumatlarınıza əsaslanır və hesablamaları açıq göstəririk.' },
      { title: 'Bir aydın istiqamət', text: 'Variantları müqayisə edir, sonra birini tövsiyə edirik. Əlinizdə yalnız imkanlar siyahısı qalmamalıdır.' },
      { title: 'Sizdə qalan alətlər', text: 'Modellər və panellər sənədləşdirilərək təhvil verilir ki, komandanız onları bizsiz də işlədə bilsin.' },
    ],
  },
  contact: {
    title: 'Əlaqə | Meridel Advisory',
    description: 'Meridel Advisory ilə ödənişsiz 30 dəqiqəlik görüş təyin edin.',
    h1: '30 dəqiqəlik görüşlə başlayın',
    lead: 'Nəyə qərar vermək istədiyinizi bizə yazın. İlk görüş ödənişsizdir; uyğun tərəfdaş olmasaq, bunu açıq deyəcəyik.',
    emailLabel: 'Bizə yazın',
    whatTitle: 'Yazmağınız faydalı olar',
    what: [
      'Qərar və ya problem bir-iki cümlə ilə',
      'Məlumatlarınızın hansı sistemlərdə olduğu (ERP, TMS, planlaşdırma alətləri, cədvəllər)',
      'Əgər varsa, son tarix',
    ],
    locationTitle: 'Harada yerləşirik',
    location: 'Varşava, Polşa və Bakı, Azərbaycan. Görüşlər əyani və ya onlayn.',
    linkedinLabel: 'Tural Bayramli LinkedIn-də',
  },
  cta: {
    title: 'Təchizat zəncirinizdə qərar verməlisiniz?',
    text: 'Bizə danışın. İlk görüş ödənişsizdir.',
    button: 'Ödənişsiz görüş təyin edin',
  },
  footer: {
    rights: 'Bütün hüquqlar qorunur.',
    tagline: 'Təchizat zənciri və logistika üzrə konsaltinq, Avropadan Asiyaya və Körfəzə qədər.',
  },
  notFound: {
    title: 'Səhifə tapılmadı',
    text: 'Bu səhifə mövcud deyil və ya köçürülüb.',
    home: 'Ana səhifəyə keçin',
  },
};

export const tools = [
  'Excel',
  'Power Query',
  'Alteryx',
  'Tableau Prep',
  'Tableau',
  'Power BI',
  'Looker Studio',
  'SQL',
  'Python',
  'SAP S/4HANA',
  'Blue Yonder',
  'Databricks',
];

export const ui: Record<Lang, Dict> = { en, az };
export const t = (lang: Lang): Dict => ui[lang];

export function formatDate(date: Date, lang: Lang): string {
  if (lang === 'az') {
    const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];
    return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  }
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
