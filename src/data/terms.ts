// The supply chain dictionary (Insights > Terms A–Z). Each term has a short
// definition in both languages; "article" links to the full article and
// "tool" to a calculator.
export type Term = {
  id: string;
  article?: string;
  tool?: 'ss' | 'eoq';
  en: { term: string; text: string };
  az: { term: string; text: string };
};

export const terms: Term[] = [
  {
    id: '3pl',
    en: {
      term: '3PL (third-party logistics)',
      text: 'A company that runs logistics for others, such as warehousing, transport or fulfilment, under contract.',
    },
    az: {
      term: '3PL (üçüncü tərəf logistika)',
      text: 'Başqa şirkətlər üçün müqavilə əsasında anbar, daşıma və ya sifarişlərin icrası kimi logistika xidmətləri göstərən şirkət.',
    },
  },
  {
    id: 'abc-analysis',
    article: 'abc-xyz-analysis',
    en: {
      term: 'ABC analysis',
      text: 'Sorting items by their share of sales value or volume: A items are the few that carry most of the value, C items the many that carry little.',
    },
    az: {
      term: 'ABC təhlili',
      text: 'Məhsulların satış dəyərindəki və ya həcmindəki payına görə sıralanması: A qrupu dəyərin çox hissəsini verən az sayda məhsul, C qrupu isə az dəyər verən çox sayda məhsuldur.',
    },
  },
  {
    id: 'bullwhip-effect',
    en: {
      term: 'Bullwhip effect',
      text: 'Small changes in consumer demand turning into ever larger swings in orders further up the supply chain, from retailer to wholesaler to factory.',
    },
    az: {
      term: 'Qamçı effekti (bullwhip effect)',
      text: 'İstehlakçı tələbindəki kiçik dəyişikliklərin təchizat zəncirinin yuxarısına doğru, pərakəndəçidən topdançıya və zavoda qədər getdikcə böyüyən sifariş dalğalanmalarına çevrilməsi.',
    },
  },
  {
    id: 'centre-of-gravity',
    article: 'warehouse-location',
    en: {
      term: 'Centre of gravity method',
      text: 'Finding a starting location for a warehouse as the average of customer locations, weighted by the volume each one receives.',
    },
    az: {
      term: 'Ağırlıq mərkəzi metodu',
      text: 'Anbar üçün başlanğıc yerin müştəri məkanlarının hər birinin aldığı həcmlə çəkiləndirilmiş ortası kimi tapılması.',
    },
  },
  {
    id: 'co2e',
    article: 'logistics-emissions',
    en: {
      term: 'CO₂e (carbon dioxide equivalent)',
      text: 'One unit for all greenhouse gases: each gas is converted into the amount of CO₂ that would warm the climate as much.',
    },
    az: {
      term: 'CO₂e (karbon qazı ekvivalenti)',
      text: 'Bütün istixana qazları üçün vahid ölçü: hər qaz iqlimi eyni dərəcədə isidəcək CO₂ miqdarına çevrilir.',
    },
  },
  {
    id: 'control-tower',
    article: 'logistics-dashboards',
    en: {
      term: 'Control tower',
      text: 'A single view of orders, shipments and stock across the supply chain, with alerts, so a team can spot and fix problems as they happen.',
    },
    az: {
      term: 'İdarəetmə qülləsi (control tower)',
      text: 'Bütün təchizat zənciri üzrə sifarişləri, daşımaları və ehtiyatı xəbərdarlıqlarla bir yerdə göstərən görünüş; komanda problemləri baş verən kimi görüb həll edir.',
    },
  },
  {
    id: 'cost-to-serve',
    article: 'cost-to-serve',
    en: {
      term: 'Cost to serve',
      text: 'The full cost of serving a customer, product or channel after order handling, warehousing, transport, returns and payment terms.',
    },
    az: {
      term: 'Xidmət xərci (cost to serve)',
      text: 'Sifarişlərin emalı, anbar, daşıma, qaytarmalar və ödəniş şərtləri nəzərə alınmaqla müştəriyə, məhsula və ya kanala xidmətin tam xərci.',
    },
  },
  {
    id: 'cross-docking',
    en: {
      term: 'Cross-docking',
      text: 'Moving goods from inbound to outbound vehicles through a warehouse with little or no storage in between.',
    },
    az: {
      term: 'Kross-dokinq',
      text: 'Malların anbarda demək olar ki, saxlanılmadan gələn nəqliyyat vasitəsindən gedən nəqliyyat vasitəsinə keçirilməsi.',
    },
  },
  {
    id: 'cycle-service-level',
    article: 'safety-stock',
    tool: 'ss',
    en: {
      term: 'Cycle service level',
      text: 'The probability of not running out of stock during a replenishment cycle. It sets the z factor in the safety stock formula.',
    },
    az: {
      term: 'Dövr üzrə xidmət səviyyəsi',
      text: 'Bir təchizat dövrü ərzində ehtiyatın bitməməsi ehtimalı. Sığorta ehtiyatı düsturundakı z əmsalını müəyyən edir.',
    },
  },
  {
    id: 'eoq',
    tool: 'eoq',
    en: {
      term: 'Economic order quantity (EOQ)',
      text: 'The order size that minimises the total cost of placing orders and holding stock: √(2 × annual demand × cost per order ÷ holding cost per unit).',
    },
    az: {
      term: 'İqtisadi sifariş həcmi (EOQ)',
      text: 'Sifariş vermə və ehtiyat saxlama xərclərinin cəmini minimuma endirən sifariş həcmi: √(2 × illik tələb × bir sifarişin xərci ÷ bir ədədin saxlama xərci).',
    },
  },
  {
    id: 'etl',
    article: 'automated-reporting',
    en: {
      term: 'ETL (extract, transform, load)',
      text: 'Taking data out of source systems, cleaning and reshaping it, and loading it into one place for reporting.',
    },
    az: {
      term: 'ETL (çıxarma, çevirmə, yükləmə)',
      text: 'Məlumatların mənbə sistemlərdən çıxarılması, təmizlənib yenidən formalaşdırılması və hesabat üçün bir yerə yüklənməsi.',
    },
  },
  {
    id: 'fill-rate',
    article: 'logistics-kpis',
    en: {
      term: 'Fill rate',
      text: 'The share of ordered units or order lines shipped from stock on the first attempt.',
    },
    az: {
      term: 'Doldurulma dərəcəsi (fill rate)',
      text: 'Sifariş edilmiş ədədlərin və ya sifariş sətirlərinin ilk cəhddə ehtiyatdan göndərilən payı.',
    },
  },
  {
    id: 'forecast-bias',
    article: 'forecast-accuracy',
    en: {
      term: 'Forecast bias',
      text: 'A forecast that is consistently too high or too low. Unlike random error, bias can be corrected, and it quietly builds stock or causes shortages.',
    },
    az: {
      term: 'Proqnoz meyli (bias)',
      text: 'Davamlı olaraq çox yüksək və ya çox aşağı olan proqnoz. Təsadüfi xətadan fərqli olaraq meyl düzəldilə bilər; o, səssizcə artıq ehtiyat və ya çatışmazlıq yaradır.',
    },
  },
  {
    id: 'freight-audit',
    article: 'freight-audit',
    en: {
      term: 'Freight audit',
      text: 'Checking every freight invoice line against the contracted rates and the shipments actually made, before payment.',
    },
    az: {
      term: 'Daşıma auditi',
      text: 'Hər daşıma hesab-fakturası sətrinin ödənişdən əvvəl müqavilə tarifləri və faktiki daşımalarla yoxlanılması.',
    },
  },
  {
    id: 'ftl-ltl',
    en: {
      term: 'FTL and LTL',
      text: 'Full truckload: one shipper uses the whole truck. Less than truckload: several shippers share it, usually at a higher cost per pallet but a lower cost per shipment.',
    },
    az: {
      term: 'FTL və LTL',
      text: 'FTL (tam yük maşını): bütün maşından bir yükgöndərən istifadə edir. LTL (yığma yük): maşını bir neçə yükgöndərən bölüşür; adətən palet başına baha, daşıma başına ucuz başa gəlir.',
    },
  },
  {
    id: 'glec',
    article: 'logistics-emissions',
    en: {
      term: 'GLEC Framework',
      text: 'The method from Smart Freight Centre for calculating and reporting logistics emissions across all transport modes and hubs, aligned with ISO 14083.',
    },
    az: {
      term: 'GLEC Çərçivəsi',
      text: 'Smart Freight Centre-in bütün nəqliyyat növləri və logistika mərkəzləri üzrə emissiyaları hesablamaq və hesabat vermək üçün metodu; ISO 14083 ilə uyğundur.',
    },
  },
  {
    id: 'incoterms',
    en: {
      term: 'Incoterms',
      text: 'Trade terms published by the International Chamber of Commerce that set who pays for transport, insurance and duties, and where risk passes from seller to buyer.',
    },
    az: {
      term: 'Incoterms',
      text: 'Beynəlxalq Ticarət Palatasının dərc etdiyi ticarət şərtləri: daşıma, sığorta və rüsumları kimin ödədiyini və riskin satıcıdan alıcıya harada keçdiyini müəyyən edir.',
    },
  },
  {
    id: 'inventory-turnover',
    en: {
      term: 'Inventory turnover',
      text: 'How many times stock is sold and replaced in a year: cost of goods sold divided by average inventory value.',
    },
    az: {
      term: 'Ehtiyat dövriyyəsi',
      text: 'Ehtiyatın ildə neçə dəfə satılıb yenilənməsi: satılmış malların maya dəyərinin orta ehtiyat dəyərinə nisbəti.',
    },
  },
  {
    id: 'iso-14083',
    article: 'logistics-emissions',
    en: {
      term: 'ISO 14083',
      text: 'The international standard, published in 2023, for quantifying and reporting greenhouse gas emissions from transport chains.',
    },
    az: {
      term: 'ISO 14083',
      text: '2023-cü ildə dərc olunmuş, daşıma zəncirlərindən yaranan istixana qazı emissiyalarının hesablanması və hesabatı üzrə beynəlxalq standart.',
    },
  },
  {
    id: 'kpi',
    article: 'logistics-kpis',
    en: {
      term: 'KPI (key performance indicator)',
      text: 'A measure that shows whether an operation is meeting its goal, with a clear definition, a target and an owner.',
    },
    az: {
      term: 'KPI (əsas performans göstəricisi)',
      text: 'Əməliyyatın məqsədinə çatıb-çatmadığını göstərən, aydın tərifi, hədəfi və cavabdehi olan ölçü.',
    },
  },
  {
    id: 'last-mile',
    article: 'logistics-kpis',
    en: {
      term: 'Last mile',
      text: 'The final leg of delivery, from the last depot to the customer’s door. Often the most expensive part of the journey per parcel.',
    },
    az: {
      term: 'Son mil',
      text: 'Çatdırılmanın son mərhələsi: son anbardan müştərinin qapısına qədər. Bağlama başına çox vaxt yolun ən baha hissəsidir.',
    },
  },
  {
    id: 'lead-time',
    article: 'safety-stock',
    en: {
      term: 'Lead time',
      text: 'The time between placing an order and having the goods available to use or sell.',
    },
    az: {
      term: 'Çatdırılma müddəti (lead time)',
      text: 'Sifariş verildiyi andan malın istifadəyə və ya satışa hazır olmasına qədər keçən vaxt.',
    },
  },
  {
    id: 'mape',
    article: 'forecast-accuracy',
    en: {
      term: 'MAPE (mean absolute percentage error)',
      text: 'The average size of forecast errors as a percentage of actual demand. Simple to explain, but distorted by items with very low sales.',
    },
    az: {
      term: 'MAPE (orta mütləq faiz xətası)',
      text: 'Proqnoz xətalarının faktiki tələbə nisbətdə orta ölçüsü, faizlə. İzah etmək asandır, amma satışı çox az olan məhsullarda təhrif olunur.',
    },
  },
  {
    id: 'middle-corridor',
    en: {
      term: 'Middle Corridor',
      text: 'The Trans-Caspian International Transport Route: rail, ferry and road links from China through Kazakhstan, the Caspian Sea, Azerbaijan, Georgia and Türkiye to Europe.',
    },
    az: {
      term: 'Orta Dəhliz',
      text: 'Transxəzər Beynəlxalq Nəqliyyat Marşrutu: Çindən Qazaxıstan, Xəzər dənizi, Azərbaycan, Gürcüstan və Türkiyə vasitəsilə Avropaya dəmir yolu, bərə və avtomobil yolu əlaqələri.',
    },
  },
  {
    id: 'multimodal',
    en: {
      term: 'Multimodal transport',
      text: 'Moving goods with more than one mode, for example rail plus road, under one contract.',
    },
    az: {
      term: 'Multimodal daşıma',
      text: 'Malların bir müqavilə ilə birdən çox nəqliyyat növü, məsələn, dəmir yolu və avtomobil yolu ilə daşınması.',
    },
  },
  {
    id: 'otif',
    article: 'logistics-kpis',
    en: {
      term: 'OTIF (on time in full)',
      text: 'The share of orders delivered on the agreed date with the full quantity ordered. An order must pass both tests to count.',
    },
    az: {
      term: 'OTIF (vaxtında və tam)',
      text: 'Razılaşdırılmış tarixdə və sifariş edilmiş tam miqdarda çatdırılan sifarişlərin payı. Sifariş hər iki şərtə cavab verməlidir.',
    },
  },
  {
    id: 'reorder-point',
    article: 'safety-stock',
    tool: 'ss',
    en: {
      term: 'Reorder point',
      text: 'The stock level at which a new order is placed: expected demand during the lead time plus safety stock.',
    },
    az: {
      term: 'Sifariş nöqtəsi',
      text: 'Yeni sifarişin verildiyi ehtiyat səviyyəsi: çatdırılma müddətində gözlənilən tələb üstəgəl sığorta ehtiyatı.',
    },
  },
  {
    id: 'sop',
    en: {
      term: 'S&OP (sales and operations planning)',
      text: 'A monthly process in which sales, operations and finance agree one plan for demand, supply and inventory.',
    },
    az: {
      term: 'S&OP (satış və əməliyyat planlaması)',
      text: 'Satış, əməliyyat və maliyyə bölmələrinin tələb, təchizat və ehtiyat üzrə vahid plan üzərində razılaşdığı aylıq proses.',
    },
  },
  {
    id: 'safety-stock',
    article: 'safety-stock',
    tool: 'ss',
    en: {
      term: 'Safety stock',
      text: 'Extra stock held to absorb variation in demand and lead time, so service holds while a replenishment order is on its way.',
    },
    az: {
      term: 'Sığorta ehtiyatı',
      text: 'Tələbin və çatdırılma müddətinin dəyişkənliyini udmaq üçün saxlanılan əlavə ehtiyat; yeni mal yolda olarkən xidmət səviyyəsi qorunur.',
    },
  },
  {
    id: 'single-source-of-truth',
    article: 'automated-reporting',
    en: {
      term: 'Single source of truth',
      text: 'One agreed, documented dataset that every report uses, so different teams get the same number for the same question.',
    },
    az: {
      term: 'Vahid həqiqət mənbəyi',
      text: 'Bütün hesabatların istifadə etdiyi razılaşdırılmış və sənədləşdirilmiş vahid məlumat dəsti; fərqli komandalar eyni suala eyni rəqəmi alır.',
    },
  },
  {
    id: 'star-schema',
    article: 'logistics-dashboards',
    en: {
      term: 'Star schema',
      text: 'A data model with one table of facts, such as shipments, linked to tables that describe them, such as customers, products and dates. The usual base for Power BI and Tableau reports.',
    },
    az: {
      term: 'Ulduz sxemi',
      text: 'Faktlar cədvəlinin (məsələn, daşımalar) onları təsvir edən cədvəllərlə (müştərilər, məhsullar, tarixlər) əlaqələndirildiyi məlumat modeli. Power BI və Tableau hesabatlarının adi əsasıdır.',
    },
  },
  {
    id: 'tonne-km',
    article: 'logistics-emissions',
    en: {
      term: 'Tonne-kilometre',
      text: 'One tonne of goods moved one kilometre. The unit of transport activity used to calculate freight emissions.',
    },
    az: {
      term: 'Ton-kilometr',
      text: 'Bir ton yükün bir kilometr daşınması. Daşıma emissiyalarının hesablanmasında istifadə olunan fəaliyyət vahidi.',
    },
  },
  {
    id: 'well-to-wheel',
    article: 'logistics-emissions',
    en: {
      term: 'Well-to-wheel (WTW)',
      text: 'Emissions from producing and delivering the fuel (well-to-tank) plus those from using it in the vehicle (tank-to-wheel).',
    },
    az: {
      term: 'Quyudan təkərə (well-to-wheel)',
      text: 'Yanacağın istehsalı və çatdırılmasından (quyudan çənə) və onun nəqliyyat vasitəsində istifadəsindən (çəndən təkərə) yaranan emissiyaların cəmi.',
    },
  },
  {
    id: 'xyz-analysis',
    article: 'abc-xyz-analysis',
    en: {
      term: 'XYZ analysis',
      text: 'Sorting items by how steady their demand is: X items are stable and easy to forecast, Z items erratic.',
    },
    az: {
      term: 'XYZ təhlili',
      text: 'Məhsulların tələbinin nə qədər sabit olmasına görə sıralanması: X qrupu sabit və proqnozu asan, Z qrupu isə qeyri-sabit məhsullardır.',
    },
  },
];
