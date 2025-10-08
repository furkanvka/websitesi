# Sistem İçi Haberleşme Protokolleri

## I2C (Inter-Integrated Circuit)
Philips Semiconductors tarafından geliştirilmiş bir **seri haberleşme protokolüdür**. Bu protokolün temel amacı, çevresel yongaları mikrodenetleyici ile bağlamayı kolaylaştırmaktır.

- **Master-Slave** haberleşme protokolüdür.
- Her Slave’e benzersiz bir adres verilir.
- Master, hedef Slave adresini **R/W (Oku/Yaz)** bayrağıyla birlikte gönderir.
- İlgili Slave aktif moda geçerek haberleşmeye başlar.

## SPI (Serial Peripheral Interface) Protokolü
I2C gibi **SPI** da bir **master-slave** protokolüdür.

- Master önce saat sinyalini belirli bir frekansta yapılandırır.
- **SS (Slave Select) hattı** kullanılarak uygun Slave seçilir.
- SS hattı, normalde **yüksek** tutulur, iletişim kurarken **düşük** seviyeye çekilir.

## CAN (Controller Area Network) Protokolü
CAN, araç içi iletişim için **Robert Bosch** tarafından geliştirilmiş **seri haberleşme protokolüdür**.

- Veri iletimi için **iki kablo** kullanılır: **CAN Yüksek (H+)** ve **CAN Düşük (H-)**.
- Çoklu cihazlar arasında **güvenilir ve hızlı iletişim** sağlar.
- Otomotiv, endüstriyel ve tıbbi uygulamalarda yaygın olarak kullanılır.

