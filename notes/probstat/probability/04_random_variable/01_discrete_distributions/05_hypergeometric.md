# Hipergeometriai eloszlás

Legyen $N \in \mathbb{N}$ elemünk, melyből $K \in \lbrace 0,1, \dots, N \rbrace$ elem különleges. Az $N$ elemből visszatevés nélkül $n$ elemet választunk. Ekkor a
hipergeometriai eloszlás azt vizsgálja, hogy mennyi a valószínűsége annak, hogy éppen $k$ különleges elemet választunk
ki.

A képlet előállításához a klasszikus "kedvező per összes" képletet fogjuk használni.

$n$ elemet $N$ elemből összesen $N \choose n $ módon tudunk kiválasztani. $K$ különleges elemből pontosan $k$ elemet
$K \choose k$ módon. Végül a maradék nem különleges elem $N-K \choose n-k$ módon válaszható ki. 

:::info[Definíció]
Legyen $N \in \mathbb{N}$, $K \in \lbrace 0,1, \dots, N \rbrace$ és legyen $n \in \lbrace 0,1, \dots, K \rbrace$ úgy,
hogy $n \le N-K$ teljesül. $X$-et hipergeometriai eloszlásúnak nevezzük, ha sűrűségfüggvénye
$$
\pr(X = k) = \frac{{K \choose k}{N-K \choose n-k}}{N \choose n} \quad (k=0,1,\dots,n)
$$
:::

A következő ábrán pirossal látható az ötös lottó eloszlása $X \sim \mathrm{HipGeo}(90, 5, 5)$.

Zöld színnel látható a következő probléma eloszlása:

10 dobozunk van melyek közül 5 tartalmaz golyót. Ha kiválasztunk 5 dobozt, mennyi a valószínűsége, hogy $k=0,1,2,3,4,5$
golyót tartalmazó dobozt választunk ki. $Y \sim \mathrm{HipGeo}(10, 5, 5)$.

<img src="/img/probstat/HyperGeometric.svg" alt="drawing"/>

:::note
Bár az ábrán hasonló nagyságrendűnek tűnhet, a lottó ötös valószínűsége $0,000000023$, míg 5 golyós doboz
kiválasztásának valószínűsége $0,004$.
:::

:::info[Tétel]
Ha $X \sim \mathrm{HipGeo}(N, K, n)$, akkor

$$
\mathrm{E}(X) = n \cdot \frac{K}{N} \qquad \mathrm{D}^2(X) = n \cdot \frac{K}{N} \cdot \frac{N-K}{N} \cdot \frac{N-n}{N-1}
$$
:::
