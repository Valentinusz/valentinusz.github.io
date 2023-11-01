# Események

A valószínűségszámításban egy többször is megismételhető jelenséget kísérletnek nevezünk. Egy kísérlet lehetséges
kimeneteleit elemi eseményeknek (jele: $\omega$), az összes kimenetelt tartalmazó halmazt eseménytérnek (jele: $\Omega$)
nevezzük.

Az eseménytér részhalmazait eseményeknek nevezzük. Ezek olyan jelenségek, melyek bekövetkezte a kísérlet után
egyértelműen eldönthető.

Megkülönböztetünk két speciális eseményt $\Omega$ (más jelöléssel: $I$) eseményt biztos eseménynek az
$\emptyset$ (más jelöléssel: $O$) eseményt lehetetlen eseménynek nevezzük.

:::tip[Példa]
Egy pakli magyar kártyából lapot húzunk.
Ekkor az eseménytér a
$\left\lbrace \omega_1 = \text{tök alsót húzunk}, \omega_2 = \text{tök felsőt húzunk} \dots \right\rbrace$ halmaz.
Ekkor események a következők:
- Piros nyolcast húzunk (elemi esemény)
- Tököt húzunk (8 elemi eseményből álló esemény)
- Kártyát húzunk (biztos esemény)
- Nem tököt húzunk (24 elemi eseményből álló komplementer esemény)
- Nem kártyát húzunk (lehetetlen esemény)
:::

## Műveletek

:::note
Mivel az eseményeket halmazokkal definiáltuk, műveleteik és azok tulajdonságai megegyeznek a halmazoknál tanultakkal.
:::

### Összeg
Azt az eseményt, amikor $A$ és $B$ események közül legalább az egyik bekövetkezik, a két esemény összegének, hívjuk
és $(A \cup B)$-vel vagy $(A+B)$-vel jelöljük.

### Szorzat
Azt az eseményt, amikor $A$ és $B$ esemény is bekövetkezik, a két esemény szorzatának hívjuk és $(A \cap B)$-vel vagy
$AB$-vel jelöljük.

### Komplementer
Azt az eseményt, amikor nem az $A$ esemény következik be, az $A$ $\Omega$-ra vett komplementer eseményének hívjuk és
$\overline{A}$ módon jelöljük.

### Különbség
Azt az eseményt, amikor $A$ bekövetkezik, de $B$ nem, a két esemény különbségének hívjuk és $(A \setminus B)$-vel vagy
$(A - B)$-vel jelöljük.

Ebből viszonylag természetesen következik a valószínűség fogalma:
$$
\mathrm{P}(A) = \frac{\left| A \right|}{\left| \Omega \right|}
$$

Azaz az $A$ esemény valószínűsége a kedvező kimenetelek száma osztva az összes kimenetel számával.

### Műveletek tulajdonságai

| Tulajdonság      | Összeg                                           | Szorzat                                          |
|------------------|--------------------------------------------------|--------------------------------------------------|
| Idempotencia     | $A \cup A = A$                                   | $A \cap A = A$                                   |
| Kommutativitás   | $A \cup B = B \cup A$                            | $A \cap B = B \cap A$                            |
| Asszociativitás  | $(A \cup B) \cup C = A \cup (B \cup C)$          | $(A \cap B) \cap C = A \cap (B \cap C)$          |
| Disztributivitás | $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ | $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ |

A halmazokhoz hasonlóan $A \cap \bar{A} = \emptyset$ és $A \cup \bar{A} = \Omega$.

Teljesülnek továbbá a DeMorgan azonosságok:
$\overline{A \cup B} = \overline{A} \cap \overline{B}$ és $\overline{A \cap B} = \overline{A} \cup \overline{B}$.

## Egymást kizáró események
Azt mondjuk $A$ és $B$ események egymást kizáróak, ha egyszerre sosem következnek be, azaz $AB = \emptyset$.


## Teljes eseményrendszer
Események egy $A_1, A_2, \dots, A_n$ rendszerét, teljes eseményrendszernek hívjuk, ha
$$
A_1 \cup A_2 \cup \dots \cup A_n = \Omega
$$
