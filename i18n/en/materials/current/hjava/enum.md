---
sidebar_position: 1
---

# A felsorolási típus

A Java nyelvben az felsorolás egy speciális osztály, mely jobb eszközt ad értékek egy jól meghatározott halmazának (például francia kártya színei) ábrázolására.

```java
enum CardSuit {
	SPADES, HEARTS, CLUBS, DIAMONDS;
}
```

Bizonyos nyelvekben nincs `enum`, ezen nyelvek esetében valami ilyesmivel tudjuk helyettesíteni ezt a konstrukciót:

```java
class WorseCardSuit {
	final static int SPADES = 0;
	final static int HEARTS = 1;
	final static int CLUBS = 2;
	final static int DIAMONDS = 3;
}
```

Fontos megjegyezni, hogy a háttérben a Java fordító is valami ilyesmit állít elő, annyi különbséggel hogy a `final static` adattagok típusa `CardSuit` lesz. Tehát szemben a C nyelvvel az `enum` elemek mögöttes értéke nem szám, hanem objektum. Ezen objektum struktúrája az felsorolási típus írásakor is megadható. 

```java
enum CardSuit {
    SPADES("pikk"), HEARTS("szív"), CLUBS("treff"), DIAMONDS("káró");

    private final String hungarianName;

    CardSuit(String hungarianName) {
        this.hungarianName = hungarianName;
    }

    public String getHungarianName() {
        return this.hungarianName;
    }

    @Override
    public String toString() {
        return this.getHungarianName();
    }
}
```
Látható, hogy megadhatunk adattagokat konstruktort, írhatunk és felüldefiniálhatunk metódusokat (például amiket mint minden más osztály a `java.lang.Object`-ből megörököl).

Lehetőség van elemenkénti felüldefiniálásra is:
```java
HEARTS("szív") {
  @Override
  public Color getColor() {
    return Color.RED;
  }
},
```

## Viselkedés
A felsorolási típusokban szereplő értékek futási időben már ismertek. 

Minden `enum` elemből csak egy jön létre memóriában, ezért a `==` operátor biztonságosan használható egyenlőségvizsgálatra.

Mivel az `enum`-ok értékek jól meghatározott halmazát reprezentálják, nem lehet belőlük új osztályokat származtatni.

Használható `switch`-ben.

## Műveletek
`values()` megadja az `enum` elemeit egy tömbben:

```java
CardSuit.values()
```

`ordinal()` megadja az adott felsorolási elem deklarációbeli pozícióját:
```java
CardSuit.DIAMONDS.ordinal() // 3
```

`valueOf(String name)` megadja azt az `enum` elemet aminek a neve a megadott paraméterrel egyenlő, `IllegalArgumentException`-t dob, ha nem létezik.
```java
CardSuit.valueOf("DIAMONDS") // referencia CardSuit.DIAMONDS-re
CardSuit.valueOf("asd") // IllegalArgumentException
```
