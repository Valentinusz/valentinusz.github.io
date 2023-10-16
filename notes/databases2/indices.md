---
title: Indexek
---

Az indexek motivációjának megértéséhez tekintsük a következő példát: Adott 16 blokk, melyből 12 blokk a táblánk része,
legrosszabb esetben hány blokkot kell beolvasni, egy konkrét sor megkereséséhez?

Nem nehéz meggondolni, hogy legrosszabb esetben 12 blokk beolvasása szükséges. A blokkolvasás azonban költséges művelet,
ezért szeretnénk minimalizálni azok számát.

## Elsődleges index
Tároljuk a táblát valamely oszlopa szerint rendezve. Így már használhatjuk a logaritmikus (bináris) keresés algoritmusát,
mellyel legrosszabb esetben $\mathcal{O}(\log_2{n})$ olvasással megtalálhatjuk a keresett sort.

A megoldás hátránya, hogy a fizikai elrendezés miatt csak egy oszlop (általában az elsődleges kulcs) szerinti keresés
esetén javít az olvasások számán.

## Másodlagos indexek
A további oszlopokra, is lehetőségünk van indexeket létrehozni, ezek azonban, már extra tárhelyet igényelnek. Ez a
tárigény sokszor sokkal kisebb, mint egy sor által elfoglalt hely.

### Sűrű index
A tábla minden rekordjához egy mutatót rendelünk. A mutatókat az adott oszlop alapján rendezzük sorba.

### Ritka index
Minden adatblokkhoz egy mutató tartozik melynek kulcsa az adatblokk első kulcsa.

### B+ fa
Az adatbázisban leggyakrabban használt index fajta


Van egy R táblánk, egy I1 sűrű és egy I2 ritka indexünk az alábbi
paraméterekkel: T(R) = 10 000, bf(R) = 20, bf(I1) = 100, bf(I2) = 100

Számoljuk ki a következőket: B(R), B(I1), B(I2)

$$
B(R) = T(R) / bf(R) = 10000 / 20 = 500
B(I1) = T(R) / bf(I1) = 10000 / 100 = 100
B(I2) = B(R) / bf(I2) = 500 / 100 = 5
$$

Végezzük el az előző feladatot úgy, hogy a blokkok csak 80%-ban lehetnek tele.

bf(R) = 20 * 0.8 = 16

B(R) = T(R) / bf(R) = 10000 / 16 = 625
B(I1) = T(R) / bf(I1) = 10000 / 80 = 125 // sűrű
B(I2) = B(R) / bf(I2) = 625 / 80 ~ 8 // ritka
