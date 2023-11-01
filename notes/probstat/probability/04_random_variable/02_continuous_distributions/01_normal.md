# Normális eloszlás

:::info[Definíció]
Az $X$ valószínűségi változó normális eloszlást követ, azaz $X \sim \mathrm{N}(m, \sigma^2)$, ha sűrűségfüggvénye

$$
\frac{1}{{\sigma\sqrt{2\pi}}} \cdot e^{-\frac{{(x - m)^2}}{{2\sigma^2}}}
$$

ahol $\sigma$ és $m$ tetszőleges valós számok
:::

A normális eloszlás sűrűségfüggvényé a haranggörbe:

Eloszlásfüggvényére nincs általános képlet. Emiatt általában a standard normális eloszlásra szoktuk visszavezetni.

:::info[Tétel]
Ha $X \sim \mathrm{N}(m, \sigma^2)$, akkor

$$
\mathrm{E}(X) = m \qquad \mathrm{D}^2(X) = \sigma^2
$$
:::

## Standard normális eloszlás
:::info[Definíció]
Az $X \sim \mathrm{N}(0, 1)$, akkor X-et standard normális eloszlásúnak nevezzük. A sűrűségfüggvénye a következő módon
változik meg:

$$
\frac{1}{{\sqrt{2\pi}}} \cdot e^{-\frac{{x^2}}{2}}
$$
:::

Sűrűségfüggvény:

Eloszlásfüggvénye bonyolult, értékeit a gyakorlatban táblázatból szoktuk kiolvasni.

:::info[Tétel]
Ha $X \sim \mathrm{N}(0, 1)$, akkor

$$
\mathrm{E}(X) = 0 \qquad \mathrm{D}^2(X) = 1
$$
:::

### Standardizálás
Bármely normális eloszlást követő valószínűségi változót vissza tudjuk vezetni a standard normális eloszlásra.

:::info[Tétel]
Legyen $X \sim \mathrm{N}(m, \sigma^2)$, ekkor
$$
\frac{N-m}{\sigma} \sim \mathrm{N}(0,1)
$$
:::


:::tip[PÉLDA]
Tegyük fel, hogy egy populációban az intelligenciahányados normális eloszlású $110$ várható értékkel és $10$
szórással. Mi a valószínűsége, hogy egy véletlenszerűen kiválasztott ember IQ-ja $120$ feletti?

Jelölje $X$ az IQ változót. Tudjuk, hogy $X$ normális eloszlást követ, a megadott paraméterekkel, azaz
$X \sim N(110, 10^2)$. Ekkor

$$
\begin{align*}
\mathrm{P}(X > 120)
&= \mathrm{P}\left( X - 110 > 10 \right) \\
&= \mathrm{P}\left( \frac{X - 110}{10} > 1 \right) \\
&= 1 - \Phi(1)
\end{align*}
$$
:::
