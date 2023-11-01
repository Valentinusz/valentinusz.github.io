# Poisson-eloszlás

Az eloszlás egy rögzített $\lambda$ időtartam alatt, vagy felszínen megfigyelhető események számának valószínűségét írja
le, ha az események egymástól függetlenül következnek be, állandó ráta mellett. Például, hogy mennyi a valószínűsége
annak, hogy 1 óra alatt 10 telefonhívás érkezik.

Ilyen például az egy térkőre hulló esőcseppek száma, vagy a porosz hadseregben a lórúgás okozta halálesetek száma
([Bortkiewicz](https://en.wikipedia.org/wiki/Ladislaus_Bortkiewicz),1898).

Ha annak a valószínűsége, hogy pontosan $k$ vizsgált esemény következik be, csak a vizsgált intervallum hosszától függ
a valószínűsége változó Poisson-eloszlást követ.

::::info[Definíció]
Legyen $\lambda > 0$ egy tetszőleges valós szám, ekkor $X$-et Poisson eloszlásúnak nevezzük, ha sűrűségfüggvénye
$$
\pr(X = k) = \frac{\lambda^k}{k!} \cdot e^{-\lambda}
$$

:::note
$\frac{\lambda^k}{k!}$ az $e^\lambda$ függvény sorba fejtéséből származik.
:::
::::

<img src="/img/probstat/Poisson.svg" alt="drawing" width="400"/>

:::info[Tétel]
Ha $X \sim \mathrm{Poi}(\lambda)$, akkor

$$
\mathrm{E}(X) = \lambda = \mathrm{D}^2(X)
$$
:::

