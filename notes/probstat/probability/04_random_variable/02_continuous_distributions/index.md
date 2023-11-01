---
sidebar_position: 2
slug: "./"
---

# Abszolút folytonos eloszlások

Egy valószínűségi változó **folytonos**, ha lehetséges értékeinek halmaza nem megszámlálható.

## Sűrűségfüggvény
A végtelen sok tag miatt a diszkrét eloszlásoknál is használt összeadás kivitelezhetetlenné válik, ezért valami más
megfeleltetést kell találnunk, amit sűrűségfüggvénynek fogunk nevezni.

::::info[Definíció]
Az $f$ integrálható, nemnegatív értékű a valós számok halmazán értelmezett függvényt **sűrűségfüggvénynek** nevezzük, ha

$$
\int \limits^{+\infty}_{-\infty}{f(x) \, \mathrm{d}x} = 1
$$

:::note
Ez pontosan azt a feltételt fogalmazza meg, hogy a függvény görbe alatti területe 1. Ez megfelel az eddig ismert
feltételnek, miszerint az események valószínűségeinek összege 1.
:::
:::danger
A sűrűségfüggvény nem ekvivalens súlyfüggvénnyel. Sőt, önmagában nem is képes a kérdéses valószínűség megadására, csupán
segédfüggvénykényként használjuk.
:::
::::

## Eloszlásfüggvény
A sűrűségfüggvény önmagában nem képes valószínűségek magadására, azonban egy adott $k$ érték esetén a sűrűségfüggvény
görbe alatti területe, az $(-\infty, k)$ intervallumon pontosan annak a valószínűségét adja meg, hogy $X$ értéke kisebb,
mint $k$.

::::info[Definíció]
Legyen $f$ egy sűrűségfüggvény, ekkor az $ F(t)=P(X \le t)$ függvényt a következő módon definiáljuk:

$$
\mathrm{F}(t) = \int \limits^{t}_{-\infty}{f(x) \, \mathrm{d}x}
$$

:::danger
Mivel az eloszlásfüggvény értelmezési tartománya végtelen halmaz, ezért $P(X = t)$ értéke szükségszerűen $0$.
:::
::::

Az eloszlásfüggvény tulajdonságai a következők:
- $0 \le \mathrm{F}(t) \le 1$
- $\mathrm{F}(t)$ monoton növekvő 
- $\mathrm{F}(t)$ határértéke a plusz végtelenben $1$ és a mínusz végtelenben pedig $0$

:::tip[PÉLDA]
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

## Várható érték
Egy folytonos valószínűségi változó várható értéke a következő:

$$
\mathrm{E}(x) = \int \limits^{+\infty}_{-\infty}{x \cdot f(x) \, \mathrm{d}x}
$$

:::tip
Sokszor az eloszlást csak egy rögzített intervallumon nézzük. Ekkor az integrál határai lecsökkenthetők az 
intervallumra.
:::

## Nevezetes folytonos eloszlások

| Név (paraméterek)                     | $k \in$             | Sűrűségfüggvény ($f$)                                                                                           | Eloszlásfüggvény ($F$)                                                                               | $\mathrm{E}(X)$     | $\mathrm{D}^2(X)$        |
|---------------------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|---------------------|--------------------------|
| Standard Normális $\mathrm{N}(0, 1)$  | $(-\infty, \infty)$ | $\frac{1}{{\sqrt{2\pi}}} e^{-\frac{{x^2}}{{2}}}$                                                                | $\Phi(x)$                                                                                            | 0                   | 1                        |
| Normális $\mathrm{N}(m, \sigma^2)$    | $(-\infty, \infty)$ | $\frac{1}{{\sigma\sqrt{2\pi}}} e^{-\frac{{(x - m)^2}}{{2\sigma^2}}}$                                            | visszavezethető $\Phi(x)$-re                                                                         | $m$                 | $\sigma^2$               |
| Egyenletes $\mathrm{U}[a, b]$         | $[a, b]$            | $\begin{cases} \frac{1}{{b - a}}, &\quad x \in \left[ a,b \right] \\ 0, &\quad \text{különben} \end{cases}$     | $\begin{cases} 0, & x \le a \\ \frac{{x - a}}{{b - a}} & a < x \le b  \\ 1, & x \ge b \end{cases}$   | $\frac{{a + b}}{2}$ | $\frac{{(b - a)^2}}{12}$ |
| Exponenciális $\mathrm{Exp}(\lambda)$ | $(0, \infty)$       | $ \begin{cases} \lambda \cdot e^{-\lambda x}, &\quad \text{ha } x > 0 \\ 0, &\quad \text{különben} \end{cases}$ | $\begin{cases} 1 - e^{-\lambda x}, &\quad \text{ha } x > 0 \\ 0, &\quad \text{különben} \end{cases}$ | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$    |



:::note
$\Phi(x)$ egy bonyolult [függvény](https://en.wikipedia.org/wiki/Normal_distribution#Cumulative_distribution_functions),
ezért a gyakorlatban értékeit [táblázatból](https://prokajvilmos.web.elte.hu/tablazat.pdf) szoktuk kiolvasni.
:::
