---
sidebar_position: 3
---

# Oracle indexek

Az Oracle adatbázis-kezelő rendszer számos extra indexelési lehetőséget biztosít.

## B+ fa indexek

Az adatbázis-kezelő rendszer alapértelmezett indextípusa.

```sql
CREATE INDEX index ON dolgozo(dnev);
```
 
### `UNIQUE` index

A B+ index speciális esete, ahol minden kulcsnak egyedinek kell lennie. A faműveletek is ezen tulajdonság alapján működnek,
például duplikátum beszúrása esetén a DBMS hibát fog jelezni.

```sql
CREATE UNIQUE INDEX index ON dolgozo(dnev);
```

:::note
A `UNIQUE` megszorítás is ilyen indexet használ a háttérben.
:::

### Csökkenő index

Bizonyos esetekben előfordulhat, hogy az adatot fordított sorrendben szeretnénk visszaadni, vagy egy bizonyos számnál
kisebb kulcsú rekordokat szeretnénk megkeresni.

```sql
CREATE INDEX index ON dolgozo(dnev DESC);
```

### Összetett (composite) index

Olyan index, melyben a kulcsokat több oszlop értékei alkotják.
```sql
CREATE INDEX index ON dolgozo(foglalkozas, oazon);
```

Az összetett indexek tömöríthetőek:
```sql
CREATE INDEX index ON dolgozo(foglalkozas, oazon, dnev) COMPRESS 2;
```

Ez a B+ kulcsainak ábrázolását változtatja meg, úgy, hogy az első `n` (esetünkben 2) oszlopbeli értékeket közösen
tárolja a levélcsúcsok között. Tehát pl. egyszer kerül eltárolásra a kulcs `('CLERK', 10)` kulcs prefixum, és amire a
a `(SMITH)` és `(MILLER)` szuffixumú kulcsok csak hivatkoznak egy mutatón keresztül.

:::danger
A tömörítés mértékének szigorúan kisebbnek kell lennie a megadott oszlopok számánál.
:::

### Fordított kulcsú index
A fordított kulcsú index a kulcs bináris reprezentációját fordítva tárolja. Mivel táblák sorait egymás után szúrjuk be,
bizonyos oszlopok értékei nagyon közel kerülhetnek egymáshoz (pl. egész szám elsődleges kulcs, beszúrási időbélyeg).
Egy párhuzamos környezetben viszont hatékonyabb, ha az ilyen sorok mutatói máshol vannak a B+ fában, így például kisebb
az esélye annak, hogy amiatt kell várnunk mert egy másik folyamat a B+ adott alfáját éppen átrendezi egy törlés miatt.

```sql
CREATE INDEX index ON dolgozo(dkod) REVERSE
```

### Függvényalapú index

A megadott függvény alapján készíti el az indexet.

```sql
CREATE INDEX index ON dolgozo(fizetes / 40);
```

:::danger
Az indexet csak akkor használja a lekérdezés optimalizáló, ha a megadott függvény szerepel a lekérdezésben.

Például az előbb létrehozott index nem kerül felhasználásra a következő lekérdezés esetén:
```sql
SELECT * FROM dolgozo WHERE fizetes > 1500;
```
:::

## Bitvektor index

```sql
CREATE BITMAP INDEX index ON dolgozo(oazon);
```
