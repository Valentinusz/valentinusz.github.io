# Spark RDD

Az RDD (Resilient Distributed Dataset - hibatűrő elosztott adathalmaz) a Spark által használt elsődleges absztrakció.
Egy olyan adathalmazt reprezentál, melynek részei a klaszter különböző gépein helyezkednek el. Ezt az adathalmazt,
különböző műveleteken keresztül változtatni tudjuk.

RDD-t több módon is létre lehet hozni, például meglévő listából. Itt a 3-as a partíciók számát adja meg, azaz hány gépen
kerüljön elosztásra az adathalmaz.

```py
numbers = [1, 2, 4, 6, 7, 2, 4, 6, 5]

rdd = sc.parallelize(numbers, 3)
```



Az RDD-ken Két művelettípust értelmezünk: transzformációkat és akciókat. A kettő közti különbség, hogy a transzformációk
új RDD-kel, míg az akciók valami más jellegű értékkel térnek vissza.

:::tip
A műveletek jellege nagyon hasonlít a [Java folyamaihoz](../../java/stream.md) illetve a JavaScript tömbfüggvényeihez.
:::


## Transzformációk
Ebben a bekezdésben a legfontosabb RDD transzformációkat szeretném bemutatni. A transzformációk teljes listája
megtalálható a [spark dokumentációban](https://spark.apache.org/docs/latest/rdd-programming-guide.html#transformations).

:::info
Minden kódrészlet esetén adottnak tekintjük a 

```python
from pyspark import SparkConf, SparkContext 

conf = SparkConf() 
sc = SparkContext(conf=conf)
```

sorokat.
:::

### Leképezés - `map`

Egy új RDD-t ad vissza, melynek elemei az eredeti RDD elemei valamilyen logikai mentén átalakítva.

```python
numbers = sc.parallelize(range(1000))
numbers.map(lambda number: number ** 2)
```

### Szűrés  - `filter`

Egy predikátumfüggvényt vár. Egy olyan rdd-t ad vissza, melyben az 

```python
numbers = sc.parallelize(range(1000))
numbers.filter(lambda number: number % 2 == 0)
```

### Dimenziócsökkentő leképezés - `flapMap`

Egy szekvencia típusú értéket (`string`, `byte`, `list`, `tuple`, `bytearray`, `buffer`, `range`) visszaadó függvényt
vár. Egy olyan RRD-vel tér vissza, mely a függvény által visszaadott szekvenciák elemeit tartalmazza. Tehát a visszaadott
szekvenciákat egyetlen szekvenciává lapítja.

```python
text = sc.textFile('text.txt') # rdd-be a fájl sorai lesznek
text.map(lambda line: line.split(" ")) # rdd minden eleme egy lista melyben szavak vannak
text.flatMap(lambda line: line.split(" ")) # rdd minden eleme egy szó
```

## Akciók

### Megszámlálás - `count`
Megadja az adott RDD-ben lévő elemeik számát.



### Redukció - `reduce`

A redukció egy kétparaméteres (`accumulator`, `current`) függvény vár, aminek alkalmazásával feldolgozza a teljes RDD-t. Ehhez minden elem esetén
meghívja a megadott függvényt, melynek `accumulator` paramétereként átadja a függvény előző hívásának eredményét
(kezdetben az érték az RDD első eleme) `current` paraméterként pedig az aktuális elemet.

Hasonlókért lásd: [foldl (Haskell)](http://zvon.org/other/haskell/Outputprelude/foldl_f.html),
[reduce (JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
[Stream.reduce (Java)](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#reduce-T-java.util.function.BinaryOperator-)

```python
numbers = sc.parallelize(range(1000))
numbers.reduce(lambda accumulator, current: accumulator + current) # összegzés megvalósítása
numbers.reduce(lambda maximum, current: max(accumulator, current)) # maximumkiválasztás
```

:::danger
Nagyon fontos, hogy az elosztott végrehajtás miatt kommutatívnak és asszociatívnak kell lennie, illetve úgy kell megírni
, hogy később amikor a különböző Node-okon befejeződik a redukció, az alredukciók eredménye is ugyan ezzel a függvénnyel
lesz redukálva.

Ezért például a következő kód rosszul működik:
```py
numbers.reduce(lambda count, current: count + 1 if current % 2 == 0 else count)
```
:::
