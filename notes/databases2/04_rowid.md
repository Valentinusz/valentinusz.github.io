# `ROWID` pszeudóoszlop

A pszeudóoszlopok olyan oszlopok, de nem kerülnek eltárolásra a táblában, ehelyett lekérdezéskor kerülnek kiszámításra.

:::danger
Mivel nincsenek tárolva, a pszeudóoszlopok értékeit csak lekérdezni lehet!
:::

Az egyik legfontosabb ilyen oszlop a `ROWID`, ami a tábla egy adott sorának címét adja meg. A címből a `DBMS_ROWID`
csomagban szereplő függvényeken keresztül tudunk információkat lekérni.

## `ROWID_OBJECT`
Az adatbázis objektum sorszámát adja vissza, melyben az adott című sor található.

:::note
Ennek értéke megegyezik a sor táblájának `DBA_OBJECTS`-beli `DATA_OBJECT_ID` értékével.
:::

## `ROWID_RELATIVE_FNO`
A sort tartalmazó adatfájl táblatéren belüli sorszámát adja vissza.

:::note
Ennek értéke megegyezik a sort tartalmazó terület `DBA_EXTENTS`-beli `RELATIVE_FNO` értékével.
:::


## `ROWID_BLOCK_NUMBER`
A sort tartalmazó blokk sorszáma.

## `ROWID_ROW_NUMBER`
A sor blokkon belüli sorszáma.


:::tip példa
A NIKOVITS felhasználó CIKK táblájának adatai melyik blokkokban helyezkednek el, és hány sor van az egyes blokkokban?

Fontos, hogy a tábla akár több fájlban is lehet, ezért a csoportosításnál azt is figyelembe kell vennünk.
:::
