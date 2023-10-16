---
sidebar_position: 5
---

# Generikusok

Programozás során sokszor előfordul, hogy egy osztályt (általában egy adatszerkezetet) több különböző típusra is definiálni szeretnénk. A dinamikus nyelvekben ez nem okoz gondot, probléma nélkül tudunk a változóknak bármilyen típusú értéket adni. A Java statikus típusrendszerében ezt azonban nem tudjuk megtenni.

```java
class Pair { String s; char c }
class Pair { int i; boolean b }
```

Ezt nem tehetjük meg, mivel a Java megköveteli, hogy az osztálynevek egyediek legyenek. De ha megtehetnénk se feltétlen lenne ez egy elegáns megoldás.

Erre megoldásul kerültek bevezetésre Java 5-ben a generikusok. Ezen nyelvi funkció lehetővé teszi, hogy az osztályainkat és metódusainkat, egy konkrét típus nélküli absztrakcióval definiáljuk.

```java
// típusparaméterek
class Pair<T1, T2> {
  T1 elem1;
  T2 elem2;

  T1 getElem1() {
      return this.elem1;
  }

  public void setElem1(T1 elem1) {
      this.elem1 = elem1;
  }
}
```

:::tip
A típusparaméterek esetében a következő konvenciókat érdemes követni:
* `T` (type): általános típusparaméter
* `E` (element): gyűjtemény elemtípusa
* `K` és `V` (key, value): kulcs érték párok
:::


Miután megírtuk egy generikus osztályt, a következő módon példányosíthatjuk:

```java
Pair<String, Character> pair = new Pair<String, Character>();
```

:::tip
Java 7 óta a példányosítás jobb oldaláról elhagyhatóak a típusparaméterek:
```java
Pair<String, Character> pair = new Pair<>();
```
:::

:::danger
Típusparaméterként csak referenciatípusokat használhatunk! Ez a korlátozás a generikusok implementációjából fakad, szemben más nyelvekkel (például C++), a Java nem reifikációt (sablon példányosítás új implementációt hoz létre, a megadott paraméterekkel), hanem típus törlést használ.
:::

## Típustörlés

A **típus törlés (type erasure)** során, a a megadott sablon paraméterek törlődnek, helyükre egy konkrét referenciatípus kerül (például `Object`, de néha valami specifikusabb).

Tehát az előbbi kódunkból fordítást követően valami ilyesmi lesz:
```java
class Pair {
  Object elem1;
  Object elem2;

  Object getElem1() {
      return this.elem1;
  }

  public void setElem1(Object elem1) {
      this.elem1 = elem1;
  }
}
```

A sablonunk használata meg valami ilyesmire fog fordulni:
```java
Pair pair = new Pair();
pair.setElem1("abc");
// típuskényszerítések automatikusan bekerülnek a kódba
String s = (String) pair.getElem1(); 
```
Egyébként kompatibilitási okokból tudunk ilyet is csinálni:
```java
Map nameToBook = new HashMap();
```
Ez az úgynevezett nyers típus (raw type), használata kerülendő és erre a fordítóprogram is figyelmeztet.

## Altípusosság
:::danger
Legyenek `A`, `B` típusok, `C` egy generikus típus, és legyen `B` altípusa `A`-nak, ekkor `C<B>` nem altípusa `C<A>`-nak! 
Például `List<Integer>` nem altípusa `List<Object>`-nek!
:::

Ha ez nem így lenne, akkor a következő értelmetlen kód működne:
```java
List<Integer> ints = new ArrayList<>();
List<Object> objs = ints;
objs.add(new Object());
Integer value = ints.get(0); // integernek kéne lennie de így bármi lehet
```

Tömbök nem sablonokkal vannak implementálva, ezért kicsit máshogy működnek:

```java
Integer[] ints = new Integer[5];
Object[] objs = ints;
objs[0] = new Integer(4);
objs[1] = new Object(); // futási idejű hiba (ArrayStoreException)
```

## Típusparaméter megkötések
A típusparaméterekre megkötéseket tehetünk (**bounded type parameter**).

### `extends`
Azt ellenőrzi, hogy a `T` típus leszármazottja-e a megadott típusnak.

```java
class FooPrinter<T extends PrintWriter> {
    T writer;

    public FooPrinter(T writer) {
        this.writer = writer;
    }
    
    void print(String s) {
        writer.println(s + "foo");
    }
}
```

```java
FooPrinter<Integer> foo = new FooPrinter<>(...); //fordítási hiba
FooPrinter<PrintWriter> foo = new FooPrinter<>(new PrintWriter(...));
```
Ekkor értelemszerűen a típustörlés során `Object` helyett `PrintWriter` kerül a típusparaméter helyére.

Lehetőség van bonyolultabb korlátozások megadására is:
```java
// T leszármazottja Exception-nek és
// megvalósítja az Cloneable és Collection<Integer> interfészeket
class Foo<T extends Exception & Cloneable & Collection<Integer>> { ... }
```

A típusparamétereknek is lehetnek típusparaméterei:
```java
class Foo<T, Cmp extends Comparator<T>> { ... }
```

:::danger
A típusparaméterek egymástól függése nem alkothat kört!
:::

A `?` (wildcard) karakterrel jelölhetünk tetszőleges típust.

```java
void f(List<?> list) { ... }
```

Természetesen ezt lehet kombinálni az korábban látott `extend`-el, interfész megvalósítással viszont nem.

### `super`
Azt ellenőrzi, hogy a `T` típus szülője-e az adott típusnak.

### PECS szabály
"Producer extends, consumer super". Ha gyűjteménynél típusparaméter-megkötést használunk. Például ha egy lista elemit akarjuk elérni, akkor a lista a gyártó, tehát `List<? extends T>`, ha hozzáadni akarunk akkor mi vagyunk a gyártó tehát `List<? super T>`

```java
<T> List<? super Comparable<T>> f(List<? extends Comparable<T>> param) {
  List<? super Comparable<T> retval = new ArrayList<>();
  for (var elem : param) {
    retval.add(elem);
  }
  return retval;
}
```

## Metódusok

A metódusoknak tudunk saját típusparamétert adni, egy kicsit fura szintaxissal.
```java
static <T> boolean noSameObjs(List<T> elems) {...}
```
Meghívás:
```java
System.out.println(C.<String>noSameObjs(texts));
```
