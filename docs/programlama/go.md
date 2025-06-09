---
id: go
title: go
---

# go notları

### Exported names  

Go'da bir şey dışardan import edildiği zaman büyük harfle başlamalıdır.bu satede extern , static , private gibi type definator gerekliligi ortadan kaldırılmaktadır.

```go 
fmt.Println(math.pi) //pi küçük hata vercek
fmt.Println(math.Pi) //hata vermeyecek
```
Kendi yazdıgımız paketlerdede buna dikkat etmemiz lazım

### Fonksiyonlar

go'da fonksiyonlar c syntax tersi gibi typelar sonra yazılıyor.birde bir iki kendine has güzelligi var mesela çoklu değişken döndüre biliyor.Örnek verelim:

```go 
func swap(x, y string) (string, string) {
	return y, x
}
```

döndürülecek degerler isimlendirilip sonda sadece return olark kullanalıbalir.

```go 
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}
```

### Degişkenler

