# Geometriai-eloszlás

Azt vizsgálja, hogy mennyi a valószínűsége annak, hogy $(k-1)$ sikeres kísérlet után sikertelen kísérlet következik.

Annak valószínűsége, hogy $k-1$ sikeres kísérletünk van $p^{k-1}$ annak, hogy az utolsó kísérlet sikertelen pedig
$(1-p)$.

:::info[Definíció]
Legyen $p$ az $A$ esemény valószínűsége, ekkor $X$-et Geometriai eloszlásúnak nevezzük, ha sűrűségfüggvénye
$$
\pr(X = k) = p^{k-1} \cdot (1-p) \quad (k \in \mathbb{N^+})
$$
:::

A következő ábra az érmedobás (zöld) $X \sim \mathrm{Geo}(\frac{1}{2})$ és a 6-os dobása kockával (piros)
$Y \sim \mathrm{Geo}(\frac{1}{6})$ valószínűségi változók sűrűségfüggvényét ábrázolja.
<img src="/img/probstat/Geometric.svg" alt="drawing" width="400"/>

:::info[Tétel]
Ha $X \sim \mathrm{Geo}(p)$, akkor

$$
\mathrm{E}(X) = \frac{1}{p} \qquad \mathrm{D}^2(X) = \frac{1-p}{p^2}
$$
:::
