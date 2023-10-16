---
sidebar_position: 2
---

# Abszolút folytonos eloszlások

Egy valószínűségi változó **folytonos**, ha lehetséges értékeinek halmaza nem megszámlálható
(jellemzően a valós számoknak, ami egy megszámlálhatatlanul halmaz, egy megszámlálhatatlan részhalmaza).

A végtelen sok tag miatt a diszkrét eloszlásoknál is használt összeadás kivitelezhetetlenné válik, ezért valami más
megfeleltetést kell találnunk.

Ez lesz a sűrűségfüggvény:

Az $f$ integrálható, nemnegatív értékű a valós számok halmazán értelmezett függvényt **sűrűségfüggvénynek** nevezzük, ha


$$

\int \limits^{+\infty}_{-\infty}{f(x) \, \mathrm{d}x} = 1

$$

:::note
Ez pontosan azt a feltételt fogalmazza meg, hogy a függvény görbe alatti területe 1. Ez megfelel az eddig ismert
feltételnek, miszerint az események valószínűségeinek összege 1.
:::
Ez alapján, a következő módon definiáljuk az $\mathrm{F}(t)$ **eloszlásfüggvényt**:

$$

\mathrm{F}(t) = \int \limits^{t}_{-\infty}{f(x) \, \mathrm{d}x}

$$

:::info FONTOS
$\mathrm{F}(t)$ azt jelenti, hogy $\mathrm{P}(X \le t)$, azaz annak a valószínűségét, hogy a valószínűségi változó
értéke nem nagyobb $t$-nél.
:::

Így tehát az összegzés műveletét az integrálás művelete váltja fel.

Az eloszlásfüggvény tulajdonságai:
- $0 \le \mathrm{F}(t) \le 1$
- $\mathrm{F}(t)$ monoton növekvő 
- $\mathrm{F}(t)$ határértéke a plusz végtelenben $1$ és a mínusz végtelenben pedig $0$


Egy folytonos valószínűségi változó várható értéke a következő:

$$

\mathrm{E}(x) = \int \limits^{+\infty}_{-\infty}{x \cdot f(x) \, \mathrm{d}x}

$$

:::tip Példa
Legyen $X$ egy folytonos valószínűségi változó a $[0, c]$ intervallumon, sűrűségfüggvénye:

$$
f(x) =
\begin{cases}
\frac{x^2}{9}, &\quad \text{ha } 0 \le x < c  \\
0, &\quad \text{különben}
\end{cases}
$$

Határozzuk meg $c$-t és $X$ eloszlásfüggvényét!

A definíció miatt tudjuk, hogy $f(x)$ határozott integrálja a $[0, c]$ intervallumon 1. Azaz

$$

1 = \int\limits^{c}_{0}{\frac{x^2}{9}} \mathrm{d}x = \left[\frac{x^3}{27}\right]_0^c = \frac{c^3}{27} - \frac{0}{27}

$$

Tehát a következő egyenletet kell megoldani:

$$
\begin{align*}
1 &= \frac{c^3}{27} \quad \backslash \cdot 27, \sqrt[3]{\,} \\
c &= 3
\end{align*}
$$

Már csak egy olyan függvényt kell konstruálnunk, mely megfelel az eloszlásfüggvény tulajdonságainak. Az előbb
meghatározott, $\frac{x^3}{27}$ integrál monoton növekvő, illetve értékkészlete is a $[0, 1]$ intervallumba esik.

A határértékekre vonatkozó követelményeket pedig úgy fogjuk biztosítani, hogy a függvény $0$-nál kisebb értékek esetén 
nullát $c$-nél nagyobb értékek esetén pedig $1$-et fog felvenni. Összegezve az eloszlásfüggvény a következő
lesz:

$$
F(x) = \begin{cases}
0, &\quad x \le 0 \\
\frac{1}{27}x^3, &\quad 0 \le x < 3  \\
1, &\quad x > 3
\end{cases}
$$

:::



## Nevezetes folytonos eloszlások

| Eloszlás                                    | Értékek             | Eloszlásfüggvény (F)                                                                               | Sűrűségfüggvény ($f$)                                                | $\mathrm{E}(X)$     | $\mathrm{D}^2(X)$        |
|---------------------------------------------|---------------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|---------------------|--------------------------|
| Standard Normális $\mathrm{N}(m, \sigma^2)$ | $(-\infty, \infty)$ | $\Phi(x)$[^1]                                                                                      | $\frac{1}{{\sqrt{2\pi}}} e^{-\frac{{x^2}}{{2}}}$                     | 0                   | 1                        |
| Normális $\mathrm{N}(m, \sigma^2)$          | $(-\infty, \infty)$ | visszavezethető $\Phi(x)$-re                                                                       | $\frac{1}{{\sigma\sqrt{2\pi}}} e^{-\frac{{(x - m)^2}}{{2\sigma^2}}}$ | $m$                 | $\sigma^2$               |
| Egyenletes $\mathrm{E}[a, b]$               | $[a, b]$            | $\begin{cases} 0, & x \le a \\ \frac{{x - a}}{{b - a}} & a < x \le b  \\ 1, & x \ge b \end{cases}$ | $\frac{1}{{b - a}}$                                                  | $\frac{{a + b}}{2}$ | $\frac{{(b - a)^2}}{12}$ |
| Exponenciális $\mathrm{E}(\lambda)$         | $(0, \infty)$       | $1 - e^{-\lambda x}$                                                                               | $\lambda e^{-\lambda x}$                                             | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$    |

[//]: # (| Gamma $\Gamma&#40;\alpha, \lambda&#41;$             | $&#40;0, \infty&#41;$       | nincs zárt elemi képlet   | $\frac{1}{\alpha^k \Gamma&#40;k&#41;} x^{k-1} e^{-x/\theta}$                 | $k\theta$         | $k\theta^2$              |)

[^1] $\Phi(x)$ egy bonyolult
[függvény](https://en.wikipedia.org/wiki/Normal_distribution#Cumulative_distribution_functions), ezért a gyakorlatban
értékeit [táblázatból](https://prokajvilmos.web.elte.hu/tablazat.pdf) szoktuk kiolvasni


### Normális eloszlás
Másnéven Gauss-eloszlás, a természetben leggyakrabban előforduló eloszlás. Két paramétere van a várható érték
$m$ és a szórás $\sigma$. Sűrűségfüggvényének képe a haranggörbe.

### Standard normális eloszlás
A normális eloszlás speciális esete, ahol a várható érték 0 és a szórásnégyzet 1.

#### Standardizálás
Bármely normális eloszlást követő valószínűségi változót vissza tudunk vezetni standard normális eloszlásra. Legyen 
$X \sim \mathrm{N}(m, \sigma^2)$, ekkor $\frac{N-m}{\sigma} \sim \mathrm{N}(0,1)$.

:::tip Példa
Tegyük fel, hogy egy populációban az intelligenciahányados normális eloszlású $110$ várható értékkel és $10$
szórással. Mi a valószínűsége, hogy egy véletlenszerűen kiválasztott ember IQ-ja $120$ feletti?

Jelölje $X$ az IQ változót. Tudjuk, hogy $X$ normális eloszlást követ, a megadott paraméterekkel, azaz
$X \sim N(110, 10^2)$. Ekkor

$$
\mathrm{P}(X > 120) = \mathrm{P}\left( \frac{X - 110}{10} > 1 \right) = 1 - \Phi(1)
$$

Tehát egészen egyszerűen annyi átalakítást végeztünk, hogy
$$
\begin{align*}
X &> 120 &\backslash -110 \\
X - 110 &> 10 &\backslash \colon 10 \\
\frac{X - 110}{10} &> 1 &
\end{align*}
$$

:::
### Egyenletes eloszlás
Az egyenletes eloszlás 