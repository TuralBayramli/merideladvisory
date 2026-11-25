---
title: 'Təxminsiz sığorta ehtiyatı'
description: '"İki həftəlik ehtiyat" kimi qaydalar bütün məhsullara eyni yanaşır. Sadə statistik üsul sığorta ehtiyatını tələbin dəyişkənliyinə, çatdırılma müddətinə və istədiyiniz xidmət səviyyəsinə görə hər məhsul üzrə təyin edir.'
date: 2026-11-23
image: warehouse
takeaways:
  - '"İki həftəlik ehtiyat" kimi qaydalar sabit məhsullarda artıq, qeyri-sabit məhsullarda isə az ehtiyat yaradır.'
  - 'Sığorta ehtiyatı = z × σ × √L düsturu ehtiyatı tələbin dəyişkənliyinə, çatdırılma müddətinə və istədiyiniz xidmət səviyyəsinə görə təyin edir.'
  - 'Xidmət səviyyəsini 95%-dən 99%-ə qaldırmaq təxminən 40% daha çox sığorta ehtiyatı tələb edir, ona görə bu, biznes qərarı olmalıdır.'
figure: safety
figureBefore: 2
topic: "inventory"
terms:
  - "safety-stock"
  - "reorder-point"
  - "cycle-service-level"
  - "lead-time"
bottomLine: "Sığorta ehtiyatını təcrübi qaydaya görə deyil, hər məhsul üzrə tələbin dəyişkənliyi, çatdırılma müddəti və razılaşdırılmış xidmət səviyyəsi əsasında təyin edin. Sonra siyasəti keçən ilin tələbi ilə yoxlayın."
faq:
  - q: "Sığorta ehtiyatı ilə sifariş nöqtəsi arasında fərq nədir?"
    a: "Sığorta ehtiyatı qeyri-müəyyənlik üçün buferdir. Sifariş nöqtəsi isə yeni sifarişi başladan ehtiyat səviyyəsidir: çatdırılma müddətində gözlənilən tələb üstəgəl sığorta ehtiyatı."
  - q: "Hansı xidmət səviyyəsini seçməliyik?"
    a: "Bu, biznes qərarıdır. Bir çox şirkət əksər məhsullar üçün 95%, yalnız kritik və ya yüksək marjalı məhsullar üçün daha yüksək səviyyə tətbiq edir, çünki xidmətin hər əlavə faizi əvvəlkindən daha çox ehtiyat tələb edir."
  - q: "Sığorta ehtiyatı nə qədər tez-tez yenidən hesablanmalıdır?"
    a: "Ən azı rübdə bir dəfə və tələb və ya təchizatçılar nəzərəçarpacaq dərəcədə dəyişəndə. Bir çox planlaşdırma sistemi bunu son məlumatlarla avtomatik hesablaya bilir."
---

Planlaşdırıcıdan bir məhsul üçün nə qədər sığorta ehtiyatı lazım olduğunu soruşsanız, çox vaxt təcrübi qayda eşidəcəksiniz: iki həftəlik ehtiyat, idxal mallar üçün isə bir ay. Belə qaydaları izah etmək asandır, amma onlar sabit və sürətli satılan məhsula da, qeyri-sabit məhsula da eyni yanaşır. Nəticədə tələbin sakit olduğu yerdə artıq ehtiyat, qeyri-sabit olduğu yerdə isə çatışmazlıq yaranır.

## Əsas düstur

Sığorta ehtiyatı yenidən təchizat müddətində dəyişkənliyi udmaq üçündür. Çatdırılma müddəti etibarlıdırsa, standart başlanğıc nöqtəsi belədir:

**Sığorta ehtiyatı = z × σ × √L**

- **σ** dövr üzrə (məsələn, həftəlik) tələbin, daha yaxşısı isə proqnoz xətasının standart kənarlaşmasıdır
- **L** eyni dövrlərlə ölçülən çatdırılma müddətidir
- **z** istədiyiniz xidmət səviyyəsinə uyğun əmsaldır: 90% üçün təxminən 1,28, 95% üçün 1,65, 98% üçün 2,05

Həftəlik tələb dəyişkənliyi 40 vahid, çatdırılma müddəti dörd həftə və hədəfi 95% olan məhsula təxminən 1,65 × 40 × 2 = 132 vahid sığorta ehtiyatı lazımdır. Orta satışı eyni, amma dəyişkənliyi iki dəfə az olan məhsula isə yarısı qədər.

## Çatdırılma müddəti də dəyişəndə

Təchizatçılar tam etibarlı deyil. Çatdırılma müddətinin özü də dəyişirsə, düstur genişlənir:

**Sığorta ehtiyatı = z × √(L × σd² + d² × σL²)**

burada **d** dövr üzrə orta tələb, **σL** isə çatdırılma müddətinin standart kənarlaşmasıdır. Daşınma müddəti gözlənilməz olan idxal mallarda çox vaxt ikinci hissə üstünlük təşkil edir. Bu o deməkdir ki, təchizatçının etibarlılığı üzərində işləmək daha yaxşı proqnozdan daha çox pul azad edə bilər.

## Praktikada necə tətbiq etməli

- **Əvvəlcə seqmentləşdirin.** Məhsulları dəyərinə və tələbin dəyişkənliyinə görə qruplaşdırın. Yüksək dəyərli, sabit məhsullar dəqiq hədəflərə layiqdir; yavaş və qeyri-sabit məhsulları isə sifarişlə istehsal etmək və ya almaq daha yaxşı ola bilər.
- **Xidmət səviyyələrini şüurlu seçin.** 95%-dən 99%-ə keçid z əmsalını 1,65-dən 2,33-ə qaldırır, yəni təxminən 40% daha çox sığorta ehtiyatı deməkdir. Bu, avtomatik seçim deyil, biznes qərarı olmalıdır.
- **Keçmiş məlumatlarla yoxlayın.** Ötən ilin tələbini təklif olunan siyasətə tətbiq edin, çatışmazlıqları və orta ehtiyatı sayın. Bu, istənilən düsturdan daha tez etimad yaradır.
- **Mütəmadi yeniləyin.** Tələb və təchizatçılar dəyişir. Rüblük yeniləmə rəqəmləri dəqiq saxlayır.

Düstur işin asan hissəsidir. Əsl dəyər təmiz tələb və çatdırılma müddəti məlumatlarından, həm maliyyənin, həm də satışın qəbul etdiyi xidmət hədəflərindən gəlir.
