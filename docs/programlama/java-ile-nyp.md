---
id: Java
title: Java ile nesneye yönelik programlama
---

## 1. Temel Giriş bilgileri

### 1.1 Java ve Opp Nedir Bunlar?

ilk olarak nesneye yönelik proglamlama nedir? basitçe kod yazarken yaklaşım olarak kodu tekrar kullanılablir bir hiyaraşiye sokulabilir halde parçaçıklar (nesneler) halinde yazılması yaklaşıma ad olarak verilir.Sürdüreleblir ve tekrar kullanalabilirlik açısından Çogu projede sıklıkla karşımıza çıkmaktadır.

Peki Java ne , java ise bu yaklaşımı temele alarak geliştirilmiş popüler bir yazılım dilidir.Çoklu plotform destegi hızı ile günümüzdeki çogu uygulamın altında varlıgını sürdürmektedir.

Nesneye yönelik programlamayı icad eden alan keyden

https://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en

### 1.2 Java Compile Süreci

Java bildigimiz diller gibi derlenmez direk spesifik olarka cihaza değil java standartalrna göre makine koduna çevrilir.bu sayede farklı cihazlar üzerinde Java Virtual Machine (jvm) ortamında çalıştıralbabilir.Bu java’nın en önemli özelliği Write Once, Run Anywhere yaklaşım gerçeklemesidir.Bu şüece yakından bakalım:

1. **Kaynak Kod (Source Code)** : 
   .java uzantılı dosyalarda yazılır.Metin tabanlı kullancı kodu

2. **Derleme (Compile)** : 
   Java derleyicisi (javac) kaynak kodu alır ve **Java Bytecode** adı verilen ara koda çevirir.Çıkan dosya .class uzantılıdır.

   ```bash
   javac [.java dosyasıın uzantısı]
   ```

3. **Çalıştırma (Run)** : 
   JVM bu bytecode dosyasını çalıştırır.JVM her işletim sisteminde farklıdır, bu sayede aynı .class dosyası işletim sistemi gereklilikleri ile donatılarak bilgisayarda çalıştırılır.

   ```bash
   java  [.class dosyasının adı]
   ```

### 1.3 Java temel syntax yapısı

Dosyalarımızı nasıl compile edicegimizi ögrendik peki dosyalrmızın içerigi nasıl hadi bakalım:

```java
public class hello { //program adıyla hello kısmı aynı olması gerekiyor
    public static void main(String[] args) {
        //burası progarmın 
        System.out.println("Merhaba Dünya!"); // temel printf
    }
}
```


## 2. Class ve Object (Sınıf ve Nesne)

### 2.1 Sınıf Nedir?

### 2.2 Nesne Nedir?

### 2.3 Sınıf Tanımlama

### 2.4 Nesne Oluşturma (new)

### 2.5 Nesneye Alan Atama

### 2.6 Nesne Üzerinden Metot Çağırma

## 3. Constructor (Yapıcı)

### 3.1 Default Constructor (Parametresiz)

### 3.2 Parametreli Constructor

### 3.3 this Anahtar Kelimesi

### 3.4 Constructor Overload (Birden Fazla Constructor)

## 4. Encapsulation (Kapsülleme)

### 4.1 Erişim Belirleyiciler (Access Modifiers)

### 4.1.1 public

### 4.1.2 private

### 4.1.3 protected

### 4.1.4 (default)

### 4.2 Getter / Setter Metotları

### 4.3 private Alanların Güvenliği

### 4.4 Setter İçine Kontrol Ekleme (ör: yaş < 0 olamaz)

### 4.5 Neden Kapsülleme Kullanılır?

## 5. Inheritance (Kalıtım)

### 5.1 extends ile Miras Alma

### 5.2 Alt Sınıfta Üst Sınıf Özelliklerini Kullanma

### 5.3 super Anahtar Kelimesi

### 5.4 Alt Sınıfta Ek Metot Yazma

### 5.5 Çok Seviyeli Kalıtım (Hayvan → Kedi → VanKedisi)

## 6. Polymorphism (Çok Biçimlilik)

### 6.1 Method Overloading (Metot Aşırı Yükleme)

### 6.2 Method Overriding (Metot Ezme)

### 6.3 @Override Kullanımı

### 6.4 Dynamic Polymorphism Örneği (Üst Sınıf Referansı, Alt Sınıf Nesnesi)

## 7. Abstraction (Soyutlama)

### 7.1 Abstract Class

### 7.1.1 abstract Sınıf/Metot Tanımlama

### 7.1.2 Gövdesiz Metot → Alt Sınıfta Zorunlu

### 7.1.3 Gövdeli + Gövdesiz Metot Beraber

### 7.1.4 abstract Sınıftan Nesne Oluşturulamaz

## 7.2 Interface

### 7.2.1 interface Tanımlama

### 7.2.2 implements ile Uygulama

### 7.2.3 Çoklu Interface Implementasyonu

### 7.2.4 Default ve Static Metotlar (Java 8 Sonrası)

## 7.3 Abstract Class vs Interface

### 7.3.1 Çoklu Kalıtım → Sadece Interface

### 7.3.2 Constructor → Sadece Abstract Class

### 7.3.3 Metot Türleri → Interface (public abstract), Abstract Class (Farklı Türler)
