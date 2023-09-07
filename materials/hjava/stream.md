---
sidebar_position: 4
---

# Folyamok
**API adatszerkezetek feldolgozásához**. Bár elsőre úgy tűnhet a listákhoz nagyon hasonlóak, a folyamok azonban nem
tárolnak elemeiket, hanem "generálják" azokat.

Folyamot számos módon tudunk létrehozni:
```java
Stream.of(1, 1, 2, 1, 3, 1, 2).forEach(n -> System.out.println(n));
```

Streamek végtelen elemet is tartalmazhatnak, ezek lustán jönnek létre azaz mindig csak egy van a memóriában.
```java
Stream.iterate(1, n -> n + 1).forEach(n -> System.out.println(n));

// le is lehet limitálni
Stream.iterate(1, n -> n + 1).limit(10).forEach(n -> System.out.println(n));
```

A folyamok életciklusát három fázisra tudjuk osztani:

* létrehozás
* köztes műveletek (intermediate operation)
* lezáró művelet (termination)

Egy adott folyamot csak egyszer lehet feldolgozni, a lezáró művelet meghívását követően további műveletek meghívása `IllegalStateException`-t eredményez! 

Hasonlóan a lambdákhoz, vannak a primitív típusokra specializált folyamok (például: `IntStream`).

Az `IntStream` használata nem csak hatékonyság miatt ajánlott, hanem extra létrehozó műveletekkel rendelkezik.

```java
IntStream.range(0, 10); // balról zárt jobbról nyitott
IntStream.rangeClosed(0, 10); // zárt 
```

## Létrehozó műveletek
### Iterate
Egy kezdeti értéket és egy `UnaryOperator` lambdát vár.
```java
Stream.iterate(0, n -> n + 1).limit(5).forEach(System.out::println); // 0 1 2 3 4
```

### Generate
Egy `Supplier` lambda alapján állítja elő a folyamot:
```java
Stream.generate(() -> 5).limit(3).forEach(System.out::println); // 5 5 5
```

### `Collection.stream()`
Az egyik leggyakrabban használt létrehozó művelet a `Collection` interfész `stream()` metódusa, mely egy adott
gyűjtemény "folyamkénti" feldolgozását teszi lehetővé. A folyam változtatása nem változtatja meg az adatszerkezetet.
```java
ArrayList<String> arrayList = new ArrayList<>();
arrayList.stream().forEach(System.out::println);
```
Bonyolultabb példa `Map`-ekkel:
```java
Map.of('a', 1, 'b', 2).entrySet().stream().forEach(entry -> System.out.println(entry.getKey())); // a b
```

* `entrySet()` a `Map` bejegyzéseinek halmaza
* `values()` a `Map` értékeinek gyűjteménye
* `keySet()` a `Map` kulcsainak halmaza

Érdekesség, hogy a következőt is meg tudjuk tenni:
```java
Map.of('a', 1, 'b', 2).entrySet().forEach(entry -> System.out.println(entry.getKey()));
```
Ekkor azonban nem folyamot, hanem az `Iterable` interfész adta `forEach` metódust használjuk, a stream API további lehetőségeket nem tudnánk használni.

### `Stream.concat()`
Lehetőségünk van streamet, úgy létrehozni, hogy korábban létrehozott folyamokat fűzünk össze:
```java
Stream.concat(Stream.of(1, 2), Stream.of(3, 4));
```

### New I/O csomag
A NIO csomag több lehetőséget biztosít arra, hogy fájlrendszer műveletek eredményét folyamként dolgozhassuk fel.

Fájl sorai:
```java
Files.lines(Path.of("src", "Streams.java")).forEach(System.out::println);
```

Könyvtár tartalma:
```java
Files.list(Path.of("src", "Streams.java")).forEach(System.out::println);
```

Könyvtárszerkezet tartalma (mélységi bejárással):
```java
Files.walk(Path.of("src", "Streams.java")).forEach(System.out::println);
```


## Közbülső műveletek
A folyamokon közbülső műveleteket végezhetünk, melyek új folyamokat adnak vissza.

### Leképezés (`map`)
A `map()` valamilyen a megadott `Function` lambdában lévő logika mentén átalakítja a folyam elemeit.

```java
Stream.of(0, 1, 2).map(n -> (n % 2 = 0)).forEach(System.out::println); // true false true
```

Specializált folyamok esetén a `map` művelet `UnaryOperator`-t vár, ha, azt szeretnénk hogy megváltozzon a `stream` elemtípusa a `mapToObj` műveletet kell használnunk.

```java
IntStream.rangeClosed(0, 2).mapToObj(n -> (n % 2 == 0)).forEach(System.out::println);
```

Illetve, ha egy specializált folyamból, egy másfajta specializált folyamba szeretnénk képezni, azt a `mapTo<Type>()` metódus használatával tehetjük meg.

```java
IntStream.rangeClosed(7, 9).mapToDouble(Math::sqrt).forEach(System.out::println);
```

### Csomagolás (`boxed`)
A specializált folyamokat általánossá tudjuk alakítani a `boxed()` metódussal.

```java
IntStream.rangeClosed(7, 9).boxed();
```

### Szűrés (`filter`)
Kiszűri a folyamból a predikátumot nem teljesítő elemeket.
```java
IntStream.rangeClosed(0, 2).filter(n -> (n % 2 == 0)).forEach(System.out::println); // 0 2
```

### `distinct()`
A `filter` egy speciális változata, mely az adott osztály `hashCode` és az `equals` implementációja alapján kiszűri az
elemek többszöri előfordulásait.

### Szűkítés (`limit`)
A folyam elemszámát egy megadott méretűre csökkenti.

```java
Stream.iterate(0, n -> n + 1).limit(10)
```

### Kihagyás (`skip`)
Megadott mennyiségű elem kihagyása a folyam elejéről.
```java
Stream.iterate(0, n -> n + 1).skip(2)
```

### `peek()`
Lehetőség van a folyam elemeinek megtekintésére, anélkül, hogy termináló műveletet használnánk.

```java
IntStream.rangeClosed(0, 2).peek(System.out::println); 0 1 2
```

### `takeWhile()`
Egy predikátumot vár, és addig vesz elemeket a folyamból amíg a feltétel teljesül.
```java
Stream.iterate(0, n -> n + 1).takeWhile(n -> n < 100);
```

### `dropWhile()`
Egy predikátumot vár, és addig dob el elemeket a folyamból amíg a feltétel teljesül.
```java
Stream.iterate(0, n -> n + 1).dropWhile(n -> n < 5).limit(5);
```

## Termináló műveletek

### `forEach()`
A folyam összes elemére végrehajtja a megadott `Consumer` lambdát.
```java
IntStream.rangeClosed(0, 3).forEach(n -> System.out.println(n));
```

### Gyűjtés
A folyam elemeiből lehetőségünk van különböző gyűjteményeket készíteni.

#### `toArray()`
```java
Arrays.toString(IntStream.rangeClosed(0, 2).toArray()); // [0, 1, 2]
```
Általános folyamok esetében ez kicsit furán működik, a Java generikus rendszere okozta korlátozások miatt.
```java
Object[] x = Stream.of(1,2,3).toArray();
```

Ez a probléma a következő módokon oldható meg:
```java
Integer[] y = Stream.of(1,2,3).toArray(n -> new Integer[n]);
Integer[] z = Stream.of(1,2,3).toArray(Integer[]::new);
```

#### `toList()`
Egy listát hoz létre a folyam alapján.
```java
List <Integer> list1 = Stream.of(1,2,3).toList(); //immutable
List <Integer> list2 = Stream.of(1,2,3).collect(Collectors.toList()); //mutable
```

#### `Collectors.toSet()`
Mutálható halmazt hoz létre a folyam alapján.
```java
Set<Integer> set = Stream.of(1,2,3,2).collect(Collectors.toSet()); // {1 2 3}
```

### Vizsgáló műveletek
A vizsgáló műveletek egy predikátumot várnak és egy logikai értéket adnak vissza.

* `allMatch()` Igazzal tér vissza, ha a feltétel a folyam összes eleme esetén igaz.
* `anyMatch()` Igazzal tér vissza, ha a feltétel a folyam legalább egy elemére teljesül.
* `noneMatch()` Igazzal tér vissza, ha a feltétel a folyam egyik elemére sem teljesül.

### `count()`
Megadja a stream elemszámát.

### Statisztikai műveletek

Specializált folyamok esetén érhetőek el.

* `min()`
* `max()`
* `sum()`
* `average()`

Illetve a `min()` és a `max()` használható általános folyamokkal is de ekkor meg kell adtunk egy `Comparator` lambdát.

Lehetőség van lekérni a statisztikák (beleértve: `count()`) együttes lekérésére is:

```java
IntSummaryStatistics statistics = IntStream.rangeClosed(0, 10).summaryStatistics();
```

### Keresés

#### `findFirst()`
Megadja a folyam első elemét egy [`Optional`](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html) objektumba csomagolva (ugyan ez történik az előbb említett `min` és `max` műveletek esetében is).
```java
IntStream.rangeClosed(0, 10).findFirst()
```

#### `findAny()`
A folyam egy tetszőleges elemét adja vissza `Optional`-be csomagolva.

