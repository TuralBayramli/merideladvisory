export const languages = { en: 'English', az: 'Azərbaycanca' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const EMAIL = 'hello@merideladvisory.com';
export const FOUNDER = 'Tural Bayramli';

/** Build a URL for a language-neutral path such as "/services". */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (lang === defaultLang) return clean || '/';
  return `/${lang}${clean}` || `/${lang}`;
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
  };
  cta: { title: string; text: string; button: string };
  footer: { legal: string; rights: string };
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
    title: 'Meridel Advisory | Supply chain, data and finance advisory',
    description:
      'Meridel Advisory helps operations and finance leaders find hidden cost in their supply chain and data, model the alternatives and choose the course that pays.',
    h1: 'Find your position. Choose your direction.',
    lead:
      'Meridel Advisory helps operations and finance leaders see where cost hides in their supply chain and data, model the alternatives, and commit to the course that pays.',
    ctaPrimary: 'Book an intro call',
    ctaSecondary: 'See our services',
    practicesTitle: 'What we work on',
    practicesLead: 'Four areas, one method: get the facts straight, model the choices, recommend one direction.',
    questionsLabel: 'Questions we answer',
    approachTitle: 'How an engagement runs',
    approachLead: 'Every project follows the same three stages, so you always know where we are and what comes next.',
    engagementsTitle: 'Typical engagements',
    engagementsLead: 'Examples of the work we take on. Each is scoped to a clear question, timeline and fee.',
    insightsTitle: 'Latest insights',
    insightsAll: 'All insights',
    founderTitle: 'Who you work with',
    founderText:
      'Meridel Advisory is led by Tural Bayramli, a data analytics engineer with experience in global banking, healthcare manufacturing and building materials. He has built liquidity reporting, cost-to-serve models and automated planning data pipelines for international companies.',
    founderMore: 'More about Tural',
  },
  practices: [
    {
      title: 'Supply chain and logistics',
      text: 'Network, freight, inventory and cost-to-serve analysis that shows where margin is lost between order and delivery.',
      questions: [
        'Which customers and routes cost more than they earn?',
        'How much stock do we actually need?',
        'Are we paying the right freight rates?',
      ],
    },
    {
      title: 'Data analysis and modelling',
      text: 'Clean data pipelines, scenario models and dashboards that your team can trust and keep using.',
      questions: [
        'Can we trust the numbers in our reports?',
        'What happens to cost if volume moves by 20%?',
        'How do we stop rebuilding the same spreadsheet every month?',
      ],
    },
    {
      title: 'Finance and cost',
      text: 'Cost structure, working capital and budgeting models that connect operations to the profit and loss statement.',
      questions: [
        'Where does our cost base go each month?',
        'How much cash is tied up in stock and receivables?',
        'Which savings are real, and which exist only on paper?',
      ],
    },
    {
      title: 'Compliance and contract data',
      text: 'Structured review of contracts, invoices and regulatory data, so obligations and leakage become visible. For legal advice we work alongside licensed lawyers.',
      questions: [
        'Are suppliers billing what the contract says?',
        'Which terms expose us to penalties or price changes?',
        'Is our reporting data ready for an audit?',
      ],
    },
  ],
  steps: [
    {
      title: 'Fix the position',
      text: 'We collect your data, map how cost and service really move today, and agree on the facts.',
    },
    {
      title: 'Model the options',
      text: 'We build scenarios for the choices in front of you, with cost, risk and timing side by side.',
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
      text: 'Profitability by customer, product and channel, with a ranked list of actions.',
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
      title: 'Reporting rebuild',
      length: '6–10 weeks',
      text: 'One reliable data pipeline and dashboard set to replace manual monthly reporting.',
    },
  ],
  services: {
    title: 'Services | Meridel Advisory',
    description:
      'Supply chain and logistics analysis, data modelling, finance and cost models, and compliance and contract-data review.',
    h1: 'Services',
    lead: 'We take on focused questions where better data changes the decision. Each engagement ends with a recommendation and tools your team keeps using.',
    deliverablesLabel: 'What you receive',
    deliverables: [
      ['Cost-to-serve model by customer, product and route', 'Inventory and safety stock policy', 'Freight and carrier performance review'],
      ['Automated data pipelines from ERP and planning systems', 'Scenario and forecasting models', 'Dashboards built around your weekly decisions'],
      ['Cost structure and margin bridge', 'Working capital and cash model', 'Budget and forecast templates'],
      ['Contract terms in a structured, searchable form', 'Invoice-to-contract checks', 'Audit-ready reporting data'],
    ],
    pricingTitle: 'How we price',
    pricingText:
      'After a free first call, we send a short proposal with the question, scope, timeline and a fixed fee. No open-ended hourly billing.',
  },
  insights: {
    title: 'Insights | Meridel Advisory',
    description: 'Practical articles on supply chain, cost and data, written for the people who run the numbers.',
    h1: 'Insights',
    lead: 'Practical articles on supply chain, cost and data, written for the people who run the numbers.',
    readMore: 'Read the article',
    by: 'By',
    back: 'All insights',
    otherLang: 'Bu məqaləni azərbaycanca oxuyun',
  },
  about: {
    title: 'About | Meridel Advisory',
    description: 'Meridel Advisory is an independent advisory practice founded by Tural Bayramli, based in Warsaw.',
    h1: 'About Meridel',
    lead: 'A meridian is the line navigators use to fix their position. We do the same for your business: establish where you stand, then set a clear direction.',
    bio: [
      'Meridel Advisory is an independent practice founded by Tural Bayramli. Tural is a data analytics engineer whose work spans financial planning and analysis, supply chain finance, treasury risk analytics and data engineering.',
      'He has built regulatory liquidity reporting in global banking, cost-to-serve analysis and automated data pipelines in healthcare manufacturing, and supply chain models in building materials. That mix lets him speak with the planners who use the data and the finance teams who sign it off.',
      'Based in Warsaw, working with companies in Azerbaijan, Poland and the wider region, in English and Azerbaijani.',
    ],
    credentialsTitle: 'Education and certifications',
    credentials: [
      'Master’s degree in Data Science',
      'Master’s degree in Accounting and Audit',
      'Bachelor’s degree in Finance',
      'Alteryx Designer Core certification',
      'Green Belt in process improvement',
    ],
    toolsTitle: 'Tools we work with',
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
      'Which systems your data lives in (ERP, planning tools, spreadsheets)',
      'Any deadline you are working to',
    ],
    locationTitle: 'Where we are',
    location: 'Warsaw, Poland. Meetings in person or online.',
  },
  cta: {
    title: 'Have a decision to make?',
    text: 'Tell us about it. The first call is free.',
    button: 'Book an intro call',
  },
  footer: {
    legal:
      'Meridel Advisory provides analytical and advisory services. It does not provide legal advice; legal opinions are given only by the licensed lawyers we work with.',
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
    title: 'Meridel Advisory | Təchizat zənciri, məlumat və maliyyə məsləhəti',
    description:
      'Meridel Advisory əməliyyat və maliyyə rəhbərlərinə təchizat zənciri və məlumatlarda gizlənən xərcləri tapmağa, alternativləri modelləşdirməyə və ən sərfəli yolu seçməyə kömək edir.',
    h1: 'Mövqeyinizi müəyyən edin. İstiqamətinizi seçin.',
    lead:
      'Meridel Advisory əməliyyat və maliyyə rəhbərlərinə təchizat zənciri və məlumatlarda gizlənən xərcləri görməyə, alternativləri modelləşdirməyə və ən sərfəli yolu seçməyə kömək edir.',
    ctaPrimary: 'Tanışlıq görüşü təyin edin',
    ctaSecondary: 'Xidmətlərimizə baxın',
    practicesTitle: 'Nə üzərində işləyirik',
    practicesLead: 'Dörd sahə, bir metod: faktları dəqiqləşdiririk, seçimləri modelləşdiririk, bir istiqamət tövsiyə edirik.',
    questionsLabel: 'Cavab verdiyimiz suallar',
    approachTitle: 'Layihə necə gedir',
    approachLead: 'Hər layihə eyni üç mərhələdən keçir, ona görə harada olduğumuzu və növbəti addımı həmişə bilirsiniz.',
    engagementsTitle: 'Tipik layihələr',
    engagementsLead: 'Gördüyümüz işlərdən nümunələr. Hər biri aydın sual, müddət və ödəniş üzrə planlaşdırılır.',
    insightsTitle: 'Son məqalələr',
    insightsAll: 'Bütün məqalələr',
    founderTitle: 'Kiminlə işləyirsiniz',
    founderText:
      'Meridel Advisory-yə qlobal bankçılıq, səhiyyə məhsulları istehsalı və tikinti materialları sahələrində təcrübəsi olan data analitika mühəndisi Tural Bayramli rəhbərlik edir. O, beynəlxalq şirkətlər üçün likvidlik hesabatları, xidmət xərci modelləri və avtomatlaşdırılmış planlaşdırma məlumat axınları qurub.',
    founderMore: 'Tural haqqında ətraflı',
  },
  practices: [
    {
      title: 'Təchizat zənciri və logistika',
      text: 'Sifarişdən çatdırılmaya qədər marjanın harada itdiyini göstərən şəbəkə, daşıma, ehtiyat və xidmət xərci (cost-to-serve) təhlili.',
      questions: [
        'Hansı müştərilər və marşrutlar gətirdiyindən çox xərc yaradır?',
        'Əslində nə qədər ehtiyat saxlamalıyıq?',
        'Daşımaya düzgün tarif ödəyirikmi?',
      ],
    },
    {
      title: 'Məlumat təhlili və modelləşdirmə',
      text: 'Komandanızın etibar edib davamlı istifadə edəcəyi təmiz məlumat axınları, ssenari modelləri və hesabat panelləri.',
      questions: [
        'Hesabatlardakı rəqəmlərə etibar edə bilərikmi?',
        'Həcm 20% dəyişsə, xərclər necə dəyişər?',
        'Hər ay eyni cədvəli yenidən qurmağı necə dayandıraq?',
      ],
    },
    {
      title: 'Maliyyə və xərclər',
      text: 'Əməliyyatları mənfəət və zərər hesabatı ilə əlaqələndirən xərc strukturu, dövriyyə kapitalı və büdcə modelləri.',
      questions: [
        'Xərc bazamız hər ay hara gedir?',
        'Ehtiyatlarda və debitor borclarında nə qədər pul donub?',
        'Hansı qənaətlər realdır, hansılar yalnız kağız üzərindədir?',
      ],
    },
    {
      title: 'Uyğunluq və müqavilə məlumatları',
      text: 'Öhdəliklərin və itkilərin görünməsi üçün müqavilələrin, hesab-fakturaların və tənzimləyici məlumatların strukturlaşdırılmış yoxlanışı. Hüquqi məsləhət üçün lisenziyalı hüquqşünaslarla birgə işləyirik.',
      questions: [
        'Təchizatçılar müqavilədə yazılan qiymətlə hesab kəsirmi?',
        'Hansı şərtlər bizi cərimə və ya qiymət dəyişikliyi riskinə salır?',
        'Hesabat məlumatlarımız auditə hazırdırmı?',
      ],
    },
  ],
  steps: [
    {
      title: 'Mövqeyi müəyyən edirik',
      text: 'Məlumatlarınızı toplayır, xərc və xidmətin bu gün necə hərəkət etdiyini xəritələyir və faktlar üzərində razılaşırıq.',
    },
    {
      title: 'Variantları modelləşdiririk',
      text: 'Qarşınızdakı seçimlər üçün ssenarilər qurur, onların xərcini, riskini və vaxtını yan-yana qoyuruq.',
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
      text: 'Müştəri, məhsul və kanal üzrə gəlirlilik və prioritetə görə sıralanmış addımlar siyahısı.',
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
      title: 'Hesabatlılığın yenidən qurulması',
      length: '6–10 həftə',
      text: 'Əl ilə hazırlanan aylıq hesabatları əvəz edən vahid etibarlı məlumat axını və panellər.',
    },
  ],
  services: {
    title: 'Xidmətlər | Meridel Advisory',
    description:
      'Təchizat zənciri və logistika təhlili, məlumat modelləşdirməsi, maliyyə və xərc modelləri, uyğunluq və müqavilə məlumatlarının yoxlanışı.',
    h1: 'Xidmətlər',
    lead: 'Daha yaxşı məlumatın qərarı dəyişdirdiyi konkret suallar üzərində işləyirik. Hər layihə bir tövsiyə və komandanızın istifadə etməyə davam edəcəyi alətlərlə bitir.',
    deliverablesLabel: 'Nə əldə edirsiniz',
    deliverables: [
      ['Müştəri, məhsul və marşrut üzrə xidmət xərci modeli', 'Ehtiyat və sığorta ehtiyatı siyasəti', 'Daşıma və daşıyıcı performansının təhlili'],
      ['ERP və planlaşdırma sistemlərindən avtomatlaşdırılmış məlumat axınları', 'Ssenari və proqnoz modelləri', 'Həftəlik qərarlarınıza uyğun qurulmuş panellər'],
      ['Xərc strukturu və marja körpüsü', 'Dövriyyə kapitalı və pul vəsaitləri modeli', 'Büdcə və proqnoz şablonları'],
      ['Strukturlaşdırılmış və axtarıla bilən müqavilə şərtləri', 'Hesab-fakturaların müqavilə ilə tutuşdurulması', 'Auditə hazır hesabat məlumatları'],
    ],
    pricingTitle: 'Qiymətləndirmə',
    pricingText:
      'Ödənişsiz ilk görüşdən sonra sual, əhatə, müddət və sabit ödənişi göstərən qısa təklif göndəririk. Saatlıq, sonu bilinməyən hesablaşma yoxdur.',
  },
  insights: {
    title: 'Məqalələr | Meridel Advisory',
    description: 'Təchizat zənciri, xərclər və məlumatlar haqqında rəqəmlərlə işləyən insanlar üçün praktik məqalələr.',
    h1: 'Məqalələr',
    lead: 'Təchizat zənciri, xərclər və məlumatlar haqqında rəqəmlərlə işləyən insanlar üçün praktik məqalələr.',
    readMore: 'Məqaləni oxuyun',
    by: 'Müəllif:',
    back: 'Bütün məqalələr',
    otherLang: 'Read this article in English',
  },
  about: {
    title: 'Haqqımızda | Meridel Advisory',
    description: 'Meridel Advisory Tural Bayramli tərəfindən təsis edilmiş, Varşavada yerləşən müstəqil məsləhət şirkətidir.',
    h1: 'Meridel haqqında',
    lead: 'Meridian dənizçilərin öz mövqelərini müəyyən etmək üçün istifadə etdiyi xətdir. Biz də biznesiniz üçün eyni şeyi edirik: harada dayandığınızı dəqiqləşdirir, sonra aydın istiqamət təyin edirik.',
    bio: [
      'Meridel Advisory Tural Bayramli tərəfindən təsis edilmiş müstəqil məsləhət şirkətidir. Tural maliyyə planlaşdırması və təhlili, təchizat zənciri maliyyəsi, xəzinədarlıq risklərinin analitikası və data mühəndisliyi sahələrində çalışmış data analitika mühəndisidir.',
      'O, qlobal bankçılıqda tənzimləyici likvidlik hesabatları, səhiyyə məhsulları istehsalında xidmət xərci təhlili və avtomatlaşdırılmış məlumat axınları, tikinti materialları sahəsində isə təchizat zənciri modelləri qurub. Bu təcrübə ona həm məlumatdan istifadə edən planlaşdırıcılarla, həm də onu təsdiqləyən maliyyə komandaları ilə eyni dildə danışmağa imkan verir.',
      'Varşavada yerləşir, Azərbaycan, Polşa və regiondakı şirkətlərlə ingilis və Azərbaycan dillərində işləyir.',
    ],
    credentialsTitle: 'Təhsil və sertifikatlar',
    credentials: [
      'Data Elmi üzrə magistr dərəcəsi',
      'Mühasibat uçotu və audit üzrə magistr dərəcəsi',
      'Maliyyə üzrə bakalavr dərəcəsi',
      'Alteryx Designer Core sertifikatı',
      'Proseslərin təkmilləşdirilməsi üzrə Green Belt',
    ],
    toolsTitle: 'İstifadə etdiyimiz alətlər',
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
      'Məlumatlarınızın hansı sistemlərdə olduğu (ERP, planlaşdırma alətləri, cədvəllər)',
      'Əgər varsa, son tarix',
    ],
    locationTitle: 'Harada yerləşirik',
    location: 'Varşava, Polşa. Görüşlər əyani və ya onlayn.',
  },
  cta: {
    title: 'Qarşınızda qərar var?',
    text: 'Bizə danışın. İlk görüş ödənişsizdir.',
    button: 'Tanışlıq görüşü təyin edin',
  },
  footer: {
    legal:
      'Meridel Advisory analitik və məsləhət xidmətləri göstərir. Hüquqi məsləhət vermir; hüquqi rəylər yalnız birgə işlədiyimiz lisenziyalı hüquqşünaslar tərəfindən verilir.',
    rights: 'Bütün hüquqlar qorunur.',
  },
  notFound: {
    title: 'Səhifə tapılmadı',
    text: 'Bu səhifə mövcud deyil və ya köçürülüb.',
    home: 'Ana səhifəyə keçin',
  },
};

export const tools = ['Python', 'SQL', 'Power BI', 'Alteryx', 'SAP', 'Blue Yonder', 'Databricks', 'Excel'];

export const ui: Record<Lang, Dict> = { en, az };
export const t = (lang: Lang): Dict => ui[lang];

export function formatDate(date: Date, lang: Lang): string {
  if (lang === 'az') {
    const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];
    return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  }
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
