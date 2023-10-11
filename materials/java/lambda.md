---
sidebar_position: 3
---

# Lambda kifejezések

Esetenként előfordul, hogy paraméterként egy konkrét lefuttatandó kódot, függvényt szeretnénk átadni. A Java
osztályalapú megközelítése, azonban nem teszi lehetővé, hogy önálló függvényeket definiáljunk.

Emiatt a függvényünket egy osztályba kell szerveznünk, amit példányosítanunk kell, vagy egy interface-t kell
implementálnunk.

```java
public interface Printable {
    void print();
}

public class Main {
    public static void main(String[] args) {
        Printable printable = new Printable() {
            @Override
            public void print() {
                System.out.println("asd");
            }
        };
    }
}
```

Láthatjuk, hogy ez rengeteg felesleges kóddal jár. Ezen probléma megoldására vezette be a Java 8 a lambda kifejezéseket.

Egy interfészt **funkcionális interfész**nek nevezünk, ha **egyetlen absztrakt metódussal rendelkezik**.

Jelölésére a `@FunctionalInterface` annotációt használjuk, ami bár opcionális megadása ajánlott, mivel így a fordító ellenőrizni tudja, hogy valóban funkcionális interfészt adunk meg.

```java
@FunctionalInterface
public interface Printable {
    void print();
}
```

```java
public class Main {
    public static void main(String[] args) {
        Printable lambda = () -> System.out.println("asd");
        lambda.print() // meghívás
    }
}
```

Általában nincs szükségünk saját funkcionális interfészek definiálására, mivel a legtöbb használati esetet a nyelv beépített interfészei lefedik.

## Funkcionális interfészek

### Function
A matematikából jól ismert függvény, egy bemenethez egy kimenetet rendel. Egyetlen metódusa az `apply()`.
```java
Function<Integer, Integer> increment = n -> n+1;
increment.apply(5);
```

:::danger
Bár logikusnak tűnne, sajnos a Java nem engedi meg azt, hogy a függvényt egyszerűen `increment(5)` módon hívjuk meg.
:::

### Consumer
Olyan lambda mely egy paraméterrel rendelkezik, de nem ad vissza értéket.

```java
Consumer<Integer> printer = n -> System.out.println(n);
printer.accept(5);
```

:::tip
Amikor egy lambda csak egy meglévő függvényt hív meg használhatunk metódushívás helyett **metódusreferenciát** is.

```java
Consumer<Integer> printer = System.out::println;
```
:::

### Supplier
Nincs paramétere és értéket ad vissza.
```java
Supplier<String> abc = () -> "abc...";
String abcString = abc.get();
```

### Runnable
Nincs paramétere, nem tér ad vissza értéket.
```java
Runnable r = () -> System.out.println("valami");
r.run();
```

### Predicate
Paraméterhez logikai értéket rendel.
```java
Predicate<Integer> gt5 = n -> n > 5;
gt5.test(6);
```

### UnaryOperator, BinaryOperator
A `Function` speciális esete, ahol a **paraméter** és a **visszatérési érték típusa azonos**.

```java
UnaryOperator<Integer> negate = n -> -1 * n;
negate.apply(5);
```

## Specializált interfészek
A Java generikus rendszere nem teszi lehetővé, hogy primitív típusok típusparaméterek legyenek. A wrapper osztályok
(például `Integer`) használata azonban rontja a teljesítményt, ezért az előbb említett funkcionális interfészek többsége
rendelkezik az `int`, `long`, és `double` primitív típusokra specializált változattal.

Például:
```java
IntUnaryOperator increment2 = n -> n+1;
increment2.applyAsInt(5); // metódusnevek eltérnek
```

## Többparaméteres interfészek
### Bővített interfészek

A `Function`, `Consumer`, `Predicate`, és `UnaryOperator` mind rendelkeznek két paraméterre bővített változatokkal.

Például:

```java
BiPredicate<Integer, Integer> greaterThan = (a, b) -> a > b;
greaterThan.test(5, 7);

BinaryOperator<Integer> add = (a, b) -> a + b;
add.apply(5, 3);
```

### Comparator
Háromirányú (-1, 0, 1 értékeket visszaadó) összehasonlítást végez a megadott paramétereken.
```java
Comparator<Integer> comparator = Integer::compareTo;
comparator.compare(5, 6);
```
