---
sidebar_position: 0
slug: "/bigdata"
title: "Bevezetés"
---

# Big Data architektúrák és elemző módszerek 

:::danger
Ez a tananyag folyamatosan frissül, érdemes ennek tudatában a felkészülés alapjául választani. Észrevétel (pontatlanság, helyesírási hiba) esetén nyugodtan
nyiss a [tananyagos repository](https://github.com/Valentinusz/elte-ik-bsc)-ban egy issue-t!
:::

Big Data alatt, olyan adathalmazokat értünk, melyek **méret**e és/vagy **komplexitás**a miatt a hagyományos adatfeldolgozó módszerek eredménytelenné esetlegesen használhatatlanná válnak.

Jellemzői:
- **mennyiség** (Volume): hatalmas mennyiségű adat
- **sebesség** (Velocity):  szinte folyamatos adatáramlás
- **változatosság** (Variety): rengeteg formátum
- **pontosság** (Veracity): bizonytalanság az adat igazságtartalma felé
- **érték** (Value): az adatból értékes információ nyerhető ki

:::tip Érdekesség
Csak a Google kereső naponta 10 milliárd átlagosan 20 KB méretű weboldalt dolgoz fel. Ez 200TB adatot jelent, ami egy 50MB/s olvasási sebességű lemez esetén 46 napba telne.
:::


Jobb hardver használatával növelhető a számítási kapacitás (vertikális skálázás), hosszútávon az ilyen jellegű fejlesztés nem fenntartható.

Érdemes sokkal inkább egy elosztott, több gépet használó megoldásban gondolkodni, melyek így képesek párhuzamos számításokat végezni. Ez a rendszer még jobban skálázható ugyanis kapacitásnövelés esetén csak új rendszerrel kell bővíteni a meglévő klasztert (horizontális skálázás).
