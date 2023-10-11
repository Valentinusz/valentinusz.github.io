---
sidebar_position: 2
---

# Tesztelés

A tesztelésnek sok módszere létezik (például integrációs teszt, felhasználói teszt, formális helyességbizonyítás, ...), ezek közül a legelterjedtebb az egységteszt.

## Egységteszt
Program legkisebb önálló részeinek funkcionális helyességét ellenőrzik. Egység alatt érthetünk egy metódust egy osztályt, vagy akár egy teljes modult is.

Az egységteszteknek nem lehetnek külső függőségei (például fájlrendszer, adatbázis, hálózat).

Fekete dobozos megközelítést használ, azaz csak az adott egység nyilvános interfészét használja.

Tesztvezérelt fejlesztési módszer (először tesztek és azokhoz írjuk meg a kódot).

## JUnit
Teszt keretrendszer Java nyelvhez. A tesztesetek tipikusan három részből állnak:

* Arrange (teszteset előkészítése)
* Act (tesztelendő funkció használata)
* Assert (kapott eredmény vizsgálata).

```java
class ListTest {
	@Test // teszteket annotálni kell
	void test() {
	  List<Integer> list = new ArrayList<>(); // Arrange
	  int size = myList.size(); // Act
	  assertEquals(0, size); // Assert (expected, actual)
	}
}
```
Az eredmény vizsgálatára több metódus is használható:

* `assertEquals(expected, actual)` egyenlőségvizsgálat `equals` metódus alapján
* `assertTrue(actual)` és `assertFalse(actual)` logikai egyenlőségvizsgálat
* `assertArrayEquals(actuals)` tömb egyenlőségvizsgálat
* `assertNull(actual)` és `assertNotNull(actual)` `null` vizsgálat
* `assertThrows()` ls `assertNotThrows()` kivételdobás vizsgálata pédául `assertThrows(IllegalArgumentException.class, () -> { ... })`

Lehetőségünk van a teszteset manuális megbuktatására is a `fail()` metódussal.

Egy tesztesetben több `assert`-et is elhelyezhetünk a teszteset futtatási azonban az első sikertelen `assert`-nél meg fog állni.

Ha mégis le szeretnénk futtatni az összes vizsgálatot lehetőségünk van az `assert`-eket egy `assertAll()`-ba csomagolni:

```java
@Test
void test() {
	assertAll(
		() -> assertEquals(1, myList.size()),
		() -> assertEquals(123, myList.get(0))
	);
}
```



