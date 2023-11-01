# A klasszikus valószínűség

Egy kísérletet $n$ alkalommal végzünk el, ekkor legyen $k$ az $A$ esemény bekövetkezéseinek száma. Ekkor a $\frac{k}{n}$
hányadost $A$ a kísérletsorozatra vonatkozó relatív gyakoriságának nevezzük.

Ha a kísérletek száma a végtelenbe tart, az adódó relatív gyakoriságok egy érték körül kezdenek ingadozni, amit a $A$
esemény valószínűségének nevezzük és $\mathrm{P}(A)$ jelöljük.

Erre a következők axiómák teljesülnek:
1. Minden $A$ esemény esetén: $0 \le \mathrm{P}(a) \le 1$.
2. A biztos esemény valószínűségé 1
3. Ha $A_1, A_2, \dots$ egymást páronként kizáró események, akkor
$\mathrm{P}(A_1) + \mathrm{P}(A_2) + \dots = \mathrm{P}(A_1+A_2+\dots) $ 

:::tip
Az axiómákból levezethetőek az alábbi fontos tulajdonságok:
- $\mathrm{P}(\emptyset) = 0$
- $\mathrm{P}(\overline{A}) = 1 - \mathrm{P}(A)$
- $\mathrm{P}(A \cup B) = \mathrm{P}(A) + \mathrm{P}(B) - \mathrm{P}(A \cap B) $
:::

## Klasszikus valószínűségi mező

Klasszikus valószínűségi mezőről beszélünk, ha
- az elemi események száma véges
- az elemi események valószínűsége egyenlő

Legyen $A$ egy esemény. Ha $A$ felírható elemi események szorzataként, akkor valószínűsége
$$
\mathrm{P}(A) = \mathrm{P}(\omega_1 + \omega_2 + \dots + \omega_k) = k \cdot \frac{1}{n} = \frac{k}{n}
$$

azaz az esemény valószínűsége a kedvező esetek és az összes eset számának hányadosa.

:::danger
A klasszikus valószínűség egy nagyon specifikus modell, sokszor a való életre nem jellemző az a szimmetria, mely a
modell alapját jelenti.
:::

