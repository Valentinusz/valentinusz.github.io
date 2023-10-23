---
sidebar_position: 1
---

# Elsődleges index

Tároljuk a táblát valamely oszlopa szerint rendezve. Így már használhatjuk a
[bináris keresés algoritmusát](https://en.wikipedia.org/wiki/Binary_search_algorithm), mellyel legrosszabb esetben
$\mathcal{O}(\log{n})$ olvasásból megtalálhatjuk a keresett sort.

A megoldás hátránya, hogy fizikailag elrendezni a fájlt csak egyféleképpen tudjuk így csak egy oszlop
(általában az elsődleges kulcs) szerinti keresés esetén tudunk indexeket alkalmazni.
