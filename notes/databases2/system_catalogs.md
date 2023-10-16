---
sidebar_position: 1
---

# Rendszerkatalógusok

:::info
A kapcsolódó gyakorlati feladatok megoldásai elérhetőek a GitHub repo-ban.
:::

Az adatbázis-kezelő rendszerek számos olyan táblát és nézetet tartalmaznak, melyek az adatbázis különböző objektumairól
tartalmaznak adatokat.

## Adatszótár nézetek

Ezen metaadatot tartalmazó objektumok nevei rendszerint két tagból állnak, egy hozzáférési körből és egy
objektumtípusból.

A hozzáférési köröket a következő táblázat tartalmazza:

|      | Lekérdezheti                   | Tartalma                                    |
| ---- | ------------------------------ |  -------------------------------------------|
| USER | Bárki                          | Felhasználó tulajdonai                      |
| ALL  | Bárki                          | Amit a felhasználónak joga van megtekinteni |
| DBA  | Adatbázis adminisztrátor (DBA) | Minden                                      |

Objektumtípusok lehetnek például:
- `OBJECTS`: minden
- `VIEWS`: csak nézetek
- `TABLES`: csak táblák

Ezekből alkothatóak a rendszerkatalógusok nevei. Például: `DBA_OBJECTS`, `USER_TABLES`, `ALL_VIEWS` stb.

A rendszerkatalógusok nézetek, melyek a következő oszlopokból állnak (vastagon kiemelve a legfontosabb oszlopok):

| Column Name     | Data Type    | Nullable | Description                                                          |
|-----------------|--------------|----------|----------------------------------------------------------------------|
| **OWNER**       | VARCHAR2(30) | NOT NULL | Owner of the object                                                  |
| **OBJECT_NAME** | VARCHAR2(30) | NOT NULL | Name of the object                                                   |
| SUBOBJECT_NAME  | VARCHAR2(30) |          | Name of the subobject (for example, partition)                        |
| **OBJECT_ID**   | NUMBER       | NOT NULL | Dictionary object number of the object                               |
| DATA_OBJECT_ID  | NUMBER       |          | Dictionary object number of the segment that contains the object     |
| **OBJECT_TYPE** | VARCHAR2(19) |          | Type of the object (such as TABLE, INDEX)                             |
| CREATED         | DATE         | NOT NULL | Timestamp for the creation of the object                              |
| LAST_DDL_TIME   | DATE         | NOT NULL | Timestamp for the last modification of the object resulting from a DDL statement (including grants and revokes) |
| TIMESTAMP       | VARCHAR2(20) |          | Timestamp for the specification of the object (character data)        |
| STATUS          | VARCHAR2(7)  |          | Status of the object (VALID, INVALID, or N/A)                         |
| TEMPORARY       | VARCHAR2(1)  |          | Whether the object is temporary (the current session can see only data that it placed in this object itself) |
| GENERATED       | VARCHAR2(1)  |          | Indicates whether the name of this object was system generated (Y) or not (N) |

:::danger
Az egyes specifikus nézetek bizonyos oszlopokat a redundancia elkerülése végett nem tartalmaznak, például `USER_TABLES` esetén nem szerepelnek az  `OWNER` és `OBJECT_TYPE` oszlopok. 
:::

### `TAB_COLS` nézetek
Különlegesnek tekinthetőek a `TAB_COLS` adatszótár nézetek, melyek az adatbázisban szereplő táblák sorairól tárolnak
információkat.

A nézet legfontosabb oszlopai:

<figure class="figure-with-caption">

| Oszlop Neve | Leírás                                |
| ----------- | ------------------------------------- |
| OWNER       | Tulajdonos a táblának, nézetnek vagy csoportnak |
| TABLE_NAME  | A tábla, nézet vagy csoport neve      |
| COLUMN_NAME | Oszlop neve                          |
| DATA_TYPE   | Az oszlop adattípusa                 |

<figcaption>Forrás: <a href="https://docs.oracle.com/cd/E11882_01/server.112/e40402/statviews_2102.htm#REFRN20276">Oracle DBMS dokumentáció</a></figcaption></figure>