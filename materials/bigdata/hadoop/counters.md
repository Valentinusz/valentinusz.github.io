---
sidebar_position: 4
title: "Számlálók"
---

A Hadoop a MapReduce job futása során statisztikákat készít, melyeket úgynevezett számlálókban tárol. A számlálókra
a Context osztály példányain keresztül tudunk hivatkozást szerezni. tudjuk kiolvasni.

Például:

```java
protected void cleanup(Context context) throws IOException, InterruptedException {
    org.apache.hadoop.mapreduce.Counter counter = context.getCounter(TaskCounter.CPU_MILLISECONDS);
    long milliSeconds = counter.getValue();
    ...
}
```

:::danger
A számlálók értékei a számítógépek között csak a job legvégén kerülnek szinkronizálásra, sőt még csak egy számítógép
esetén is a különböző task-ok között az értékek eltérőek lehetnek.

Ezért a programlogikában nem támaszkodhatunk a számlálók pontosságára.
:::

## Beépített számlálók

A beépített számlálók 5 csoportra vannak osztva. Minden számlálócsoport egy felsorolás, a specifikus `enum` elemek az
egyes számlálók azonosítói.

| Számláló         | Tartalom                                                            |
|------------------|---------------------------------------------------------------------|
| TaskCounter      | Task-ok (map, reduce, shuffle stb.) statisztikái.                   |
| FileSystem       | Fájlrendszer statisztikák például írott vagy olvasott bájtok száma. |
| FileInputFormat  | BYTES_READ - beolvasott bájtok száma                                |
| FileOutputFormat | BYTES_WRITTEN - írt bájtok száma                                    | 
| JobCounter       | Job szintű információk (pl. sikertelen mapek száma).                |



## Saját számláló 

Lehetőségünk van saját számlálót is definiálni, ehhez egyszerűen egy a Hadoop által még nem használt `enum` értéket kell
átadnunk a `Context` `getCounter()` metódusának. Nyilvánvalóan ennek a kezeléséről nekünk kell gondoskodnunk. 

```java
enum CustomCounters {
    CUSTOM_COUNTER;
}
```

```java
protected void cleanup(Context context) throws IOException, InterruptedException {
    Counter counter = context.getCounter(CustomCounters.CUSTOM_COUNTER);
    counter.setValue(0); // beállítás
    counter.increment(5); // növelés
    long a = counter.getValue(); // a = 5
}
```

