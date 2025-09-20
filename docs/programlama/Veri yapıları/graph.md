---
id: graphs
title: Graf yapıları
---

# Graf Nedir?

Graf, köşelerden (düğümlerden) ve bu köşeleri birbirine bağlayan kenarlardan oluşan, doğrusal olmayan bir veri yapısıdır. Grafı, bir harita gibi düşünebilirsiniz: Şehirler köşeleri, bu şehirleri birbirine bağlayan yollar ise kenarları temsil eder. Graflar, farklı varlıklar arasındaki ilişkileri ve etkileşimleri modellemek için son derece esnek ve güçlü bir araçtır.

Kenarların bir yönü olup olmamasına göre grafları ikiye ayırırız:

* **Yönsüz Graf (Undirected Graph):** Kenarların belirli bir yönü yoktur. Örneğin, A şehrinden B şehrine giden bir yol varsa, aynı yol B'den A'ya gitmek için de kullanılabilir. İki şehir arasındaki ilişki çift yönlüdür.
* **Yönlü Graf (Directed Graph):** Kenarların bir yönü vardır. Örneğin, A'dan B'ye giden bir tek yönlü yol varsa, B'den A'ya aynı yolu kullanarak geri dönemezsiniz. Bu, ilişkilerin tek yönlü olduğu durumları modellemek için kullanılır.

### Graflar Nasıl Gösterilir?

Bir grafı bellekte temsil etmek için iki temel yöntem kullanılır:

#### 1. Komşuluk Matrisi (Adjacency Matrix)

Bu yöntemde, bir graf iki boyutlu bir matris olarak temsil edilir. Matristeki satırlar ve sütunlar grafın köşelerini temsil eder. Matristeki $M_{ij}$ değeri, $i$ köşesinden $j$ köşesine bir kenar olup olmadığını gösterir.

* Kenar varsa, $M_{ij} = 1$ (veya kenarın ağırlığı).
* Kenar yoksa, $M_{ij} = 0$.

Bu yöntem, grafın yoğun (çok sayıda kenarı olan) olduğu durumlarda etkili olabilir, ancak seyrek graflarda (az sayıda kenarı olan) hafızayı verimsiz kullanabilir.

#### 2. Komşuluk Listesi (Adjacency List)

Bu yaklaşım, her köşe için komşu köşelerin bir listesini tutar. Bu listeler genellikle bağlı listeler veya dinamik diziler (vektörler) kullanılarak oluşturulur.

Örneğin, 1 numaralı köşenin 2 ve 3 numaralı köşelerle bağlantısı varsa, 1 numaralı köşeye ait listede 2 ve 3 değerleri yer alır. Bu yöntem, özellikle seyrek graflar için çok daha hafıza dostudur, çünkü sadece var olan kenarları depolar.

### C++ ile kodlama uygulaması 

```C++
// Adjacency Matrix
#include <iostream>
#include <vector>

class Graph {
private:
    int V; // Köşe sayısı
    std::vector<std::vector<int>> adj; // Komşuluk listesi

public:
    Graph(int v) {
        this->V = v;
        adj.resize(v);
    }

    void kenarekle(int u, int v) {
        adj[u].push_back(v);
    }

    void printGraph() {
        for (int i = 0; i < V; ++i) {
            std::cout << "Köşe " << i << ":";
            for (int neighbor : adj[i]) {
                std::cout << " -> " << neighbor;
            }
            std::cout << std::endl;
        }
    }
};

int main() {
    Graph g(5);

    g.kenarekle(0, 1);
    g.kenarekle(0, 4);

    g.kenarekle(1, 2);
    g.kenarekle(1, 3);
    g.kenarekle(1, 4);
    
    g.kenarekle(2, 3);
    
    g.kenarekle(3, 4);

    g.printGraph();

    return 0;
}
```