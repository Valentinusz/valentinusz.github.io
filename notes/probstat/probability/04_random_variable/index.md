---
sidebar_position: 0
slug: "./"
---

# Valószínűségi változó

A klasszikus valószínűség fogalmával számos jelenség valószínűségét vizsgálni tudtuk. Sok eseménynél, azonban nem
jellemző az szimmetria, amit a klasszikus valószínűségi mező megkövetel.

::::info[Definíció]
Egy olyan változót, melynek értéke a véletlentől függ **valószínűségi változónak** nevezünk.
::::

Sokkal több jelenséget tudnánk leírni, ha rögzítés helyett, az valószínűséget egy függvénnyel adnánk meg, melyet a
különböző eloszlásfajtákra más-más módon kell definiálni. 

## Eloszlások fajtái

Az eloszlásoknak között megkülönböztetünk **diszkrét** és **folytonos** eloszlásokat.

A diszkrét eloszlások esetén a valószínűségi változó értékkészlete megszámlálható (azaz minden eleme, véges vagy
végtelen, sorozatba rendezhető pl. $\mathbb{N}, \mathbb{Z}, \mathbb{Q}$).

Folytonos eloszlásoknál a valószínűségi változó értékkészlete egy megszámlálhatatlanul végtelen halmaz (azaz nem lehet a halmaz
elemeiből olyan sorozatot képezni, mely annak minden elemét tartalmazza, pl. $\mathbb{Q}^*, \mathbb{R}, \mathbb{C}$).

## Eloszlások jellemzői
Minden eloszláshoz kapcsolódnak különböző, statisztikai szempontból fontos, mérőszámok (más néven momentumok).

:::info
Gyakran a momentumok hatványait a következő módon jelöljük $(\E(X))^2 = \E^2(X)$.
:::

### Várható érték
A lehetséges értékek valószínűséggel súlyozott átlaga. Ha sok kísérletet hajtunk végre a kapott $k$ értékek átlaga ehhez
az értékhez tart.

Jele: $\mathrm{E}(X)$, ahol $X$ egy valószínűségi változó.

#### Tulajdonságok
1. $\E(X+Y) = \E(X) + \E(Y)$
2. Ha $a$ egy tetszőleges konstans $\E(aX)=a\E(X)$
3. Ha $u = \E(X)$, akkor $\E(u) = u$.

### Szórásnégyzet (variancia)
A szórás azt mutatja meg, hogy a kísérletet sokszor ismételve a kapott $k$ értékek átlagosan milyen messze fognak
elhelyezkedni a várható értéktől.

A szórásnégyzetet az eloszlás típusától függetlenül a következő módon definiáljuk:

:::info[Definíció]
$$
\mathrm{D}^2(X) = \E((X-\E(X))^2) = \E(X^2) - \E^2(X)
$$

<details>
    <summary>Levezetés</summary>

    $$
    \begin{align*}
    \mathrm{D}^2(X)
    &= \E((X-\E(X))^2) \\
    &= \E(X^2 -2 X \E(X) + \E^2(X)) \\
    &= \E(X^2) - \E( 2 X \E(X)) + \E(\E^2(X)) \\
    &= \E(X^2) - 2 \cdot \E(\E(X)) \cdot \E(X) + E^2(X) \\
    &= \E(X^2) - 2 \cdot \E^2(X) + \E^2(X) \\
    &= \E(X^2) - \E^2(X)
    \end{align*}
    $$
</details>
:::
