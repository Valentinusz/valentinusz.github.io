---
sidebar_position: 2
---

# Másodlagos indexek
A többi oszlopra, is van lehetőségünk indexeket létrehozni, de mivel a fizikai elrendezést adta lehetőséget már
felhasználtuk ezek extra tárhelyet igényelnek. Az extra tárhely ellenére megéri ilyen segédstruktúrákat létrehozni.

## Sűrű index
A tábla minden rekordjához egy mutatót rendelünk. A mutatókat az adott oszlop alapján rendezzük sorba.

## Ritka index
Minden adatblokkhoz egy mutató tartozik melynek kulcsa az adatblokk első kulcsa.

## B+ fa
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
