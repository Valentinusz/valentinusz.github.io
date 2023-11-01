---
sidebar_position: 1
---

# Diszkrét eloszlások

Egy valószínűségi változó **diszkrét**, ha értékkészlete megszámlálható.

:::important[Fontos]
Legyen $X$ 
A lehetséges értékek valószínűségeinek összege 1.
:::

Legyen $X$ egy diszkrét valószínűségi változó, mely az $x_1,x_2,\dots$ értékeket, $p_1,p_2,\dots$ valószínűséggel vesz
fel, ekkor $X$ várható értékének nevezzük a

$$

\mathrm{E}(X) = \sum_{k=1}^{\infty}{x_k \cdot p_k}

$$

végtelen sor összegét (amennyiben a sor konvergens).

Sok esetben ez csak véges sok tag összeadását jelenti. Például kockadobás esetén:

$$

\sum_{k=1}^{6}{x_k \cdot \frac{1}{6}} = \frac{1}{6} + \frac{2}{6} + \dots + \frac{5}{6} + 1 = 3,5

$$

:::note
Ez pont a dobókocka számainak átlaga.
:::

Tehát a várható érték a lehetséges értékek azok valószínűségével súlyozott összege.

## Nevezetes diszkrét eloszlások
A legtöbb diszkrét valószínűségi változó valamilyen nevezetes eloszlást követ.

| Eloszlás                    | Értékek (k)     | $\mathrm{P}(X = k)$                                    | $E(X)$             | $D^2X$               |
|-----------------------------|-----------------|--------------------------------------------------------|--------------------|----------------------|
| **Binomiális**              | 0, 1, 2, ..., n | ${n \choose k} p^k(1-p)^{n-k}$                         | $np$               | $n^2p^2$             |
| **Poisson**                 | 0, 1, 2, ...    | $\frac{\lambda^k}{k!} \cdot e^{-\lambda}$              | $\lambda$          | $\lambda^2$          |
| **Geometriai** $(p)$        | 1, 2, 3, ...    | $(1-p)^{k-1}p$                                         | $\frac{1}{p}$      | $\frac{1-p}{p^2}$    |
| Negatív binomiális $(n, p)$ | 0, 1, 2, ...    | $\binom{k+r-1}{k} p^r (1-p)^k$                         | $\frac{r(1-p)}{p}$ | $\frac{r(1-p)}{p^2}$ |
| Hipergeometriai $(N, m, n)$ | 0, 1, 2, ..., n | $\frac{{K \choose k}{N-K \choose n-k}}{{N \choose n}}$ | $\frac{nk}{N}$     | - (Complex formula)  |


