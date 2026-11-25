---
title: "Proqnoz dəqiqliyi: necə ölçməli və nəticə ilə nə etməli"
description: "Dəqiqliyin tək faiz göstəricisi göstərdiyi qədər də gizlədir. Xətaların həm ölçüsünü, həm də istiqamətini ölçün, sadə meyarla müqayisə edin və daha yaxşı proqnozun harada fayda verdiyini biləcəksiniz."
date: 2026-11-25
topic: inventory
image: analytics
takeaways:
  - "Proqnoz xətalarının həm ölçüsünü (MAPE və ya WAPE), həm də istiqamətini (meyl) ölçün."
  - "Meyli aradan qaldırmaq olar; təsadüfi xəta isə sığorta ehtiyatı ilə qarşılanmalıdır."
  - "Prosesin fayda verib-vermədiyini görmək üçün proqnozunuzu sadə, sadəlövh proqnozla müqayisə edin."
figure: forecast
figureBefore: 4
bottomLine: "Dəqiqlik göstəriciləri yalnız hərəkətə səbəb olduqda fayda verir. Xətaların ölçüsünü və meylini birlikdə, çatdırılma müddəti səviyyəsində və məhsul qrupları üzrə izləyin, proqnozunuzun sadəlövh proqnozdan yaxşı olduğunu yoxlayın."
faq:
  - q: "Yaxşı proqnoz dəqiqliyi nə qədərdir?"
    a: "Vahid hədəf yoxdur. Bu, məhsuldan, detallaşdırma səviyyəsindən və zaman üfüqündən asılıdır. Başqa sahənin rəqəmi ilə deyil, sadəlövh proqnozla və öz tendensiyanızla müqayisə edin."
  - q: "MAPE niyə az satılan məhsullarda yanıldır?"
    a: "Çünki faktiki tələbə bölür. Faktiki satış az və ya sıfır olanda ən kiçik xətalar belə böyük faizlərə çevrilir. WAPE kimi çəkili göstəricilər bu problemi aradan qaldırır."
  - q: "Satış komandaları proqnozu düzəltməlidirmi?"
    a: "Onların aksiyalar və müştərilər haqqında bilikləri dəyərlidir, amma düzəlişlərin dəqiqliyi artırıb-artırmadığını yoxlayın. Proqnozun əlavə dəyərini izləmək hansı dəyişikliklərin kömək etdiyini, hansıların meyl yaratdığını göstərir."
terms:
  - "mape"
  - "forecast-bias"
  - "safety-stock"
  - "sop"
---

Hər planlaşdırma komandasından proqnozlarının nə qədər dəqiq olduğu soruşulur və əksəriyyəti bir rəqəm deyə bilir. Daha azı bu rəqəmin nə demək olduğunu, yaxşı olub-olmadığını və ya proqnoz səhv olanda nəyə başa gəldiyini izah edə bilir. Proqnoz dəqiqliyi diqqətlə ölçülməlidir, çünki sığorta ehtiyatını, xidmət səviyyəsini və ehtiyata bağlanan pulu müəyyən edir.

## İki sual: nə qədər böyük və hansı tərəfə

Proqnoz xətasının ölçüsü və istiqaməti var. Ölçü nə qədər bufer ehtiyat lazım olduğunu göstərir. İstiqamət isə davamlı olaraq ehtiyat yığdığınızı, yoxsa davamlı olaraq çatışmazlıq yaşadığınızı göstərir.

<p class="formula">Xəta = proqnoz − faktiki tələb<small>Müsbət xəta proqnozun çox yüksək, mənfi xəta isə çox aşağı olduğunu bildirir.</small></p>

## MAPE: xətanın orta ölçüsü

Orta mütləq faiz xətası (MAPE) xətaların ölçüsünü faktiki tələbə nisbətdə ortalayır.

<p class="formula">MAPE = |proqnoz − faktiki| ÷ faktiki göstəricisinin ortası</p>

MAPE-i izah etmək asandır, amma satışı az və ya sıfır olan məhsullarda işləmir: faktiki satış 1 olanda 2-lik proqnoz 100% xəta deməkdir. Məhsul qrupu üçün çəkili versiya, WAPE, daha sabitdir: mütləq xətaların cəmi tələbin cəminə bölünür. O, həm də tez satılan məhsullara layiq olduqları çəkini verir.

## Meyl: düzəldə biləcəyiniz xəta

Meyl işarəsi saxlanılan xətanın tələbə nisbətidir.

<p class="formula">Meyl = (proqnoz − faktiki) cəmi ÷ faktiki tələbin cəmi<small>Sıfıra yaxın olması yaxşıdır. Davamlı müsbət meyl ehtiyat yığır, davamlı mənfi meyl isə çatışmazlıq yaradır.</small></p>

Təsadüfi xətanı yalnız sığorta ehtiyatı ilə qarşılamaq olar, meyli isə aradan qaldırmaq mümkündür. Geniş yayılmış səbəblər proqnoz kimi daxil edilən satış hədəfləri, tarixçədən təmizlənməmiş aksiyalar və proqnozu davam edən, amma satışdan çıxarılan məhsullardır.

## Sadəlövh proqnozla müqayisə

25% MAPE ehtiyat hissəsi üçün əla, gündəlik tələbat məhsulu üçün isə zəif ola bilər. Ən ədalətli yoxlama proqnozunuzu sadəlövh proqnozla, məsələn, "gələn ay bu ay kimi olacaq" və ya "keçən ilin eyni ayı" ilə müqayisə etməkdir. Proqnoz prosesi sadəlövh proqnozdan yaxşı deyilsə, ona sərf olunan əmək özünü doğrultmur. Bu müqayisə çox vaxt proqnozun əlavə dəyəri adlanır.

## Dəqiqliyi praktikada tətbiq etmək

- **Qərarların verildiyi səviyyədə ölçün:** ehtiyat üçün məhsul və anbar üzrə, güc planlaması üçün məhsul ailəsi üzrə.
- **Çatdırılma müddəti səviyyəsində ölçün.** Vacib olan keçən həftənin yeniləməsi deyil, sifarişin verilməli olduğu anda hazırlanan proqnozdur.
- **Ölçünü və meyli birlikdə,** ABC-XYZ qrupları üzrə hesabata salın. X məhsullarında yüksək dəqiqlik gözləyin, Z məhsullarında isə onun arxasınca qaçmayın.
- **Sığorta ehtiyatına yalnız tələbin dəyişkənliyini deyil,** proqnoz xətasını daxil edin.
