---
sidebar_position: 2
---

# Bitvektor index

Bitvektornak nevezünk egy $N$ hosszú (ahol $N$ a sorok száma) nullákból és egyesekből álló sorozatot. Egy bitvektor az
tábla egy oszlopának $v$ értékéhez tartozik, $i$-edik bitje pontosan akkor $1$, ha az adott $i$-edik sor adott
oszlopának értéke $v$.

Tekintsük a következő táblát:

| Neptun   | Kar   | Felvétel éve |
|----------|-------|--------------|
| ABC123   | IK    | 2018         |
| XYZ789   | TTK   | 2019         |
| ASD135   | IK    | 2020         |
| GOT999   | IK    | 2019         |

A tábla `Kar` oszlopában szereplő értékek bitvektorai:

<div class="side-2">

| Kar="IK" |
|----------|
| 1        |
| 0        |
| 1        |
| 1        |

| Kar="TTK" |
|-----------|
| 0         |
| 1         |
| 0         |
| 0         |
</div>

Hasonlóan a `Felvéltel éve` oszlopban szereplő értékek bitvektorai:

<div class="side-2">

| Felvétel="2018" |
|-----------------|
| 1               |
| 0               |
| 0               |
| 0               |

| Felvétel="2019" |
|-----------------|
| 0               |
| 1               |
| 0               |
| 1               |

| Felvétel="2020" |
|-----------------|
| 0               |
| 0               |
| 1               |
| 0               |

</div>

A `Neptun` oszlopra szándékosan nem csináltunk bitvektorokat, mivel az oszlop értékkészlete túl nagy
(sőt tudjuk, hogy minden érték egyedi), ezért nem lenne értelme ilyen jellegű indexet készíteni.

## Mire jók a bitvektor indexek?

A bitvektor indexek célja a logikai összehasonlítások felgyorsítása. Tekintsük a következő példát:

```sql
SELECT * FROM HALLGATOK WHERE KAR="IK" AND FELVÉTEL_ÉVE IN (2018, 2019);
```

Ekkor a lekérdezés eredményét megadó bitvektort, a következő módon tudjuk előállítani:

A `Felvétel="2018"` és `Felvétel="2019"` vektorokat bitenként összekapcsoljuk a logikai vagy művelettel, majd ezen
művelet eredményét és-el kapcsoljuk össze a `Kar="IK"` vektorral.

$$
\begin{pmatrix}
1 \\
0 \\
1 \\
1
\end{pmatrix}
\land
\left[
\begin{pmatrix}
1 \\
0 \\
0 \\
0
\end{pmatrix}
\lor
\begin{pmatrix}
0 \\
1 \\
0 \\
1
\end{pmatrix}
\right]
=
\begin{pmatrix}
1 \\
0 \\
1 \\
1
\end{pmatrix}
\land
\begin{pmatrix}
1 \\
1 \\
0 \\
1
\end{pmatrix}
=
\begin{pmatrix}
1 \\
0 \\
0 \\
1
\end{pmatrix}
$$

Egy bitvektor tömörítés nélkül $N$ bájtot foglal, egy teljes oszlopra vonatkozó index pedig
$$
\text{lehetséges értékek száma} \cdot \text{sorok száma}
$$

bitből áll, ami jelentősen kevesebb tárhelyet (ezáltal kevesebb blokkolvasását) jelent, mivel index nélkül a konkrét
értékeket is ki kellett volna olvasni.

:::note
A bitvektor indexek hátránya, hogy intervallum lekérdezések esetében nem hatékonyak.
:::

## Szakaszhossz kódolás

Vegyük észre, hogy bitvektoraink legtöbb esetben sok nullából és kevés egyesből állnak. Így bitvektorainkat akar
eltárolhatnánk úgy is, hogy a **nullákból álló szakaszok hosszait tároljuk el**.

### Kódolás

Legyen $i = 0$. Végigiterálunk a vektoron:
- Amikor az adott bit 0 megnöveljük $i$-t.
- Amikor az adott bit 1 az $i$ változót bináris számmá alakítjuk:
  - Legyen $j$ az $i$ szám bináris alakjának hossza.
  - Lekódoljuk $j$-t unárisan, ez azt jeleneti, hogy **$\mathbf{(j-1)}$ egyest és 1 db nullást** kódolunk.
  - A lekódolt $j$-hez hozzáfűzzük $i$ bináris alakját.
  - A szakaszt lekódoltuk, visszaállítjuk $i$-t nullára.

:::danger
Ha a bitvektor egy **1-es bittel kezdődik először 0 db nullást kell lekódolnunk**, melynek **kódja 00** lesz.
(0 kettes számrendszerben 0, hossza 1, ami unárisan 0, melyeket összefűzve 00-t kapunk.)
:::

:::danger
Ha a bitvektor **0-ás bittel ér véget, ez eddigi szakasz hossza nem kerül lekódolásra**. Mivel ismerjük a tábla sorainak
számát ezért ezzel nem történik információvesztés.
:::

:::tip Példa
Legyen a bitvektor $00000000000001$.

Az első egyesig 13 nullán iteráltunk keresztül ezért $i=13=8+4+1=2^3 + 2^2 + 2^0$, ami binárisan 1101, melynek
hossza 4. Unárisan lekódolva négyet 1110 adódik. Így a bitvektor tömörített változata: $11101101$.
:::


### Dekódolás
Legyen $i = 0$. Végigiterálunk a kódolt vektoron:
- Ha a bit 1, megnöveljük $i$ értékét eggyel.
- Ha a bit 0, akkor végetért az unáris hosszjelelő szakasz:
  - Ekkor a következő $(i + 1)$ biten van tárolva a nullák száma
  - Kiolvassuk a következő $(i + 1)$ bitet és visszaalakítjuk tízes számrendszerbe, jelöljük ezt a számot $j$-vel.
  - A kimenethez hozzáfűzünk $j$ db nullást és egy darab egyest.

:::tip Példa
Alakítsuk vissza az előző példában szereplő bitvektort (11101101):

Az első nulláig 3 egyesen iteráltunk végig, így tudjuk, hogy a szakaszhossz a következő 4 biten van tárolva. Ez a
1101 kettes számrendszerbeli szám, ami tízes számrendszerben 13. Így tehát 13 db nullást és 1 db egyest fejtünk
vissza. 
:::

### Bonyolultabb példák

Tömörítsük a $0000000000000000000000010000000101$ (23, 7 és 1 db nulla) bitvektort!

| Nullák | Binárisan                   | Hossz | Unáris hossz | Kód        |
|--------|-----------------------------|-------|--------------|------------|
| 23     | $(16+4+2+1)_{10} = 10111_2$ | 5     | 11110        | 1111010111 |
| 7      | $(4+2+1)_{10} = 111_2$      | 3     | 110          | 110111     |
|  1     | 1                           | 1     | 0            | 01         |

Így bitvektor: $1111010111 \, 110111 \, 01$.

Fejtsük vissza a $1111010101001011$ tömörített bitvektort!

| Unáris Szakasz | Hossz | Kódolt szám         | Eredeti vektorrész        | Maradék |
|----------------|-------|---------------------|---------------------------|---------|
| 11110          | 5     | $10101_2 = 11_{10}$ | 21db nullás és 1 db egyes | 001011  |
| 0              | 1     | $0$                 | 1db egyes                 | 1011    |
| 10             | 2     | $11_2 = 3_{10}$     | 3db nullás és 1 db egyes  | -       |

Így a tömörítetlen vektor: $000000000000000000000110001$.
