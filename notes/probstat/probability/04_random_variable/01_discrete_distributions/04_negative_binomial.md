# Negatív binomiális eloszlás

:::danger
A negatív binomiális eloszlást
[több módon](https://en.wikipedia.org/wiki/Negative_binomial_distribution#Alternative_formulations) is szokták
értelmezni. 
:::

Azt vizsgálja, hogy valamilyen sorrendben történt $k$ sikertelen és $(r-1)$ sikeres kísérlet után, mennyi a
valószínűsége annak, hogy az $(r+k)$-adik kísérlet sikeres lesz.

Annak valószínűsége, hogy $k$ sikertelen kísérletünk van $(p-1)^{k}$ annak, hogy $(r-1)$ sikeres $p^{r-1}$. Mivel
az $r+k$-adik sikeresnek kell lennie, meg meg kell szoroznunk a valószínűségét $p$-vel.

Még meg kell határoznunk mely kísérletek voltak sikeresek. Ezt $r+k-1 \choose r-1$ módon tudjuk kiválasztani.

:::note
Természetesen a képletben kiválaszthattuk volna a sikertelen kísérletek helyeit is a binomiális együtthatók szimmetriája
miatt.
:::

:::info[Definíció]
Legyen $p$ az $A$ esemény valószínűsége, $r$ a sikeres, $k$ a sikertelen kísérletek száma. $X$-et Negatív
binomiális eloszlásúnak nevezzük, ha sűrűségfüggvénye
$$
\pr(X = k) = {r+k-1 \choose r-1} \cdot  p^{r} \cdot (1-p)^{k} \quad (k \in \mathbb{N})
$$
:::

Vegyük észre, hogy $r=1$ esetén a sűrűségfüggvény képlete: $\pr(X = k) = p \cdot (1-p)^{k} \quad (k \in \mathbb{N})$,
ami nyilvánvalóan geometriai eloszlást követ.

:::info[Tétel]
Ha $X \sim \mathrm{NB}(r, p)$, akkor

$$
\mathrm{E}(X) = \frac{r(1-p)}{p} \qquad \mathrm{D}^2(X) = \frac{r(1-p)}{p^2}
$$
:::
