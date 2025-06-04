---
id: 2
title: Sinir_aglarinin_gelişimi
---


# Yapay Sinir Ağlarının Gelişimi

Yapay sinir ağları, zaman içinde daha derin ve karmaşık hale gelerek birçok alanda çığır açmıştır. Aşağıda, temel modellerin gelişim süreci özetlenmiştir.

## Perceptron
1958’de Rosenblatt tarafından önerilen perceptron, tek bir katman ve birkaç düğümden (genellikle 1-100) oluşur. Yalnızca doğrusal ayrılabilir problemleri çözebilir ve aktivasyon fonksiyonu olarak adım fonksiyonunu kullanır.

## Çok Katmanlı Algılayıcı (MLP)
MLP, birden fazla gizli katman içeren tam bağlantılı sinir ağıdır. 1980’lerde popülerleşmiş, genellikle 1-3 gizli katman (her biri 100-1000 nöron) kullanılmıştır. Geri yayılım algoritması ile eğitilir ve aktivasyon olarak sigmoid veya ReLU fonksiyonları kullanılır.

## LeNet-5
1998’de Yann LeCun tarafından önerilen LeNet-5, 7 katmanlı bir evrişimli sinir ağıdır. 32×32 giriş görüntüleri üzerinde çalışır ve iki evrişimli katman (6 ve 16 filtre), iki alt örnekleme (subsampling) katmanı ve iki tam bağlantılı katman içerir. MNIST veri kümesi üzerinde yüksek doğruluk sağlamıştır.

## AlexNet
2012’de Alex Krizhevsky tarafından geliştirilen AlexNet, 8 katmandan oluşur ve ImageNet veri kümesi üzerinde devrim yaratmıştır. 60 milyon parametre ve 650 bin nöron içeren bu model, 5 evrişimli katman ve 3 tam bağlantılı katmandan oluşur. ReLU aktivasyon fonksiyonunu kullanarak derin ağların eğitimini kolaylaştırmıştır.

## Modern Modeller ve ChatGPT
ChatGPT ve benzeri büyük dil modelleri, transformer mimarisi ile çalışır. GPT-3, 175 milyar parametreye sahip olup, yüzlerce katmandan oluşur. Özellikle doğal dil işleme (NLP) alanında devrim niteliğindedir.

