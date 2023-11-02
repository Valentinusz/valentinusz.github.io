# Exponenciális eloszlás
Az exponenciális eloszlást véletlenszerű időtartamok modellezésére használják.

:::info[Definíció]
Legyen $\lambda > 0$. Az $X$ valószínűségi változó exponenciális eloszlást követ,azaz $X \sim \mathrm{Exp}(\lambda)$, ha
sűrűségfüggvénye

$$
f(x) =
\begin{cases}
\lambda \cdot e^{-\lambda x}, &\quad \text{ha } x > 0 \\
0, &\quad \text{különben} 
\end{cases}
$$
:::

<figure>
<img src="/img/probstat/Exponential_pdf.svg" alt="drawing"/>
<figcaption>Az egyenletes eloszlás sűrűségfüggvénye</figcaption>
</figure>

<figure>
<img src="/img/probstat/Exponential_cdf.svg" alt="drawing"/>
<figcaption>Az egyenletes eloszlás eloszlásfüggvénye</figcaption>
</figure>

:::info[Definíció]
Az $\mathrm{Exp}(a, b)$ exponenciális eloszlás eloszlásfüggvénye:
$$
F(x) = \begin{cases}
1 - e^{-\lambda x}, &\quad \text{ha } x > 0 \\
0, &\quad \text{különben}

\end{cases}
$$
:::

:::info[Tétel]
Ha $X \sim \mathrm{Exp}(\lambda)$, akkor

$$
\mathrm{E}(X) = \frac{1}{\lambda} \qquad \mathrm{D}^2(X) = \frac{1}{\lambda^2}
$$
:::

Ha $X$ egy időpontot jelöl, akkor $\pr(X \ge T+t \mid X \ge T) = \pr(X \ge t)$ azaz, ha egy esemény egy T időpontig nem
következett be a bekövetkezés esélye az idő múlásával sem növekszik.

Ilyen eloszlással modellezhető például a radioaktív anyagok exponenciális bomlása.
