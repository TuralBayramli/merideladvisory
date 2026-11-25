---
title: "İnsanların həqiqətən istifadə etdiyi logistika panelləri"
description: "Bir çox panel iki dəfə açılır və sonra unudulur. Bir neçə dizayn qərarı insanların hər səhər baxdığı hesabatla heç kimin açmadığı hesabat arasındakı fərqi yaradır."
date: 2026-11-25
topic: data
image: data
takeaways:
  - "Panelin hər səhifəsini bir auditoriya və bir qərar üçün qurun."
  - "Hədəfi və tendensiyası olan bir neçə KPI ilə başlayın və istifadəçilərə onların arxasındakı sifarişlərə keçmək imkanı verin."
  - "Vahid məlumat modeli qurun ki, bütün hesabatlar eyni cəmi göstərsin."
figure: dash
figureBefore: 3
bottomLine: "Faydalı panel bir nəfərin sualına saniyələr içində cavab verir və hər rəqəmin arxasındakı detalı yoxlamağa imkan verir. Kiçikdən başlayın, etibarlı vahid məlumat modeli üzərində qurun və komanda hazır olanda xəbərdarlıqlar əlavə edin."
faq:
  - q: "Power BI, yoxsa Tableau?"
    a: "Hər ikisi güclüdür. Adətən daha yaxşı seçim şirkətinizin artıq lisenziya aldığı və dəstəklədiyi alətdir. Məlumat modeli və dizayn alətdən qat-qat vacibdir."
  - q: "Panelin bir səhifəsində neçə qrafik olmalıdır?"
    a: "Suala cavab vermək üçün lazım olan qədər, çox vaxt dörd-altı. Daha çoxu lazımdırsa, səhifə yəqin ki, birdən çox auditoriyaya xidmət edir və bölünməlidir."
  - q: "İdarəetmə qülləsi (control tower) nədir?"
    a: "Sifarişlərin, daşımaların və ehtiyatın xəbərdarlıqlarla birlikdə göstərildiyi ümumi görünüş; komanda ondan problemləri baş verən kimi həll etmək üçün istifadə edir. Bir çox idarəetmə qülləsi avtomatik yenilənən və bir neçə xəbərdarlığı olan yaxşı qurulmuş paneldən başlayır."
terms:
  - "kpi"
  - "star-schema"
  - "control-tower"
  - "single-source-of-truth"
---

Panel qurmaq heç vaxt bu qədər asan olmayıb. Power BI, Tableau və Looker Studio bir neçə dəqiqəyə demək olar ki, istənilən məlumat mənbəyinə qoşulur. Buna baxmayaraq, bir çox logistika paneli bir neçə həftə sonra unudulur: həddindən artıq qrafik, heç kimin etibar etmədiyi rəqəmlər və istifadəçinin səhifəni açanda verdiyi suala aydın cavabın olmaması.

## Məlumatdan deyil, qərardan başlayın

İlk qrafiki seçməzdən əvvəl paneldən kimin, nə qədər tez-tez istifadə edəcəyini və hansı qərarı dəstəkləməli olduğunu yazın. Səhər saat səkkizdə günün çatdırılmalarını yoxlayan dispetçerə ayı nəzərdən keçirən logistika direktorundan fərqli səhifə lazımdır. Bir səhifə, bir auditoriya, bir əsas sual.

## İstifadə olunan panel üçün beş qayda

1. **Üç-beş KPI ilə başlayın:** səhifənin yuxarısında, hər birinin hədəfi və tendensiyası ilə.
2. **Hər rəqəmi sifarişə qədər izləmək mümkün olsun.** Planlaşdırıcı qırmızı rəqəmin arxasındakı daşımaları aça bildikdə etibar artır.
3. **Hər şeyi deyil, istisnaları göstərin.** Gecikən sifarişlər, qeyri-adi xərclər və səbəblər üzrə uğursuzluqlar tam siyahıdan daha faydalıdır.
4. **Vahid məlumat modelindən istifadə edin.** Daşımalar, sifarişlər, müştərilər, daşıyıcılar və tarixlər üçün cədvəlləri bir dəfə, ulduz sxemi şəklində qurun və bütün hesabatları ona bağlayın; belə olduqda iki səhifə heç vaxt fərqli cəm göstərmir.
5. **Avtomatik yeniləyin və vaxtını göstərin.** Səhifədəki "son yenilənmə" vaxtı hər istifadəçinin verdiyi ilk suala cavab verir.

## Düzgün qrafiki seçmək

- **Zamanla tendensiyalar:** xətti qrafiklər.
- **Müştəriləri, marşrutları və ya daşıyıcıları müqayisə:** böyükdən kiçiyə sıralanmış sütunlu qrafiklər.
- **Prosesin mərhələləri,** məsələn, yaradılan, yığılan, göndərilən və çatdırılan sifarişlər: huni və ya ardıcıl sütunlar.
- **Məkanlar:** xəritə yalnız yerin özü vacib olduqda; əks halda sıralanmış sütunlu qrafiki oxumaq daha asandır.

3D effektlərdən, tək rəqəm göstərən böyük göstərici siferblatlarından və bəzək kimi işlədilən rənglərdən imtina edin. Rəng məna daşımalıdır: məsələn, gecikmə üçün qırmızı, diqqət tələb etməyən hər şey üçün boz.

## Paneldən idarəetmə qülləsinə

Panel kifayət qədər tez yenilənəndə və nəsə səhv gedəndə xəbərdarlıq göndərəndə idarəetmə qülləsinə çevrilir: komandanın gecikən daşımanı və ya ehtiyat çatışmazlığı riskini görüb müştəri hiss etməmişdən əvvəl tədbir gördüyü vahid görünüş. Başlamaq üçün xüsusi proqram təminatı lazım deyil. Əksər idarəetmə qüllələri bir neçə xəbərdarlığı olan yaxşı qurulmuş paneldən başlayır və komanda hansı istisnaların vacib olduğunu öyrəndikcə böyüyür.
