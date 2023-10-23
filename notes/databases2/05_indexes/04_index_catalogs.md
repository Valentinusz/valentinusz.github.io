---
sidebar_position: 4
---

# Index rendszerkatalógusok

## `INDEXES`

Az adatbázisban található indexekről tartalmaz adatokat.

| Oszlop          | Leírás                               |
|-----------------|--------------------------------------|
| OWNER           | az index tulajdonososa               |
| INDEX_NAME      | az index neve                        |
| TABLE_OWNER     | az indexelt objektum tulajdonosa     |
| TABLE_NAME      | az indexelt objektum neve            |
| TABLE_TYPE      | az indexelt objektum neve típusa     |
| UNIQUENESS      | egyedi-e az index                    |
| COMPRESSION     | használ-e tömörítést                 |
| PREFIX_LENGTH   | tömörítésnél a prefix oszlopok száma |
| TABLESPACE_NAME | táblatér neve                        |

## `IND_COLUMNS`

Az összes tálba összes indexében szereplő oszlopokról tárol információkat.

| Oszlop          | Leírás                                                               |
|-----------------|----------------------------------------------------------------------|
| INDEX_OWNER     | az index tulajdonososa                                               |
| INDEX_NAME      | az index neve                                                        |
| TABLE_OWNER     | az indexelt objektum tulajdonosa                                     |
| TABLE_NAME      | az indexelt objektum neve                                            |
| COLUMN_NAME     | az index oszlopának neve                                             |
| COLUMN_POSITION | az oszlop sorszáma az indexen belül                                  |
| DESCEND         | `DESC` ha az oszlop csökkenően szerepel az indexben (különben `ASC`) |

## `IND_EXPRESSIONS`

A függvény alapú indexekről tárol információkat

| Oszlop            | Leírás                                                               |
|-------------------|----------------------------------------------------------------------|
| INDEX_OWNER       | az index tulajdonososa                                               |
| INDEX_NAME        | az index neve                                                        |
| TABLE_OWNER       | az indexelt objektum tulajdonosa                                     |
| TABLE_NAME        | az indexelt objektum neve                                            |
| COLUMN_EXPRESSION | a függvény                                                           |
| COLUMN_POSITION   | az oszlop sorszáma az indexen belül                                  |


