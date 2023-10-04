---
sidebar_position: 5
title: "Konfiguráció"
---

A `Driver` osztályban lehetőségünk van, a `Configuration` objektumhoz kulcs-érték párokat adni.

```java
public static void main(String[] args) throws Exception {
    Configuration conf = new Configuration();
    conf.setInt("x", 3); // típus specifikus metódusok 
    conf.setInt("minimumCount", 100);
    conf.set("required", "T");
}
```

A konfigurációs objektum lekérhető a `Context` osztály példányain keresztül, így visszakaphatjuk a korábban megadott
kulcs-érték párokat.

```java
public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {
    Configuration conf = context.getConfiguration();
    String required = conf.get("required");
    int k = conf.getInt("k", 3); // típus specifikus metódusok 
}
```

