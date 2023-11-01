# Kombinatorika

A valószínűség taglalása előtt ismételjük át a legfontosabb kombinatorikai fogalmakat.

|            | Ismétlés  nélküli   | Ismétléses                                |
|------------|---------------------|-------------------------------------------|
| Permutáció | $n!$                | $\frac{n!}{k_1! \cdot \ldots \cdot k_r!}$ |
| Variáció   | $\frac{n!}{(n-k)!}$ | $n^k$                                     |
| kombináció | ${n \choose k}$     | ${n+k-1 \choose k}$                       |


## Permutáció
Véges sok elem lehetséges sorba rendezéseinek száma.

### Ismétlés nélküli permutáció
$n$ egymástól különböző elem ismétlés nélküli permutációinak száma:

$$
n \cdot (n-1) \cdot \ldots \cdot 2 \cdot 1 = n!
$$

:::info
$$
0! = 1
$$
:::

### Ismétléses permutáció
Permutáció, ahol vannak egymástól nem megkülönböztethető elemek. Jelölje az egyes ilyen egymástól megkülönböztethetetlen
elemeket tartalmazó csoportokat $k_i \; (i \le n)$. Ekkor az ismétléses permutációk száma a következő:

$$
\frac{n!}{k_1! \cdot \ldots \cdot k_r!}
$$

Tehát az ismétlés nélküli permutációk száma leosztva az egyes csoportok belső permutációinak számával.

:::note
Az ismétlés nélküli permutáció az ismétléses permutáció egy speciális esete, ahol a csoportok száma megegyezik az elemek
számával.
:::


## Variáció
Véges sok elemből kiválasztott $k$ db elem lehetséges sorba rendezéseinek száma.

### Ismétlés nélküli variáció
Nagyon hasonló az ismétlés nélküli permutációhoz annyi különbséggel, hogy csak az első $k$ elem sorrendjét nézzük

$$
\underbrace{n \cdot (n-1) \cdot \ldots \cdot (n-k+1)}_{k \text{ tag}} = \frac{n!}{(n-k)!}
$$

:::note
$k = n$ esetén az ismétlés nélküli variáció megegyezik az ismétlés nélküli permutációval.
:::

### Ismétléses variáció
Hasonló az ismétlés nélküli variációhoz, annyi különbséggel, hogy egy elemet akárhányszor kiválaszthatunk, így:

$$
\underbrace{n \cdot n \cdot \ldots \cdot n}_{k \text{ tag}} = n^k
$$

## Kombináció


### Ismétlés nélküli kombináció
Véges sok elemből $k$ elem kiválasztása úgy, hogy csak az elemek összetétele számít (azaz sorrendjük nem). Nagyon
hasonló az ismétléses variációhoz, annyi különbséggel, hogy a kiválasztott $k$ elem belső sorrendje sem számít ezért le
kell osztanunk $k!$-al:

$$
\frac{n!}{k! \cdot (n-k)!} = {n \choose k}
$$

:::info
$$
{n \choose k} = {n \choose n - k}
$$
:::

:::note
${n \choose k}$ számokat binomiális együtthatóknak nevezzük a binomiális tételben betöltött szerepük miatt.

<details>
    <summary>Binomiális tétel</summary>

    Minden nemnegatív $n$ természetes szám esetén:
    $$
    (x+y)^n = \sum^n_{k=0}{{n \choose k} x^{n-k} \cdot y^k}
    $$
</details>
:::

### Ismétléses kombináció
$n$ egymástól megkülönböztethető elemből kiválasztunk $k$ elemet úgy, hogy egy elemtípusból akár többször is
választhatunk kombinációk száma:

$$
{n+k-1 \choose k}
$$

Ez a képlet elsőre nem feltétlenül tűnhet intuitívnek ezért tekintsünk egy példát: Egy egyetemen 3 szakirány van,
hányféleképpen tud 6 tanuló szakirányt választani?

Ekkor a következő kombinációk adódnak: $AAAAAA, AAAAAB, AAAAAC, ABBCBC $ stb. Egy ilyen kombinációban, egyértelműen meg
tudjuk határozni a különböző csoportok határait még ($ABBCBC$ esetén is hiszen a sorrend nem számít):

Ekkor egy lehetséges kombinációt a következő módon tudunk lekódolni: $$ ABBBCC =  X \mid XXX \mid XX $$

Ahhoz, hogy megkapjuk a kombinációk számát egy másik problémát kell megoldanunk: hányféleképpen tudunk az
`XXXXXX||` karakterekből $(n+k-1)=8$ hosszú karakterláncokat alkotni?

Ez egy ismétléses permutáció, melynek képletéből:
$$
\frac{8!}{2! \cdot 6!} = \frac{(n+k-1)!}{(n-k)! \cdot n!} = {n+k-1 \choose n-k}
$$



Mivel ${n \choose k} = {n \choose n - k}$, ezért
$$
{n+k-1 \choose n-k} = {n+k-1 \choose k} = {8 \choose 6} = 28
$$

:::note
Ez előző alfeladatot úgy is megfogalmazhattuk volna, hogy hányféleképpen tudjuk a függőleges vonalak pozícióit
megválasztani. Ez egy ismétlés nélküli kombináció, amiből ${8 \choose 2} = {8 \choose 6}$ adódik.
:::

:::tip
Az ismétléses kombináció felteszi, hogy minden elemtípus elemeiből végtelen sok van. Emiatt legtöbbször olyan
feladatoknál jön elő, ahol az elemeket kiválasztás után visszatesszük.
:::
