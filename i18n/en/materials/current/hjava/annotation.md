---
sidebar_position: 7
---

# Annotációk

Az annotáció egy speciális eszköz, mellyel metaadatokat rendelhetünk a programunk elemeihez.

 ```java
 @Override
 public String toString() {...}
 ```
 
 Az annotációk rendelkezhetnek paraméterrel is.
 
 ```java
 @ParameterizedTest
 @CsvSource({"apple, 1", "orange, 2"})
 void test(String fruit, int cost) {...}
 ```

## Annotáció definiálása

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.FIELD})
public @interface Annot { ... }
```

### `@Target()`
Annotáció célpontja. Lehetséges értékeket az `ElementType` felsorolás tartalmazza.
```java
@Target(ElementType.TYPE) 
public @interface Annot {...}
```
Ez például, osztály, interfész (beleértve annotációs interfészeket), felsorolás, vagy rekord deklarációra helyezhető.

Több célpont is megadható: `@Target({ElementType.TYPE, ElementType.FIELD})`

### `@Retention()`
Megadja meddig legyen megtartva az annotáció.

```java
@Retention(RetentionPolicy.RUNTIME) 
public @interface Annot {...}
```

* `RetentionPolicy.SOURCE` fordító nem tartja meg
* `RetentionPolicy.CLASS` fordító megtartja, de futási időben már nincs meg
* `RetentionPolicy.RUNTIME` futási időben is meg van tartva (esetek nagy részében ezt használjuk)



