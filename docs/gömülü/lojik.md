---
id: lojik notları
title: Lojik Notları
---

# Comploments of Numbers

Dijital sistemlerde, çıkarma işlemini basitleştirmek ve mantıksal manipülasyon yapmak için komplementler kullanılır. Her R tabanlı sistemde iki tür komplement bulunur: **Radix komplement** ve **diminished radix komplement**. Birincisi r’nin komplemanı, ikincisi ise (r - 1)’in komplemanı olarak da adlandırılır.

## Diminished Radix Complement

Verilmiş r tabanında n basamaklı bir N sayısının **(r - 1) diminished radix** komplemeti şu formülle hesaplanır:

$$(r^n - 1) - N$$

Bu, sayının tüm basamaklarının **(r - 1) ile çıkarılmasıyla** elde edilir. Örneğin, **10 tabanında** (decimal) bir sayının **9'luk komplemanı**, tüm rakamlarının **9'dan çıkarılmasıyla** bulunur.

### 9 Kompleman Örneği

- **N = 4876** (4 basamaklı)
- **n = 4**, **r = 10**

Formüle göre:

$$(10^4 - 1) - 4876 = 9999 - 4876 = 5123$$

Sonuç: **9'luk kompleman = 5123**

### 2 Tabanında (1'lik Kompleman) Örneği

İkili sistemde (**r = 2** için), **1'lik kompleman** sayının **bütün bitlerinin ters çevrilmesiyle** bulunur.

- **N = 101100**
- 1'lik kompleman: **010011**

Bu yöntem, negatif sayıları temsil etmek ve dijital devrelerde işlemleri kolaylaştırmak için yaygın olarak kullanılır.

## Radix Complement

**Radix complement**, bir sayının **tam tabanına göre** komplemanıdır ve şu formülle hesaplanır:

$$r^n - N + 1$$

Bu yöntem, **diminished radix complement** kullanılarak elde edilen değere **1 eklenmesiyle** bulunur.

### 10 Tabanında (10'luk Kompleman) Örneği

Önce 9'luk komplemanı bulalım:

- **N = 4876**
- 9'luk kompleman = **5123**

Şimdi 10'luk komplemanı bulalım:

- 10'luk kompleman = **5123 + 1 = 5124**

### 2 Tabanında (2'lik Kompleman) Örneği

- **N = 101100**
- 1'lik kompleman = **010011**
- 2'lik kompleman = **010011 + 1 = 010100**

2'lik kompleman, bilgisayar sistemlerinde negatif sayıları temsil etmek için yaygın olarak kullanılır.

# Boolean Algebra


## Temel İşelemler

**Boolean Albegra**, dijital devrelerin ve mantıksal ifadelerin analizinde kullanılan matematik sistemdir.bu sistem içnde degerler bir ve sıfır olarak tutulur.Boolen albegrada kullanılna temel ifadeler şu şekildederi:

1. **AND (ve)**: İki girişin de doğru olduğu durumlarda sonuç doğru olur.
   - Sembol: $A \cdot B$ veya $A \land B$
     | A | B | A AND B |
     |---|---|---------|
     | 0 | 0 |    0    |
     | 0 | 1 |    0    |
     | 1 | 0 |    0    |
     | 1 | 1 |    1    |

2. **OR (veya)**: İki girişten en az birinin doğru olduğu durumlarda sonuç doğru olur.
   - Sembol: $A + B$ veya $A \lor B$
     | A | B | A OR B |
     |---|---|--------|
     | 0 | 0 |   0    |
     | 0 | 1 |   1    |
     | 1 | 0 |   1    |
     | 1 | 1 |   1    |

3. **NOT (değil)**: Girişin tersini alır.
   - Sembol: $\overline{A}$ veya $A'$
     | A | NOT A |
     |---|-------|
     | 0 |   1   |
     | 1 |   0   |

## Boolean İfadelerde kullanılan teoremler

Boolean ifadeler, dijital devrelerin daha verimli hale getirilmesi için sadeleştirilebilir ve değiştirelebilirler.


### Birleşim ve Değişim Kuralı

Bir küme üzerinde bir or işlemi \( * \) her  $(x * y) * z = x * (y * z)$  ve her  $x * y = y * x$ eşitliklerini sagladıgı için hem birleşimli hemde değişmelidir.

### Bir Değişkenin Kendisi ve Tersi ile Boolean İşlemleri

Boolean cebirinde, bir değişkenin kendisi ve tersi ile yapılan temel işlemler şunlardır:

1. **Bir Değişkenin Kendisi ile İşlemler:**
   - **AND İşlemi:**
     - $x \cdot x = x$
     - Bir değişkenin kendisiyle AND işlemi, değişkenin kendisini verir.
   - **OR İşlemi:**
     - $x + x = x$
     - Bir değişkenin kendisiyle OR işlemi, değişkenin kendisini verir.

2. **Bir Değişkenin Tersi ile İşlemler:**
   - **AND İşlemi:**
     - $x \cdot \overline{x} = 0$
     - Bir değişkenin kendisi ve tersi ile yapılan AND işlemi her zaman 0 verir.
   - **OR İşlemi:**
     - $x + \overline{x} = 1$
     - Bir değişkenin kendisi ve tersi ile yapılan OR işlemi her zaman 1 verir.

### Bir Değişkenin 1 ve 0 ile Boolean İşlemleri

Boolean cebirinde, bir değişkenin 1 ve 0 ile yapılan temel işlemler şunlardır:

1. **Bir Değişkenin 1 ile İşlemleri:**
   - **AND İşlemi:**
     - $ x \cdot 1 = x $
     - Bir değişkenin 1 ile AND işlemi, değişkenin kendisini verir.
   - **OR İşlemi:**
     - $ x + 1 = 1 $
     - Bir değişkenin 1 ile OR işlemi her zaman 1 verir.

2. **Bir Değişkenin 0 ile İşlemleri:**
   - **AND İşlemi:**
     - $ x \cdot 0 = 0 $
     - Bir değişkenin 0 ile AND işlemi her zaman 0 verir.
   - **OR İşlemi:**
     - $ x + 0 = x$
     - Bir değişkenin 0 ile OR işlemi, değişkenin kendisini verir.

## Boolen Functions

bu fonksiyonlar bazı boolen degişkenler , 0 ve 1 sabitlerinin lojik ifadelerle birleştirilmesi ile oluşan lojik gösterimlerdir şu şekilde ifade edille bilirler:
$$F1 = x + y'z$$
verilen ifadelerin truth table:

| x | y | z | F1 | 
|---|---|---|----|
| 0 | 0 | 0 |  0 |
| 0 | 0 | 1 |  1 |
| 0 | 1 | 0 |  0 |
| 0 | 1 | 1 |  0 |
| 1 | 0 | 0 |  1 |
| 1 | 0 | 1 |  1 |
| 1 | 1 | 0 |  1 |
| 1 | 1 | 1 |  1 |

Tabii, canonical ve standart form hakkında bilgi verelim:

### Canonical Form

Canonical form, bir Boolean ifadesinin tüm olası minterm veya maxterm kombinasyonlarını içerdiği bir formdur. İki tür canonical form vardır:

1. **Sum of Minterms (SOM) veya Disjunctive Normal Form (DNF):**
   - Bir Boolean ifadesi, tüm minterm'lerin toplamı olarak ifade edilir.
   - Her minterm, değişkenlerin AND işlemiyle birleştirilmiş bir kombinasyonudur.
   - Örneğin, üç değişkenli bir sistemde (x, y, z) için bir fonksiyonun canonical formu şu şekilde olabilir:
     $$ F(x, y, z) = \sum m(1, 3, 5, 7) $$
     Bu, minterm'lerin toplamı olarak yazılır:
     $$ F(x, y, z) = m_1 + m_3 + m_5 + m_7 $$

2. **Product of Maxterms (POM) veya Conjunctive Normal Form (CNF):**
   - Bir Boolean ifadesi, tüm maxterm'lerin çarpımı olarak ifade edilir.
   - Her maxterm, değişkenlerin OR işlemiyle birleştirilmiş bir kombinasyonudur.
   - Örneğin, üç değişkenli bir sistemde (x, y, z) için bir fonksiyonun canonical formu şu şekilde olabilir:
     $$ F(x, y, z) = \prod M(0, 2, 4, 6) $$
     Bu, maxterm'lerin çarpımı olarak yazılır:
     $$ F(x, y, z) = M_0 \cdot M_2 \cdot M_4 \cdot M_6 $$

### Standart Form

Standart form, bir Boolean ifadesinin daha sadeleştirilmiş ve genellikle daha kısa bir formudur. İki tür standart form vardır:

1. **Sum of Products (SOP):**
   - Boolean ifadesi, ürünlerin toplamı olarak ifade edilir.
   - Her terim, değişkenlerin AND işlemiyle birleştirilmiş bir kombinasyonudur.
   - Örneğin:
     $$ F(x, y, z) = xy + x'z + yz $$

2. **Product of Sums (POS):**
   - Boolean ifadesi, toplamların çarpımı olarak ifade edilir.
   - Her terim, değişkenlerin OR işlemiyle birleştirilmiş bir kombinasyonudur.
   - Örneğin:
     $$ F(x, y, z) = (x + y)(x' + z)(y + z) $$

Canonical form, tüm olası kombinasyonları içerdiği için daha uzun ve karmaşık olabilirken, standart form daha sade ve anlaşılırdır. Bu formlar, dijital devrelerin tasarımında ve analizinde önemli bir rol oynar.

# Gate Level-Optimizitaion

## K-Map

bu videoda çok iyi anlatiyor 

```markdown
https://www.youtube.com/watch?v=RO5alU6PpSU
```

## Don't Care Condition's

bunuda bu videoda çok iyi anlatiyor 

```markdown
https://www.youtube.com/watch?v=U92OiiAT854
```
## Quine-McCluskey yöntemi

otomatik gate level Optimizitaion tekngi mantigi için asagidaki video bakılanilir.

```markdown
https://www.youtube.com/watch?v=6dvCf6ctRLc
```


# Kombinasyonel Mantık (Combinational Logic)

Kombinasyonel mantık, çıkışların yalnızca mevcut girişlere bağlı olduğu bir dijital mantık türüdür. Kombinasyonel mantık devreleri, belirli bir giriş kombinasyonu için her zaman aynı çıkışı üretir. Bu devrelerde bellek elemanları bulunmaz, dolayısıyla önceki girişlerin veya çıkışların durumu dikkate alınmaz.

**Özellikler:**
- Çıkışlar, yalnızca mevcut girişlere bağlıdır.
- Bellek elemanları içermez.
- Gecikme süresi dışında, girişler değiştiğinde çıkışlar hemen değişir.

**Örnekler:**
- Temel mantık kapıları (AND, OR, NOT, XOR, vb.)
- Toplayıcılar (Adder)
- Kodlayıcılar (Encoder)
- Kod çözücüler (Decoder)
- Çoğullayıcılar (Multiplexer)

# Ardışıl Mantık (Sequential Logic)

Ardışıl mantık, çıkışların hem mevcut girişlere hem de önceki durumlara bağlı olduğu bir dijital mantık türüdür. Ardışıl mantık devreleri, bellek elemanları içerir ve bu sayede önceki girişlerin veya çıkışların durumunu hatırlayabilir. Bu devreler, saat sinyalleriyle senkronize edilebilir.

**Özellikler:**
- Çıkışlar, mevcut girişlere ve önceki durumlara bağlıdır.
- Bellek elemanları içerir (flip-floplar, latch'ler, vb.).
- Saat sinyalleriyle senkronize edilebilir.

**Örnekler:**
- Flip-floplar
- Latch'ler
- Sayaçlar (Counter)
- Kaydediciler (Register)
- Durum makineleri (State Machine)

Kombinasyonel mantık devreleri, basit ve hızlıdır, ancak karmaşık işlemler için yeterli değildir. Ardışıl mantık devreleri ise daha karmaşıktır ve zamanlama gereksinimleri vardır, ancak daha karmaşık işlemleri gerçekleştirebilirler.

Ardışıl ve Kombinasyonel mantık hakkındali uygulamalırı örnek dosyalrı içinde bulabilirsiniz

# Kaynakça

- Digital Design With an Introduction to the Verilog HDL FIFTH EDITION
- https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/
