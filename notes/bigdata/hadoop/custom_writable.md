---
sidebar_position: 7
title: Saját Writable
---

Lehetőségünk van saját `Writable` osztály létrehozására, ehhez a `WritableComparable` generikus interfészt kell
megvalósítanunk.

```java
public interface WritableComparable<T> extends Writable, Comparable<T> { }
```

Ez az interfész nem tartalmaz metódusokat de kiterjeszt két másik interfészt. Ezek műveleteit kell megvalósítanunk:

```java
public interface Writable {
    void write(DataOutput var1) throws IOException;
    void readFields(DataInput var1) throws IOException;
}
```

Ezen metódusok határozzák meg, hogy egy kell az adott adott `Writable` osztály példányait írni és olvasni.

```java
public interface Comparable<T> {
    public int compareTo(T o);
}
```
Ez a metódus teszi majd lehetővé, hogy az osztály példányai összehasonlíthatóak legyenek.

A metódust úgy kell megírni, hogy egy egész számot adjon vissza, ami:
- -1: Ha `this` kisebb mint `o`
- 0: Ha a két objektum egyenlő
- 1: Ha `this` nagyobb mint `o`

:::tip
Összetettebb típusok esetén érdemes a metódust az előre definiált `compareTo` metódusokra (pl. `Double::compareTo`)
visszavezetni.
:::

Készítsünk egy olyan `Writable` osztályt, mely egy órát és egy hőmérséklet tárol.

:::info
Az osztály teljes kódja elérhető
[itt](https://github.com/Valentinusz/elte-ik-bsc/blob/main/5/bigdata/hadoop/maxTemp/src/temp/TemperatureWritable.java).
:::

```java
public class TemperatureWritable implements WritableComparable<TemperatureWritable> {
    public Text hour;
    public DoubleWritable temperature;
    
    public TemperatureWritable() {
        this.hour = new Text("");
        this.temperature = new DoubleWritable(Double.MIN_VALUE);
    }
    
    public TemperatureWritable(String hour, double temperature) {
        this.hour = new Text(hour);
        this.temperature = new DoubleWritable(temperature);
    }
    
    public void readFields(DataInput in) throws IOException {
        this.hour.readFields(in);
        this.temperature.readFields(in);
    }
    
    public void write(DataOutput out) throws IOException {
        this.hour.write(out);
        this.temperature.write(out);
    }
    
    public int compareTo(TemperatureWritable o) {
        return this.temperature.compareTo(o.temperature);
    }
}
```
:::danger
A helyes működéshez kötelesek vagyunk megadni egy paraméter nélküli konstruktort, mely valamilyen kezdőértéket ad a
mezőknek.
:::

A implementált műveleteket egyszerűen az adattagok osztályaiban már definiált műveletekre vezetjük vissza.

A fájlba történő írás formátumát a `toString()` metódus felüldefiniálásával tudjuk szémelyre szabni:

```java
@Override
public String toString() {
    return this.hour + ": " + this.temperature + "C";
}
```
