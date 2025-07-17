# Optimizasyon Teknikleri - 2 

## Stochastic Gradient Descent - SGD

Gradient Descent her döngüde tüm eğitim verisinin gradyanını hesapladr. Ancak n (eğitim veri seti boyutu) çok büyük olduğunda, bu hesaplama maliyetli çok yüksektir. İşte bu noktada **Stokastik Gradyan İnişi (SGD)** devreye girer.

SGD, her iterasyonda tüm veri kümesinin kullanmak yerine, **rastgele seçilmiş bir veri kümesi kullanarak modeli egitir.

- **Avantaj**
    - Daha hızlı iterasyonlar sağlar, çünkü her adımda daha az hesaplama yapılır.
    - Lokal minimumlardan kaçınma olasılığı daha yüksektir, çünkü gürültülü (noisy) gradyanlar optimizasyon yolunu rastgeleleştirerek farklı bölgelerin keşfedilmesine yardımcı olabilir.

- **Dezavantajları**:
    - Tek bir veri noktasından gelen gradyan gürültülü olduğu için, amaç fonksiyonunun tam olrak anlaşılamamasına sebep olablir.
    - Sabit bir öğrenme oranıyla çalışırken optimum noktada dalgalanmaya devam edebilir.

### Momentum 

adadan bahsetmeden önce momentumun ne olduhundan bahsedelim kısaca momnetum gradyan yönü değişmedigi zaman learning rate büyüterek modelin minimuma varması sürecini hızlandırıyor.

### Momentum eksileri

learnig rate çok büyüterek modelin sapması saglayablir aynı şekilde küçülterek çok ta yavaşlatablir bu tür durumlar momentumu kompleks minimumlara sahip problemlerde zayıf kılar.

## AdaGrad (Adaptive Gradient)
Her bir parametre ögrenmeden sonra parametlerinin momnetumun karesel biçimde tutulup ilerde kökler olarak tutulur bu sayede adaptif ögrenme denilen durumu saglamış olur.

## ADAM (Adaptive Moment Estimation)
AdaGrad'ın bir evrimidir ve öğrenme oranlarını hem geçmiş gradyanların birinci momentlerini (ortalama) hem de ikinci momentlerini (ortalama kare) kullanarak hesaplar. Momentum kavramını adaptif öğrenme oranlarıyla birleştirir.
    
- **Avantajları**: Genellikle hızlı yakınsar ve birçok makine öğrenimi probleminde iyi performans gösterir. Daha az manuel ayar gerektirir. Optimal noktaya daha doğrudan ulaşma eğilimindedir.local minimumlara takılmaz

- **Dezavantajları**: Bazı durumlarda (özellikle gürültülü veya genelleştirme sorunları olan problemlerde) SGD'den daha kötü performans gösterebilir. Bir boyut için gradyan sıfıra çok yakın olduğunda, ADAM bu gradyanı büyütebilir ve potansiyel olarak kararsızlığa yol açabilir.




## Kaynakça

- https://www.youtube.com/watch?v=MD2fYip6QsQ&t=839s