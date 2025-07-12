---
id: 5
title: Optimizasyon nedir
---

# Optimizasyon Nedir

## Optimizasyon Nedir

Optimizasyon, mevcut seçenekler arasından en iyi çözümü bulma sürecidir. Mühendislikten ekonomiye kadar pek çok alanda süreçleri daha verimli hale getirmek veya belirli hedeflere ulaşmak için yaygın olarak kullanılır. Örneğin, yapay sinir ağlarının parametrelerini istenen değerlere getirmek için optimizasyon tekniklerinden faydalanılır.

Bir optimizasyon problemi genellikle üç ana bileşenden oluşur:

* **Değişkenler:** En iyi çözümü bulmak için üzerinde oynanabilen, değiştirilebilen elemanlardır.
* **Amaç Fonksiyonu:** Minimize veya maksimize edilmesi istenen fonksiyondur.
* **Kısıtlayıcı Fonksiyonlar:** Değişkenlerin uyması gereken sınırlamalar veya koşullardır.

Örneğin, belirli bir uzunluktaki çitle çevirebileceğiniz en büyük dikdörtgen alanı bulmak istediğinizde, değişkenler dikdörtgenin boyutları, amaç fonksiyonu alan, kısıtlama ise mevcut çitin toplam uzunluğudur.

## Optimizasyon Tekniklerinin Uygulamaları

Optimizasyon teknikleri pek çok alanda kullanılır:

* **Portföy Optimizasyonu:** Finans alanında, belirli bir risk seviyesinde en yüksek getiriyi ya da belirli bir getiride en düşük riski sağlayacak varlık dağılımını bulmak için kullanılır.

  * **Değişkenler:** Farklı varlıklara yatırılan miktarlar.
  * **Kısıtlar:** Bütçe, varlık başına maksimum/minimum yatırım, minimum getiri.
  * **Amaç:** Genel risk ya da getirinin varyansı.

* **Veri Uydurma (Data Fitting):** Bir modele en uygun parametreleri bularak veri noktaları arasındaki ilişkiyi belirlemek için kullanılır.

  * **Değişkenler:** Model parametreleri.
  * **Kısıtlar:** Önceden belirlenmiş bilgiler, parametre limitleri.
  * **Amaç:** Tahmin hatası veya uyumsuzluk ölçüsünü minimize etmek.

* **Mühendislik Tasarımı:** Bir ürünün ya da sistemin performansını, maliyetini veya verimliliğini optimize etmek için kullanılır.

* **Lojistik ve Tedarik Zinciri:** Rota optimizasyonu, depo yerleşimi ve envanter yönetimi gibi alanlarda maliyetleri düşürmek ve verimliliği artırmak için uygulanır.

## Optimizasyon Teknikleri

Optimizasyon yöntemleri genel olarak ikiye ayrılır: **türevli teknikler** ve **türevsiz teknikler**.

* **Türevli Teknikler**

  * Gradient descent
  * Newton-Raphson
  * LM
  * BFGS
* **Türevsiz Teknikler**

  * Hill climbing
  * Genetik algoritmalar
  * Simulated annealing

### Genel Optimizasyon Algoritması

Çoğu optimizasyon algoritması benzer bir genel yapıya sahiptir:

1. **Başlangıç Tahmini:** Optimizasyon değişkenleri için bir başlangıç değeri seçilir.
2. **İteratif Geliştirme:** Aşağıdaki durdurma koşullarından biri sağlanana kadar devam eder:

   * İterasyonlar arasındaki **iyileşme kayda değer değildir**.
   * **Maksimum iterasyon sayısına ulaşılmıştır**.

Bu iteratif süreç, tüm kısıtlamaları sağlarken amaç fonksiyonunu minimize veya maksimize edecek şekilde optimal çözüme yaklaşmayı hedefler.

## Lineer, Nonlineer ve Konveks Fonksiyonlar

Amaç ve kısıt fonksiyonlarının yapısını anlamak optimizasyonda kritik önemdedir:

* **Lineer Fonksiyon:** Bir \$f: R^n \to R\$ fonksiyonu, \$f(x\_1+x\_2)=f(x\_1)+f(x\_2)\$ ve \$f(r \cdot x\_1)=r \cdot f(x\_1)\$ koşullarını sağlıyorsa lineerdir. Örneğin, \$f(x)=2x\$ lineer ve aynı zamanda affin fonksiyondur.
* **Afin Fonksiyon:** Lineer fonksiyonun bir ötelemesiyle oluşur. Orijinden geçmek zorunda değildir. Örneğin, \$f(x)=2x+3\$ afin ama lineer değildir. Benzer şekilde sabit fonksiyonlar da (\$f(x)=3\$) afin olup lineer değildir.
* **Konveks Fonksiyon:** \$f\$, tanım kümesindeki iki nokta \$x\_1, x\_2\$ için ve \$\lambda, \beta \ge 0\$, \$\lambda+\beta=1\$ olmak üzere,

  $$
  \lambda f(x_1) + \beta f(x_2) \ge f(\lambda x_1 + \beta x_2)
  $$

  eşitsizliğini sağlıyorsa konvekstir. Geometrik olarak bu, iki noktayı birleştiren doğru parçasının grafiğin üstünde kalması demektir.
* **Konkav Fonksiyon:** Eğer \$-f\$ konveks ise \$f\$ konkavdır.

## Optimizasyon Problemlerinin Sınıflandırılması

### Fonksiyon Tipine Göre

* **Lineer Programlama (LP):** Amaç ve kısıt fonksiyonları lineerdir. Genellikle simplex gibi algoritmalarla çözülür.
* **Karesel Programlama (QP):** Amaç fonksiyonu karesel, kısıt fonksiyonları lineerdir.
* **Konveks Optimizasyon:** Amaç ve kısıt fonksiyonları konveks olduğunda her yerel minimum aynı zamanda küresel minimumdur.
* **Lineer Olmayan Programlama (NLP):** Amaç ya da kısıt fonksiyonlarından en az biri lineer değilse bu grupta yer alır. Bu tür problemlerde birden fazla yerel minimum olabilir.

### Kısıt Tipine Göre

* **Kısıtsız Optimizasyon:** Yalnızca amaç fonksiyonu üzerinde çalışılır, herhangi bir kısıtlama yoktur.
* **Kısıtlı Optimizasyon:** Amaç fonksiyonu minimize veya maksimize edilirken belirli eşitlik ya da eşitsizlik kısıtlarına uyulmalıdır.

## Yakınsama (Convergence) ve Durdurma Kriterleri

Optimizasyon algoritmalarında iterasyonların ne zaman duracağını belirlemek için çeşitli kriterler kullanılır:

* **Adım Büyüklüğü:** Her iterasyonda yapılan değişim. Çok büyük olursa aşırı sapabilir, çok küçük olursa yavaş yakınsar.
* **İterasyon Sayısı:** Belirlenen maksimum iterasyon sayısı.
* **Amaç Fonksiyonundaki Değişim:** Amaç fonksiyonunun ardışık iterasyonlarda belirli bir eşik değerin altına inmesi.
* **Değişkenlerdeki Değişim:** Optimizasyon değişkenlerinin değişiminin belli bir eşik değerin altına düşmesi.
* **Gradyan Normu:** Gradyanın sıfıra yaklaşması, minimum noktaya ulaşıldığını gösterir.

### Yakınsama Türleri

* **Lineer Yakınsama:**  Hata her adımda belli bir oranda azalır.
* **Karesel Yakınsama:** Hata her adımda karesi oranında azalır, bu çok daha hızlıdır.
* **Süperlineer Yakınsama:** Lineer yakınsamanın daha hızlı bir hali.

### Yerel Minimumlardan Kaçınma

Özellikle konveks olmayan problemlerde algoritmalar **yerel minimumlara** takılabilir. Bunun önüne geçmek için:

* **Rastgele Yeniden Başlatma:** Farklı başlangıç noktalarından algoritmayı tekrar çalıştırmak.
* **Türevsiz Teknikler:** Genetik algoritmalar, tavlama benzetimi gibi yöntemler, daha geniş bir arama yaparak yerel minimumlara takılma riskini azaltır.

---
Kaynakçayı optimzasyon teknikleritektek analıtmı bir sonraki kısımda
