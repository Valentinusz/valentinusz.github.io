---
sidebar_position: 1
slug: "./"
---

# Diszkrét eloszlások

Egy valószínűségi változó **diszkrét**, ha értékkészlete megszámlálható.

## Súlyfüggvény
:::info[Definíció]
Az $X$ valószínűsége változó súlyfüggvényének nevezzük a $\pr(X = k)$ függvényt, mely az $X$ értékkészletének elemeihez
azok valószínűségét rendeli.
:::

Nyilvánvalóan ezt a függvényt, úgy kell definiálnunk, hogy betartsa a valószínűségi axiómákat. Emiatt
$$
\sum_{k=1}^{\infty}{x_k \cdot p_k} = 1
$$

:::tip[Példa]
A cinkelt kocka ($k$ értékei a kockán szereplő számok) eloszlása:
$$
\begin{align*}
\pr(X=1)&=\frac{1}{21} \quad \pr(X=2)=\frac{2}{21} \quad  \pr(X=3)=\frac{3}{21}  \\
\pr(X=4)&=\frac{4}{21} \quad  \pr(X=5)=\frac{5}{21} \quad   \pr(X=6)=\frac{6}{21}
\end{align*}
$$
:::

## Várható érték

:::info[Definíció]
Legyen $X$ egy diszkrét valószínűségi változó, mely az $x_1,x_2,\dots$ értékeket, $p_1,p_2,\dots$ valószínűséggel vesz
fel, ekkor $X$ várható értékének nevezzük a

$$
\E(X) = \sum_{k=1}^{\infty}{x_k \cdot p_k}
$$

végtelen sor összegét (amennyiben a sor abszolút konvergens).
:::



Sok esetben ez csak véges sok tag összeadását jelenti. Például kockadobás esetén:

$$

\sum_{k=1}^{6}{x_k \cdot \frac{1}{6}} = \frac{1}{6} + \frac{2}{6} + \dots + \frac{5}{6} + 1 = 3,5

$$

:::note
Ez pont a dobókocka számainak átlaga.
:::

Tehát a várható érték a lehetséges értékek azok valószínűségével súlyozott összege.

## Nevezetes diszkrét eloszlások
A legtöbb diszkrét valószínűségi változóval modellezhető jelenség valamilyen nevezetes eloszlást követ.

| Eloszlás (paraméter)                       | $k \in$        | $\mathrm{P}(X = k)$                                    | $E(X)$             | $D^2X$                                                          |
|--------------------------------------------|----------------|--------------------------------------------------------|--------------------|-----------------------------------------------------------------|
| Binomiális $\mathrm{B}(n,p)$               | $\mathbb{N}$   | ${n \choose k} p^k(1-p)^{n-k}$                         | $np$               | $n^2p^2$                                                        |
| Poisson $\mathrm{Poi}(\lambda)$            | $\mathbb{N}$   | $\frac{\lambda^k}{k!} \cdot e^{-\lambda}$              | $\lambda$          | $\lambda^2$                                                     |
| Geometriai $\mathrm{Geo}(p)$               | $\mathbb{N}^+$ | $p^{k-1}(1-p)$                                         | $\frac{1}{p}$      | $\frac{1-p}{p^2}$                                               |
| Negatív binomiális $\mathrm{NB}(r, p)$     | $\mathbb{N}$   | ${k+r-1 \choose k} p^r (1-p)^k$                        | $\frac{r(1-p)}{p}$ | $\frac{r(1-p)}{p^2}$                                            |
| Hipergeometriai $\mathrm{HipGeo}(N, K, n)$ | $\mathbb{N}$   | $\frac{{K \choose k}{N-K \choose n-k}}{{N \choose n}}$ | $n \frac{K}{N}$    | $n \cdot \frac{K}{N} \cdot \frac{N-K}{N} \cdot \frac{N-n}{N-1}$ |


