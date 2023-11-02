# Egyenletes eloszlás

Az egyenletes eloszlás célja egy olyan folytonos eloszlási modell biztosítása, melyben egy bizonyos intervallumról
származó értékeket azonos valószínűséggel fordulnak elő.

:::info[Definíció]
Legyenek $a,b$ valós számok, úgy, hogy $a < b$. Az $X$ valószínűségi változó egyenletes eloszlást követ, azaz
$X \sim \mathrm{U}(a, b)$, ha sűrűségfüggvénye

$$
f(x) = 
\begin{cases}
\frac{1}{{b - a}}, &\quad x \in \left[ a,b \right] \\
0, &\quad \text{különben}
\end{cases}
$$
:::

<figure>
<img src="/img/probstat/Uniform_pdf.svg" alt="drawing"/>
<figcaption>Az egyenletes eloszlás sűrűségfüggvénye</figcaption>
</figure>

<figure>
<img src="/img/probstat/Uniform_cdf.svg" alt="drawing"/>
<figcaption>Az egyenletes eloszlás eloszlásfüggvénye</figcaption>
</figure>


::::info[Definíció]
Az $\mathrm{U}(a, b)$ egyenletes eloszlás eloszlásfüggvénye:
$$
F(x) = \begin{cases}
0, & x \le a \\
\frac{{x - a}}{{b - a}}, & a < x \le b 
\\ 1, & x \ge b
\end{cases}
$$

:::note
Az integrálás során $\int \frac{1}{b-a} \mathrm{d}x = \frac{x}{b-a}+C$ adódik, ahol $C$ értékét $-\frac{a}{b-a}$-ként
választjuk meg, hogy megfeleljünk az eloszlásfüggvény definíciójának.
:::
::::


:::info[Tétel]
Ha $X \sim \mathrm{U}(a, b)$, akkor

$$
\mathrm{E}(X) = \frac{a+b}{2} \qquad \mathrm{D}^2(X) = \frac{(b-a)^2}{12}
$$
:::
