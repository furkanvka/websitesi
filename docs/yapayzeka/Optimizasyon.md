Tabii! Yazını mümkün olduğunca **senin ifadelerini koruyarak**, sadece **imla, noktalama, Türkçe ifade ve tekrarları düzelterek** yeniden düzenledim. Gereksiz tekrarları çıkardım, cümle yapısını daha okunaklı hale getirdim.

---

# Optimizasyon

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

* **Lineer Yakınsama:** \$|e\_{k+1}| \le c\_1 |e\_k|\$ koşulu sağlanır (\$0 < c\_1 < 1\$). Hata her adımda belli bir oranda azalır.
* **Karesel Yakınsama:** \$|e\_{k+1}| \le c\_2 |e\_k|^2\$ (\$0 < c\_2 < 1\$). Hata her adımda karesi oranında azalır, bu çok daha hızlıdır.
* **Süperlineer Yakınsama:** Lineer yakınsamanın daha hızlı bir hali.

### Yerel Minimumlardan Kaçınma

Özellikle konveks olmayan problemlerde algoritmalar **yerel minimumlara** takılabilir. Bunun önüne geçmek için:

* **Rastgele Yeniden Başlatma:** Farklı başlangıç noktalarından algoritmayı tekrar çalıştırmak.
* **Türevsiz Teknikler:** Genetik algoritmalar, tavlama benzetimi gibi yöntemler, daha geniş bir arama yaparak yerel minimumlara takılma riskini azaltır.



## Türev Tabanlı Tekniklere Derinlemesine Bakış


## Gradient Descent

in gradient descent, we compute the update for the parameter vector as θ←θ−η∇θf(θ)
. Steepest descent is typically defined as gradient descent in which the learning rate η
 is chosen such that it yields maximal gain along the negative gradient direction. The part of the algorithm that is concerned with determining η
 in each step is called line search.


## Stepest Descent

Method of Gradient Descent: only cares about descent in the negative gradient direction.

Method of Steepest Gradient Descent: descents in the direction of the largest directional derivative.

En Dik İniş, bir fonksiyonun minimum noktasını bulmak için kullanılan iteratif bir optimizasyon algoritmasıdır. Her adımda, fonksiyonun gradyanının tersi yönünde hareket ederek en dik iniş yönünü takip ederiz[cite: 325].

* **Adım Büyüklüğü (Epsilon - $\epsilon$)**: Yeni iterasyonda ne kadar ilerleneceğini belirleyen bir parametredir. $x_{\text{yeni}} = x_{\text{eski}} - \epsilon \cdot \text{df}$ formülüyle ifade edilir, burada $df$ fonksiyonun gradyanıdır[cite: 327]. $\epsilon$ değeri, $f(z(\epsilon))$ fonksiyonunun minimumunu bulmak için $f'(z(\epsilon))=0$ denklemi çözülerek hesaplanır[cite: 330, 340].
    * **Örnek 1: $f(x)=x^2$ fonksiyonunun minimumunu bulma** [cite: 337]
        * $z(\epsilon) = x - \epsilon \cdot 2x = x(1-2\epsilon)$ [cite: 338]
        * $f(z(\epsilon)) = x^2(1-2\epsilon)^2$ [cite: 341]
        * $f'(z(\epsilon)) = x^2(-4 + 8\epsilon) = 0$ [cite: 343]
        * Buradan $\epsilon = 1/2$ bulunur[cite: 344].
        * Sonuç olarak $X_{n+1} = X_n - \epsilon \cdot 2X_n = X_n - X_n = 0$ olur. Bu durumda, başlangıç noktanız ne olursa olsun, minimum nokta tek bir iterasyonda bulunur[cite: 345, 346].
    * **Örnek 2: $f(x)=x^4$ fonksiyonunun minimumunu bulma** [cite: 350]
        * Benzer şekilde, $z(\epsilon) = x - \epsilon \cdot 4x^3$[cite: 352].
        * Eğer minimum noktanın 0 olduğu biliniyorsa (gerçekte bilinmese de) [cite: 353, 354], $\epsilon = 1/(4x^2)$ olarak hesaplanır[cite: 356].
        * Yine, başlangıç noktasından bağımsız olarak minimum nokta tek bir iterasyonda bulunur[cite: 357, 358, 359].
    * **2 Boyutlu Örnek: $f(x_1, x_2) = x_1^2 + 3x_2^2$ fonksiyonunun minimumunu bulma** [cite: 366]
        * Gradiyent: $df = [2x_1; 6x_2]$ [cite: 367]
        * Arama yönü $z(t) = [x_1(1-2t); x_2(1-6t)]$ [cite: 375]
        * $f(z(t))$'nin türevi alınır ve sıfıra eşitlenerek $t$ (yani $\epsilon$) değeri bulunur[cite: 381, 385].
        * $t = \frac{4(x_1^2) + 36(x_2^2)}{8(x_1^2) + 216(x_2^2)} = \frac{x_1^2 + 9x_2^2}{2x_1^2 + 54x_2^2}$[cite: 387, 388].
        * İterasyon denklemi: $X_{n+1} = X_n - t \cdot [2x_1; 6x_2]$[cite: 395].

* **Arama Yönünün Dikeyliği**: En Dik İniş yönteminde, yeni arama yönü her zaman önceki yöne dik olacaktır[cite: 422, 434]. Bu, algoritmanın ilerleyişinde önemli bir özelliktir.

### 2. Lineer Yaklaşım (Linear Approximation) [cite: 439]

Lineer yaklaşım, bir fonksiyonun belirli bir noktada lineer olduğunu varsayarak o noktadaki değerini tahmin etme yöntemidir[cite: 440]. Bu, 1. dereceden Taylor serisi açılımına dayanır[cite: 489].

* **Formül**: $f(x+\Delta x) \approx f(x) + \Delta x \cdot f'(x)$[cite: 463, 492]. Burada $f'(x)$ fonksiyonun $x$ noktasındaki türevidir.
* **Örnek 1: $(1.0002)^{50}$ değerini hesaplama** [cite: 460]
    * $f(x) = x^{50}$ olarak alınır. $x=1$, $\Delta x = 0.0002$[cite: 466].
    * $f(1.0002) \approx f(1) + 0.0002 \cdot f'(1) = 1^{50} + 0.0002 \cdot (50 \cdot 1^{49}) = 1 + 0.0002 \cdot 50 = 1.01$[cite: 469].
* **Örnek 2: $f(x)=\ln x$ için lineer yaklaşım** [cite: 475]
    * $x$ 1'e yakınken: $\ln x \approx x-1$[cite: 480].
    * $x$ 2'ye yakınken: $\ln x \approx \ln 2 + (x-2)/2$[cite: 483].
* **Daha İyi Yaklaşım için Taylor Serisi**: Daha doğru yaklaşımlar için 2. veya daha yüksek dereceden Taylor serileri kullanılabilir[cite: 493, 496]. $N$. dereceden Taylor açılımı $f(x+\Delta x) \approx \Sigma (f^{(i)'}(x)\Delta x^i) / i!$ olarak ifade edilir[cite: 498].

### 3. Newton-Raphson Metodu (Newton-Raphson Method)

Newton-Raphson metodu, bir fonksiyonun köklerini (yani $f(x)=0$ olan $x$ değerlerini) veya bir fonksiyonun minimum/maksimum noktalarını (yani $f'(x)=0$ olan $x$ değerlerini) bulmak için kullanılan iteratif bir yöntemdir.

* **1. Dereceden Newton-Raphson (Kök Bulma)**: Bir fonksiyonun kökünü bulmak için kullanılır ($f(x)=0$)[cite: 557].
    * İterasyon denklemi: $x_{n+1} = x_n - f(x_n) / f'(x_n)$[cite: 559].
    * Yakınsama, $x_{n+1}$ ve $x_n$ arasındaki farkın belirli bir hassasiyetin altına düşmesiyle kontrol edilir.
    * **Örnek: $\sqrt{2}$'yi bulma (yani $x^2-2=0$'ın kökünü bulma)** [cite: 573]
        * $x_{n+1} = x_n - (x_n^2 - 2) / (2x_n)$[cite: 573].
        * $x_0=1$ ile başlandığında, birkaç iterasyonda $\sqrt{2} \approx 1.41421$ sonucuna ulaşılır[cite: 573].
* **2. Dereceden Newton-Raphson (Minimum/Maksimum Bulma)**: Bir fonksiyonun minimum veya maksimum noktasını bulmak için kullanılır ($f'(x)=0$)[cite: 579].
    * İterasyon denklemi: $x_{n+1} = x_n - f'(x_n) / f''(x_n)$[cite: 578].
* **Karşılaştırma**:
    * **Daha Hızlı Yakınsama**: Newton-Raphson metodu, 2. türevi kullandığı için (daha fazla bilgi içerir) genellikle daha hızlı yakınsar ve daha az iterasyon sayısı gerektirir[cite: 590, 577].
    * **Daha Fazla Hesaplama**: Ancak her iterasyonda daha fazla hesaplama (türevlerin hesaplanması) gerektirebilir[cite: 590].
    * **Adım Büyüklüğü Seçimi Yok**: En Dik İniş'in aksine, Newton-Raphson'da açıkça bir adım büyüklüğü (epsilon) seçimi yoktur[cite: 577].
* **Döngü Problemi (Cycle Problem)**: Bazı fonksiyonlarda, özellikle başlangıç noktası uygun seçilmediğinde, Newton-Raphson metodu bir döngüye girebilir ve köke yakınsayamayabilir[cite: 586, 588]. Örneğin, $x^3 - 2x + 2$ fonksiyonunda başlangıç noktası (0,1) aralığında olduğunda, iterasyonlar 0 ve 1 arasında gidip gelebilir[cite: 586, 588].








## kaynakça

- Mfa hocamızın notları
- https://medium.com/@habicoban/steepest-descent-algoritmas%C4%B1-fonksiyon-optimizasyonunda-bir-ad%C4%B1m-%C3%B6ne-ge%C3%A7mek-aac7bc58d4d0