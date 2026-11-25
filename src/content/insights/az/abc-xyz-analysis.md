---
title: "ABC-XYZ təhlili: hər məhsula layiq olduğu siyasəti verin"
description: "Bütün məhsullara eyni yanaşma bəzilərində ehtiyatı israf edir, digərlərində isə çatışmazlıq yaradır. ABC-XYZ təhlili məhsulları dəyərinə və tələbin sabitliyinə görə qruplaşdırır ki, hər qrup düzgün siyasət alsın."
date: 2026-11-25
topic: inventory
image: picking
takeaways:
  - "ABC məhsulları dəyərinə görə sıralayır; XYZ isə tələbin nə qədər sabit olmasına görə qruplaşdırır."
  - "Birləşmiş doqquz qrupun hər birinə ayrıca ehtiyat siyasəti, xidmət səviyyəsi və planlaşdırıcı diqqəti lazımdır."
  - "Bir illik tələb məlumatlarından istifadə edin, çeşidinizə uyğun hədlər seçin və təhlili hər rüb yeniləyin."
figure: abc
figureBefore: 4
bottomLine: "ABC-XYZ təhlili üçün bir Excel faylı və bir illik məlumat kifayətdir; o, harada ehtiyat saxlamalı, harada sifarişlə işləməli və planlaşdırıcıların vaxtını hara sərf etməli olduğunu göstərir."
faq:
  - q: "ABC satış dəyərinə, yoxsa həcmə görə qurulmalıdır?"
    a: "Adətən dəyərə görə, məsələn, illik satış və ya istehlak dəyərinə, çünki bu, bağlanmış və risk altında olan pulu əks etdirir. Anbarın yerləşdirilməsi üçün isə yığım sayına görə sıralama daha faydalıdır."
  - q: "Məhsul yenidirsə və tarixçəsi yoxdursa, nə etməli?"
    a: "Ona oxşar məhsullara əsasən müvəqqəti qrup verin və üç-altı aylıq tələb toplananda yenidən hesablayın."
  - q: "ABC-XYZ tələb proqnozunu əvəz edə bilərmi?"
    a: "Xeyr. O, hər qrupa hansı metodun və siyasətin uyğun olduğunu göstərir: məsələn, X məhsulları üçün statistik proqnoz, bir çox Z məhsulu üçün isə sifarişə əsaslanan planlaşdırma."
terms:
  - "abc-analysis"
  - "xyz-analysis"
  - "safety-stock"
  - "cycle-service-level"
---

Tipik anbarda minlərlə məhsul saxlanılır. Onların az bir hissəsi satışın böyük hissəsini verir, çoxu isə nadir və gözlənilməz satılır. Buna baxmayaraq, çox vaxt hamısına eyni sifariş qaydaları, eyni sığorta ehtiyatı məntiqi və eyni planlaşdırıcı diqqəti tətbiq olunur. ABC-XYZ təhlili məhsulları fərqli yanaşmaya layiq qruplara bölməyin sadə yoludur.

## ABC: dəyərə görə sıralama

ABC təhlili məhsulları hansısa dəyər göstəricisindəki payına görə, adətən illik satış və ya istehlak dəyərinə görə sıralayır və sıralanmış siyahını üç qrupa bölür:

- **A məhsulları:** birlikdə dəyərin təxminən 80%-ni təşkil edən ən yuxarıdakı məhsullar. Çox vaxt bütün məhsulların cəmi 10–20%-i.
- **B məhsulları:** dəyərin növbəti 15%-i.
- **C məhsulları:** dəyərin son 5%-ni verən uzun quyruq; çox vaxt bütün məhsulların yarısı və ya daha çoxu.

80/15/5 bölgüsü qanun deyil, şərti qaydadır. Çeşidinizə uyğun hədlər seçin.

## XYZ: tələbin sabitliyinə görə sıralama

XYZ təhlili məhsulları tələbin nə qədər sabit olmasına görə qruplaşdırır. Adi ölçü son il üzrə həftəlik və ya aylıq tələbin variasiya əmsalıdır.

<p class="formula">Variasiya əmsalı = tələbin standart kənarlaşması ÷ orta tələb<small>Geniş yayılmış hədlər: X 0,5-dən aşağı, Y 0,5-dən 1-ə qədər, Z 1-dən yuxarı. Onları öz məlumatlarınıza uyğunlaşdırın.</small></p>

- **X məhsulları:** proqnozu asan olan sabit tələb.
- **Y məhsulları:** çox vaxt mövsümə və ya tendensiyaya görə dəyişən tələb.
- **Z məhsulları:** satışsız keçən çoxlu həftələri olan, proqnozu çətin qeyri-sabit tələb.

## Doqquz qrup, doqquz siyasət

İki təhlili birləşdirəndə üçə üç matris alınır və hər xana bir siyasət təklif edir:

- **AX:** yüksək dəyər və sabit tələb. Avtomatik sifariş və sıx nəzarətlə ehtiyatı minimal saxlayın.
- **AY və AZ:** yüksək dəyər, amma dəyişkən tələb. Sığorta ehtiyatı saxlayın və diqqətlə nəzarət edin, ya da çatdırılma müddəti imkan verirsə, sifarişlə istehsal edin və ya alın.
- **CX:** aşağı dəyər və sabit tələb. Sadə min–maks qaydaları və planlaşdırıcının az vaxtı.
- **CZ:** aşağı dəyər və qeyri-sabit tələb. Sifarişlə işləmək və ya çeşiddən çıxarmaq üçün namizədlər.

## Təhlili necə aparmalı

1. Məhsullar üzrə, həftəlik və ya aylıq on iki aylıq tələbi, vahid maya dəyəri və ya qiyməti ilə götürün.
2. Hər məhsulun illik dəyərini hesablayın, məhsulları sıralayın və A, B və ya C təyin edin.
3. Variasiya əmsalını hesablayın və X, Y və ya Z təyin edin.
4. Planlaşdırma, satış və maliyyə ilə hər xana üçün siyasəti razılaşdırın, xidmət səviyyələrini və yoxlama tezliyini ona uyğun təyin edin.
5. Hər rüb təkrarlayın: məhsullar köhnəldikcə və müştərilər dəyişdikcə qruplar arasında yer dəyişir.

Mümkün olduqda göndərişləri deyil, tələbi, yəni müştərilərin sifariş etdiyini istifadə edin. Göndərişlər məhsul ehtiyatda olmayanda itirdiyiniz satışları gizlədir.
