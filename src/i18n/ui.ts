export const languages = { en: 'English', az: 'Azərbaycanca' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const EMAIL = 'hello@merideladvisory.com';
export const FOUNDER = 'Tural Bayramli';
export const LINKEDIN = 'https://www.linkedin.com/in/turalbayramli/';

/** Build a URL for a language-neutral path such as "/services". */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (lang === defaultLang) return clean || '/';
  return `/${lang}${clean}`;
}

type Practice = { title: string; text: string; questions: string[] };
type Step = { title: string; text: string };
type Engagement = { title: string; length: string; text: string };

export interface Dict {
  htmlLang: string;
  locale: string;
  skip: string;
  nav: { services: string; insights: string; about: string; contact: string; menu: string };
  switchLabel: string;
  switchShort: string;
  home: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    practicesTitle: string;
    practicesLead: string;
    questionsLabel: string;
    approachTitle: string;
    approachLead: string;
    engagementsTitle: string;
    engagementsLead: string;
    insightsTitle: string;
    insightsAll: string;
    founderTitle: string;
    founderText: string;
    founderMore: string;
    mapTitle: string;
    mapLead: string;
    lanes: string[];
    cities: Record<string, string>;
    videoPause: string;
    videoPlay: string;
    bandText: string;
  };
  practices: Practice[];
  steps: Step[];
  engagements: Engagement[];
  services: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    deliverablesLabel: string;
    deliverables: string[][];
    pricingTitle: string;
    pricingText: string;
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
  };
  about: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    bio: string[];
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
  footer: { rights: string };
  notFound: { title: string; text: string; home: string };
}

const en: Dict = {
  htmlLang: 'en',
  locale: 'en-GB',
  skip: 'Skip to content',
  nav: { services: 'Services', insights: 'Insights', about: 'About', contact: 'Contact', menu: 'Menu' },
  switchLabel: 'Azərbaycanca',
  switchShort: 'AZ',
  home: {
    title: 'Meridel Advisory | Supply chain consulting',
    description:
      'Meridel Advisory is a supply chain consultancy. We find hidden cost in transport, inventory and logistics networks, model the alternatives and recommend the course that pays.',
    h1: 'Find your position. Choose your direction.',
    lead:
      'Meridel Advisory is a supply chain consultancy. We help operations and logistics leaders find the cost hidden in their network, model the alternatives, and commit to the course that pays.',
    ctaPrimary: 'Book an intro call',
    ctaSecondary: 'See our services',
    practicesTitle: 'What we work on',
    practicesLead: 'Four parts of the supply chain, one method: get the facts straight, model the choices, recommend one direction.',
    questionsLabel: 'Questions we answer',
    approachTitle: 'How an engagement runs',
    approachLead: 'Every project follows the same three stages, so you always know where we are and what comes next.',
    engagementsTitle: 'Typical engagements',
    engagementsLead: 'Examples of the work we take on. Each is scoped to a clear question, timeline and fee.',
    insightsTitle: 'Latest insights',
    insightsAll: 'All insights',
    founderTitle: 'Who you work with',
    founderText:
      'Meridel Advisory is led by Tural Bayramli, a supply chain finance and network optimisation specialist with more than six years of work across European markets. His logistics network, cost-to-serve and inventory models have delivered over €700,000 in annual savings for multinational companies.',
    founderMore: 'More about Tural',
    mapTitle: 'Between Europe, the Caucasus and the Gulf',
    mapLead:
      'Our home markets, Warsaw and Baku, sit on the trade lanes that link Europe with the Caspian, Central Asia and the Gulf. That is the region our work is built around.',
    lanes: [
      'Europe to the Caucasus, by rail and road through Türkiye',
      'Trans-Caspian, from Baku across to Central Asia',
      'North–South, from the Caspian to the Gulf',
    ],
    cities: {
      warsaw: 'Warsaw',
      istanbul: 'Istanbul',
      tbilisi: 'Tbilisi',
      baku: 'Baku',
      aktau: 'Aktau',
      almaty: 'Almaty',
      dubai: 'Dubai',
    },
    videoPause: 'Pause background video',
    videoPlay: 'Play background video',
    bandText: 'Every container, ship and truck is a line in your data. We turn those lines into decisions.',
  },
  practices: [
    {
      title: 'Transport and freight',
      text: 'Freight spend, carrier performance and route analysis, so you pay the right rate for the right service.',
      questions: [
        'Are we paying the right freight rates?',
        'Which lanes should we re-tender, and with whom?',
        'Is full truckload, groupage or rail cheaper for this flow?',
      ],
    },
    {
      title: 'Inventory and warehousing',
      text: 'Stock policies, safety stock and warehouse flows that balance service levels against cash.',
      questions: [
        'How much stock do we actually need?',
        'Which items tie up cash without protecting service?',
        'Do we have the right warehouse capacity in the right place?',
      ],
    },
    {
      title: 'Cost-to-serve and network design',
      text: 'Cost-to-serve by customer, product and channel, and network models for where to hold stock and how to ship it.',
      questions: [
        'Which customers and routes cost more than they earn?',
        'Where should our warehouses be?',
        'Should we serve this region directly or through a 3PL partner?',
      ],
    },
    {
      title: 'Supply chain data and planning',
      text: 'Clean planning data, demand forecasts, scenario models and dashboards that your team trusts and keeps using.',
      questions: [
        'Can we trust the numbers in our supply chain reports?',
        'What happens to logistics cost if volume moves by 20%?',
        'How do we stop rebuilding the same spreadsheet every month?',
      ],
    },
  ],
  steps: [
    {
      title: 'Fix the position',
      text: 'We collect your data, map how goods, cost and service really move today, and agree on the facts.',
    },
    {
      title: 'Model the options',
      text: 'We build scenarios for the choices in front of you, with cost, service and timing side by side.',
    },
    {
      title: 'Set the course',
      text: 'We recommend one direction, a plan to deliver it, and the tools your team needs to keep track.',
    },
  ],
  engagements: [
    {
      title: 'Cost-to-serve review',
      length: '4–6 weeks',
      text: 'Profitability by customer, product and channel after logistics cost, with a ranked list of actions.',
    },
    {
      title: 'Freight spend audit',
      length: '3–4 weeks',
      text: 'Every invoice checked against contracted rates, overcharges recovered, and lanes worth re-tendering identified.',
    },
    {
      title: 'Inventory policy model',
      length: '4–8 weeks',
      text: 'Safety stock and reorder points by item, tested against your service targets and cash limits.',
    },
    {
      title: 'Network study',
      length: '6–10 weeks',
      text: 'Warehouse locations, flows and 3PL options compared on total cost and service, ready for an investment decision.',
    },
  ],
  services: {
    title: 'Services | Meridel Advisory',
    description:
      'Supply chain consulting: transport and freight, inventory and warehousing, cost-to-serve and network design, supply chain data and planning.',
    h1: 'Services',
    lead: 'We take on focused supply chain questions where better data changes the decision. Each engagement ends with a recommendation and tools your team keeps using.',
    deliverablesLabel: 'What you receive',
    deliverables: [
      ['Freight invoice audit against contracted rates', 'Carrier scorecards and tender analysis', 'Mode and route cost comparison'],
      ['Safety stock and reorder policy by item', 'ABC-XYZ segmentation of your range', 'Warehouse capacity and flow review'],
      ['Cost-to-serve model by customer, product and route', 'Network and centre-of-gravity scenarios', '3PL evaluation on total cost'],
      ['Automated data pipelines from ERP and planning systems', 'Demand forecasting and scenario models', 'Dashboards for service, stock and logistics cost'],
    ],
    pricingTitle: 'How we price',
    pricingText:
      'After a free first call, we send a short proposal with the question, scope, timeline and a fixed fee. No open-ended hourly billing.',
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
  },
  about: {
    title: 'About | Meridel Advisory',
    description: 'Meridel Advisory is an independent supply chain consultancy founded by Tural Bayramli, based in Warsaw.',
    h1: 'About Meridel',
    lead: 'A meridian is the line navigators use to fix their position. We do the same for your supply chain: establish where you stand, then set a clear direction.',
    bio: [
      'Meridel Advisory is an independent supply chain consultancy founded by Tural Bayramli. Tural specialises in supply chain finance and network optimisation, with more than six years of work across Benelux, DACH, Iberia, Italy and the wider EMEA region.',
      'He has led logistics network and cost-to-serve modelling, inventory risk simulations and warehouse location studies for multinational manufacturers, and built the KPI dashboards that track them. Together these models have delivered over €700,000 in annual savings. Earlier, he worked on treasury analytics in global banking and on retail supply chain and logistics planning in Azerbaijan.',
      'His background in finance means every recommendation is tied to the profit and loss statement, not only to operational metrics. Based in Warsaw, working with companies in Poland, Azerbaijan and the wider region.',
    ],
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
    location: 'Warsaw, Poland. Meetings in person or online.',
    linkedinLabel: 'Tural Bayramli on LinkedIn',
  },
  cta: {
    title: 'Have a supply chain decision to make?',
    text: 'Tell us about it. The first call is free.',
    button: 'Book an intro call',
  },
  footer: {
    rights: 'All rights reserved.',
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
  nav: { services: 'Xidmətlər', insights: 'Məqalələr', about: 'Haqqımızda', contact: 'Əlaqə', menu: 'Menyu' },
  switchLabel: 'English',
  switchShort: 'EN',
  home: {
    title: 'Meridel Advisory | Təchizat zənciri üzrə konsaltinq',
    description:
      'Meridel Advisory təchizat zənciri üzrə konsaltinq şirkətidir. Daşıma, ehtiyat və logistika şəbəkələrində gizlənən xərcləri tapır, alternativləri modelləşdirir və ən sərfəli yolu tövsiyə edirik.',
    h1: 'Mövqeyinizi müəyyən edin. İstiqamətinizi seçin.',
    lead:
      'Meridel Advisory təchizat zənciri üzrə konsaltinq şirkətidir. Əməliyyat və logistika rəhbərlərinə şəbəkələrində gizlənən xərcləri tapmağa, alternativləri modelləşdirməyə və ən sərfəli yolu seçməyə kömək edirik.',
    ctaPrimary: 'Tanışlıq görüşü təyin edin',
    ctaSecondary: 'Xidmətlərimizə baxın',
    practicesTitle: 'Nə üzərində işləyirik',
    practicesLead: 'Təchizat zəncirinin dörd sahəsi, bir metod: faktları dəqiqləşdiririk, seçimləri modelləşdiririk, bir istiqamət tövsiyə edirik.',
    questionsLabel: 'Cavab verdiyimiz suallar',
    approachTitle: 'Layihə necə gedir',
    approachLead: 'Hər layihə eyni üç mərhələdən keçir, ona görə harada olduğumuzu və növbəti addımı həmişə bilirsiniz.',
    engagementsTitle: 'Tipik layihələr',
    engagementsLead: 'Gördüyümüz işlərdən nümunələr. Hər biri aydın sual, müddət və ödəniş üzrə planlaşdırılır.',
    insightsTitle: 'Son məqalələr',
    insightsAll: 'Bütün məqalələr',
    founderTitle: 'Kiminlə işləyirsiniz',
    founderText:
      'Meridel Advisory-yə Avropa bazarlarında altı ildən artıq təcrübəsi olan təchizat zənciri maliyyəsi və şəbəkə optimallaşdırılması üzrə mütəxəssis Tural Bayramli rəhbərlik edir. Onun logistika şəbəkəsi, xidmət xərci və ehtiyat modelləri beynəlxalq şirkətlərə illik 700 000 avrodan çox qənaət gətirib.',
    founderMore: 'Tural haqqında ətraflı',
    mapTitle: 'Avropa, Qafqaz və Körfəz arasında',
    mapLead:
      'Əsas bazarlarımız olan Varşava və Bakı Avropanı Xəzər, Mərkəzi Asiya və Körfəzlə birləşdirən ticarət yolları üzərindədir. İşimiz məhz bu region üzərində qurulub.',
    lanes: [
      'Avropadan Qafqaza, Türkiyə üzərindən dəmir yolu və avtomobil yolu ilə',
      'Transxəzər marşrutu, Bakıdan Mərkəzi Asiyaya',
      'Şimal–Cənub, Xəzərdən Körfəzə',
    ],
    cities: {
      warsaw: 'Varşava',
      istanbul: 'İstanbul',
      tbilisi: 'Tbilisi',
      baku: 'Bakı',
      aktau: 'Aktau',
      almaty: 'Almatı',
      dubai: 'Dubay',
    },
    videoPause: 'Fon videosunu dayandırın',
    videoPlay: 'Fon videosunu oynadın',
    bandText: 'Hər konteyner, gəmi və yük maşını məlumatlarınızda bir sətirdir. Biz bu sətirləri qərarlara çeviririk.',
  },
  practices: [
    {
      title: 'Daşıma və yükdaşıma',
      text: 'Daşıma xərcləri, daşıyıcıların performansı və marşrut təhlili ki, düzgün xidmətə düzgün tarif ödəyəsiniz.',
      questions: [
        'Daşımaya düzgün tarif ödəyirikmi?',
        'Hansı marşrutları yenidən tenderə çıxarmalıyıq və kiminlə?',
        'Bu axın üçün tam yük, yığma yük, yoxsa dəmir yolu ucuzdur?',
      ],
    },
    {
      title: 'Ehtiyat və anbar',
      text: 'Xidmət səviyyəsi ilə pul vəsaitləri arasında balans yaradan ehtiyat siyasəti, sığorta ehtiyatı və anbar axınları.',
      questions: [
        'Əslində nə qədər ehtiyat saxlamalıyıq?',
        'Hansı məhsullar xidməti qorumadan pulu dondurur?',
        'Doğru yerdə doğru anbar tutumumuz varmı?',
      ],
    },
    {
      title: 'Xidmət xərci və şəbəkə dizaynı',
      text: 'Müştəri, məhsul və kanal üzrə xidmət xərci, ehtiyatın harada saxlanacağı və necə daşınacağı üçün şəbəkə modelləri.',
      questions: [
        'Hansı müştərilər və marşrutlar gətirdiyindən çox xərc yaradır?',
        'Anbarlarımız harada olmalıdır?',
        'Bu regiona birbaşa, yoxsa 3PL tərəfdaşı vasitəsilə xidmət göstərməliyik?',
      ],
    },
    {
      title: 'Təchizat zənciri məlumatları və planlaşdırma',
      text: 'Komandanızın etibar edib davamlı istifadə edəcəyi təmiz planlaşdırma məlumatları, tələb proqnozları, ssenari modelləri və panellər.',
      questions: [
        'Təchizat zənciri hesabatlarındakı rəqəmlərə etibar edə bilərikmi?',
        'Həcm 20% dəyişsə, logistika xərcləri necə dəyişər?',
        'Hər ay eyni cədvəli yenidən qurmağı necə dayandıraq?',
      ],
    },
  ],
  steps: [
    {
      title: 'Mövqeyi müəyyən edirik',
      text: 'Məlumatlarınızı toplayır, malların, xərcin və xidmətin bu gün necə hərəkət etdiyini xəritələyir və faktlar üzərində razılaşırıq.',
    },
    {
      title: 'Variantları modelləşdiririk',
      text: 'Qarşınızdakı seçimlər üçün ssenarilər qurur, onların xərcini, xidmət səviyyəsini və vaxtını yan-yana qoyuruq.',
    },
    {
      title: 'İstiqaməti təyin edirik',
      text: 'Bir aydın istiqamət, onu həyata keçirmək üçün plan və komandanızın nəzarəti davam etdirməsi üçün alətlər təklif edirik.',
    },
  ],
  engagements: [
    {
      title: 'Xidmət xərcinin təhlili',
      length: '4–6 həftə',
      text: 'Logistika xərcləri nəzərə alınmaqla müştəri, məhsul və kanal üzrə gəlirlilik və prioritetə görə sıralanmış addımlar siyahısı.',
    },
    {
      title: 'Daşıma xərclərinin auditi',
      length: '3–4 həftə',
      text: 'Hər hesab-fakturanın müqavilə tarifləri ilə yoxlanılması, artıq ödənişlərin qaytarılması və yenidən tenderə çıxarılmalı marşrutların müəyyənləşdirilməsi.',
    },
    {
      title: 'Ehtiyat siyasəti modeli',
      length: '4–8 həftə',
      text: 'Hər məhsul üzrə sığorta ehtiyatı və sifariş nöqtələri, xidmət hədəfləriniz və pul limitləriniz əsasında yoxlanılmış.',
    },
    {
      title: 'Şəbəkə tədqiqatı',
      length: '6–10 həftə',
      text: 'Anbar yerləri, axınlar və 3PL variantlarının ümumi xərc və xidmət baxımından müqayisəsi, investisiya qərarına hazır şəkildə.',
    },
  ],
  services: {
    title: 'Xidmətlər | Meridel Advisory',
    description:
      'Təchizat zənciri üzrə konsaltinq: daşıma və yükdaşıma, ehtiyat və anbar, xidmət xərci və şəbəkə dizaynı, təchizat zənciri məlumatları və planlaşdırma.',
    h1: 'Xidmətlər',
    lead: 'Daha yaxşı məlumatın qərarı dəyişdirdiyi konkret təchizat zənciri sualları üzərində işləyirik. Hər layihə bir tövsiyə və komandanızın istifadə etməyə davam edəcəyi alətlərlə bitir.',
    deliverablesLabel: 'Nə əldə edirsiniz',
    deliverables: [
      ['Hesab-fakturaların müqavilə tarifləri ilə auditi', 'Daşıyıcı reytinqləri və tender təhlili', 'Daşıma növü və marşrut xərclərinin müqayisəsi'],
      ['Hər məhsul üzrə sığorta ehtiyatı və sifariş siyasəti', 'Çeşidinizin ABC-XYZ seqmentasiyası', 'Anbar tutumu və axınlarının təhlili'],
      ['Müştəri, məhsul və marşrut üzrə xidmət xərci modeli', 'Şəbəkə və ağırlıq mərkəzi ssenariləri', '3PL variantlarının ümumi xərc üzrə qiymətləndirilməsi'],
      ['ERP və planlaşdırma sistemlərindən avtomatlaşdırılmış məlumat axınları', 'Tələb proqnozu və ssenari modelləri', 'Xidmət, ehtiyat və logistika xərcləri üzrə panellər'],
    ],
    pricingTitle: 'Qiymətləndirmə',
    pricingText:
      'Ödənişsiz ilk görüşdən sonra sual, əhatə, müddət və sabit ödənişi göstərən qısa təklif göndəririk. Saatlıq, sonu bilinməyən hesablaşma yoxdur.',
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
  },
  about: {
    title: 'Haqqımızda | Meridel Advisory',
    description: 'Meridel Advisory Tural Bayramli tərəfindən təsis edilmiş, Varşavada yerləşən müstəqil təchizat zənciri konsaltinq şirkətidir.',
    h1: 'Meridel haqqında',
    lead: 'Meridian dənizçilərin öz mövqelərini müəyyən etmək üçün istifadə etdiyi xətdir. Biz də təchizat zənciriniz üçün eyni şeyi edirik: harada dayandığınızı dəqiqləşdirir, sonra aydın istiqamət təyin edirik.',
    bio: [
      'Meridel Advisory Tural Bayramli tərəfindən təsis edilmiş müstəqil təchizat zənciri konsaltinq şirkətidir. Tural təchizat zənciri maliyyəsi və şəbəkə optimallaşdırılması üzrə ixtisaslaşıb və Benilüks, DACH, İberiya, İtaliya və daha geniş EMEA regionunda altı ildən artıq təcrübəyə malikdir.',
      'O, beynəlxalq istehsalçılar üçün logistika şəbəkəsi və xidmət xərci modelləşdirməsinə, ehtiyat risklərinin simulyasiyasına və anbar yerləşdirmə tədqiqatlarına rəhbərlik edib, onları izləyən KPI panellərini qurub. Bu modellər birlikdə illik 700 000 avrodan çox qənaət gətirib. Daha əvvəl qlobal bankçılıqda xəzinədarlıq analitikası, Azərbaycanda isə pərakəndə təchizat zənciri və logistika planlaşdırması üzərində çalışıb.',
      'Maliyyə təhsili sayəsində hər tövsiyə yalnız əməliyyat göstəriciləri ilə deyil, mənfəət və zərər hesabatı ilə də əlaqələndirilir. Varşavada yerləşir, Polşa, Azərbaycan və regiondakı şirkətlərlə işləyir.',
    ],
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
      { title: 'Qalan alətlər', text: 'Modellər və panellər sənədləşdirilərək təhvil verilir ki, komandanız onları bizsiz də işlədə bilsin.' },
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
    location: 'Varşava, Polşa. Görüşlər əyani və ya onlayn.',
    linkedinLabel: 'Tural Bayramli LinkedIn-də',
  },
  cta: {
    title: 'Təchizat zəncirinizdə qərar verməlisiniz?',
    text: 'Bizə danışın. İlk görüş ödənişsizdir.',
    button: 'Tanışlıq görüşü təyin edin',
  },
  footer: {
    rights: 'Bütün hüquqlar qorunur.',
  },
  notFound: {
    title: 'Səhifə tapılmadı',
    text: 'Bu səhifə mövcud deyil və ya köçürülüb.',
    home: 'Ana səhifəyə keçin',
  },
};

export const tools = ['SAP S/4HANA', 'SAP Analytics Cloud', 'Blue Yonder', 'Alteryx', 'Python', 'SQL', 'Power BI', 'Tableau', 'Looker'];

export const ui: Record<Lang, Dict> = { en, az };
export const t = (lang: Lang): Dict => ui[lang];

export function formatDate(date: Date, lang: Lang): string {
  if (lang === 'az') {
    const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];
    return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  }
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
