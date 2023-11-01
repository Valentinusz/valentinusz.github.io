# Binomiális eloszlás

A binomiális eloszlás azt vizsgálja, hogy $n$ kísérlet esetén mekkora a valószínűsége
annak, hogy éppen $k$ kísérlet volt sikeres.

:::info[Definíció]
$$
\mathrm{P}(X = k) = \underbrace{{n \choose k}}_{\text{mely kísérletek sikeresek}} \cdot
\underbrace{p^k}_{\text{esély, hogy } k \text{ sikeres van}} \cdot \underbrace{(1-p)^{n-k}}_{\text{maradék kísérlet sikertelen}}
$$
:::

![Binomiális eloszlás](/img/probstat/Binomial_distribution.svg)

:::tip[Példa]
Egy gyár $0,01$ valószínűséggel gyárt hibás terméket. Mekkora annak a valószínűsége, hogy $100$ legyártott termékből
pontosan $4$ lesz hibás?

Mivel $X$ binomiális eloszlást ($X \sim \B(4; 0,01)$) követ ezért:

$$
{100 \choose 4} \cdot 0,01^4 \cdot 0,99^{96}
$$
:::

## Várható érték

:::info[Tétel]
A binomiális eloszlás várható értéke:
$$


\E(\B(n,p)) = np
$$

<details>
    <summary>Bizonyítás</summary>

    A várható érték definíciójából:
    $$
    \sum_{k=0}^{n}{k \cdot {n \choose k} \cdot p^k \cdot (1-p)^{n-k}}
    $$

    Mivel $k = 0$ esetén a teljes szorzat $0$, ezért az összegzést indíthatjuk $1$-ről is.
    Kihasználva, hogy
    
    $$
    {n \choose k} = \frac{n!}{k! \cdot (n-k)!} = \frac{n}{k} \cdot \frac{(n-1)!}{(k-1)! \cdot (n-k)!} =
    \frac{n}{k} \cdot \frac{(n-1)!}{(k-1)! \cdot ((n-1)-(k-1))!} = \frac{n}{k} \cdot {n-1 \choose k-1}
    $$
    
    így,
    
    $$
    \begin{align*}
    \E(\B(n,p))
    &= \sum_{k=1}^{n}{k \cdot \frac{n}{k} \cdot {n-1 \choose k-1} \cdot p^k \cdot (1-p)^{n-k}} \\
    &= n \cdot \sum_{k=1}^{n}{{n-1 \choose k-1} \cdot p^k \cdot (1-p)^{n-k}} \qquad \backslash k = j + 1 \\
    &= n \cdot \sum_{j=0}^{n-1}{{n-1 \choose j} \cdot p^{j+1} \cdot (1-p)^{n-j-1}} \\
    &= np \cdot \sum_{j=0}^{n-1}{{n-1 \choose j} \cdot p^{j} \cdot (1-p)^{n-j-1}}
    \end{align*}
    
    $$
    Ekkor a szummázott kifejezés a $\B(n-1, p)$ eloszlás valószínűségeinek összege, melyről az axiómák miatt tudjuk, hogy
    $1$.
    
    Így:
    $$
    \E(\B(n,p)) = np
    $$
</details>

:::

:::tip[Példa]
Egy fémöntödében minden gyártási folyamat $0,001$ valószínűséggel megszakad. Határozzuk meg, $10000$ gyártásból
várhatóan hány fog megszakadni!

$$
\E(\B(10000; 0,0001)) = 10000 \cdot 0,0001 = 10
$$
:::

## Szórásnégyzet

