---
sidebar_position: 5
title: "Előzetes / Utólagos műveletek"
---

A `Mapper` és a `Reducer` osztályban definiálva van egy `setup()` és egy `cleanup()` művelet, melyek az adott Map/Reduce
task futtatása előtt vagy után kerülnek végrehajtásra.

```java
public class Mapper<KEYIN, VALUEIN, KEYOUT, VALUEOUT> {
    ...
    protected void setup(Context context) throws IOException, InterruptedException { }
    protected void cleanup(Context context) throws IOException, InterruptedException { }
    ...
}
```

