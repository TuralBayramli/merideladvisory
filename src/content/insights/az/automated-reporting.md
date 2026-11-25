---
title: "Aylıq cədvəldən avtomatlaşdırılmış hesabata"
description: "Kimsə hər ayın ilk günlərini fayllar arasında məlumat köçürməyə sərf edirsə, hesabat yəqin ki, özü-özünü qura bilər. Ora necə çatmağın addım-addım yolu, bəlkə də artıq əlinizdə olan alətlərlə."
date: 2026-11-25
topic: data
image: code
takeaways:
  - "Əl ilə hazırlanan aylıq hesabatlar bacarıqlı insanların vaxtını alır və hər komandaya rəqəmlərin bir az fərqli versiyasını verir."
  - "Avtomatlaşdırma beş addımdan ibarətdir: mənbələri siyahıya almaq, çıxarmanı avtomatlaşdırmaq, təmizləməni bir dəfə yazmaq, vahid məlumat modeli qurmaq və yenilənməni planlaşdırmaq."
  - "Alətləri məlumat həcminə, lisenziyalara və onlara kimin baxacağına görə seçin, səhvləri erkən tutmaq üçün yoxlamalar əlavə edin."
figure: pipeline
figureBefore: 2
bottomLine: "Hesabat hər ay əl ilə yenidən qurulursa, onu kiçik addımlarla avtomatlaşdırın: əvvəlcə çıxarma, sonra təmizləmə, sonra vahid ümumi model. Qənaət olunan vaxt təhlilə gedir və hamı eyni rəqəmlərlə işləyir."
faq:
  - q: "Hesabatı avtomatlaşdırmaq üçün məlumat anbarı (data warehouse) lazımdırmı?"
    a: "Başlanğıcda yox. Bir çox hesabat planlaşdırılmış ixrac fayllarını oxuyan Power Query və ya Alteryx ilə avtomatlaşdırıla bilər. Həcmlər artanda və ya çox hesabat eyni məlumatdan istifadə edəndə məlumat anbarı faydalı olur."
  - q: "Aylıq hesabatı avtomatlaşdırmaq nə qədər vaxt aparır?"
    a: "Bir neçə mənbəsi olan tipik logistika hesabatı çox vaxt bir neçə həftəyə avtomatlaşdırılır. Ən çox vaxtı adətən mənbə məlumatlarına etibarlı çıxış əldə etmək aparır."
  - q: "Mənbə sistem dəyişəndə nə baş verir?"
    a: "Müvafiq addım dayanır və ya yanlış cəm göstərir. Avtomatik yoxlamalar və hər mənbə üçün təyin olunmuş cavabdeh problemin tez görülüb düzəldilməsini təmin edir."
terms:
  - "etl"
  - "single-source-of-truth"
  - "star-schema"
  - "kpi"
---

Bir çox şirkətdə aylıq logistika hesabatı bir növ ritualdır. Kimsə ERP-dən, daşıma sistemindən və anbar sistemindən məlumatları ixrac edir, böyük bir Excel faylına yapışdırır, pozulmuş düsturları düzəldir və nəticəni beşinci iş günü e-poçtla göndərir. Bu işləyir, amma bacarıqlı insanların vaxtını alır, asanlıqla pozulur və hər komandada həqiqətin bir az fərqli versiyası qalır.

## Avtomatlaşdırılmış hesabat necə görünür

Avtomatlaşdırılmış hesabat hər dəfə əl ilə köçürmə olmadan eyni addımları izləyir. Məlumatlar hər mənbədən çıxarılır, təmizlənib birləşdirilir, vahid modeldə saxlanılır və cədvəl üzrə yenilənən panel və ya iş kitabında göstərilir. Bunlar klassik ETL addımlarıdır: çıxarma, çevirmə, yükləmə. İnsanlar vaxtlarını rəqəmləri hazırlamağa deyil, rəqəmlərin doğurduğu suallara sərf edir.

## Ora çatmaq üçün beş addım

1. **Mənbələri və onların sahiblərini siyahıya alın.** Hesabatın istifadə etdiyi hər faylı və sistemi, hər birinə kimin çıxış verə biləcəyini yazın.
2. **Çıxarmanı avtomatlaşdırın.** Bir çox sistem ixracı ümumi qovluğa planlaşdıra bilir və ya verilənlər bazası, yaxud API bağlantısı təklif edir.
3. **Təmizləmə addımlarını bir dəfə yazın.** Excel və ya Power BI-dakı Power Query, Alteryx və Tableau Prep hər addımı, məsələn, təkrarların silinməsini, kodların uyğunlaşdırılmasını və vahidlərin çevrilməsini yadda saxlayır ki, hər dəfə eyni qaydada işləsin. Böyük həcmlər üçün SQL və Python eyni işi görür.
4. **Vahid məlumat modeli qurun.** Daşımalar və sifarişlər kimi fakt cədvəlləri müştərilər, məhsullar, daşıyıcılar və tarixlər cədvəlləri ilə əlaqələndirilir.
5. **Dərc edin və planlaşdırın.** Hər gün və ya hər həftə yenilənən Power BI, yaxud Tableau hesabatı, və ya modelə qoşulmuş Excel faylı.

## Hansı iş üçün hansı alət

- **Power Query ilə Excel:** kiçik və orta həcmli məlumat üçün ən sürətli başlanğıc; əksər komandalarda artıq var.
- **Alteryx və ya Tableau Prep:** analitiklərin kod yazmadan baxa bildiyi vizual iş axınları.
- **SQL və Python:** böyük həcmlər, çoxlu mənbə və ya mürəkkəb məntiq üçün, adətən məlumat anbarı ilə birlikdə.
- **Power BI, Tableau və ya Looker Studio:** model üzərində qurulmuş interaktiv panelləri paylaşmaq üçün.

Düzgün kombinasiya məlumat həcmindən, artıq ödədiyiniz lisenziyalardan və həll qurulduqdan sonra ona kimin baxacağından asılıdır.

## Davamlı olsun

Heç kim cavabdeh olmayanda avtomatlaşdırma səssizcə dayanır. Hər mənbəni və hər çevirməni sənədləşdirin. Sətir sayları, keçən ayla müqayisədə cəmlər və uyğunlaşmayan kodlar kimi sadə yoxlamalar əlavə edin. Mənbə dəyişəndə hesabatı kimin düzəldəcəyini müəyyənləşdirin. Bu, birdəfəlik layihəni biznesin etibar edə biləcəyi vahid həqiqət mənbəyinə çevirir.
