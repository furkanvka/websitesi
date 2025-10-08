# Sistemler Arası Haberleşme Protokolleri

## USB (Universal Serial Bus)
Cihazlar arasında veri iletimi için yaygın bir protokoldür. USB protokolü, verileri **D+** ve **D-** veri sinyal hatları aracılığıyla ana bilgisayar ve harici çevresel cihazlar arasında seri olarak gönderir ve alır.

## UART (Universal Asynchronous Receiver/Transmitter)
Seri veri iletimi için kullanılır. **İki tellidir**, yani seri veriler **Tx (Verici)** ve **Rx (Alıcı)** pinleri tarafından yönetilir. UART, verileri **asenkron** iletir, yani veri gönderme ve alma sırasında hiçbir saat sinyali kullanılmaz.

## USART (Universal Synchronous Asynchronous Receiver/Transmitter)
UART'ın **senkron** versiyonudur. Senkron modda bir saat sinyali kullanarak veri iletimi gerçekleştirir.