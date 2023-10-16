---
sidebar_position: 6
---

# A rekord típus

Java 14 bevezetett egy új osztálytípust a `record`-ot, mely lehetővé teszi, hogy egyszerűbben definiáljunk
**nem mutálható osztály**okat.

```java
public record Point(int x, int y) {
  // természetesen definiálhatunk metódusokat
  public double distance(Point other) {
      if (other == null) {
          throw new IllegalArgumentException();
      }
      return Math.sqrt(Math.pow(other.x() - this.x(), 2) + Math.pow(other.y() - this.y(), 2));
  }
}
```

Ekkor legenerálásra kerülnek a következők:

```java
Point point = new Point(5, 3); // minden adattagot tartalmazó konstruktor
point.x(); // getter x-hez
point.y(); // getter y-hoz
point.hashCode();
point.equals(new Point(5, 3));
point.toString();
```



