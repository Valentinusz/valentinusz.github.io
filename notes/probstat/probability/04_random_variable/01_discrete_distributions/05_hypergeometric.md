# Hipergeometriai eloszlás

Legyen $m$ elemünk, melyből $s$ elem különleges. Az $m$ elemből visszatevés nélkül $n$ elemet választunk. Ekkor a
hipergeometriai eloszlás azt vizsgálja, mennyi a valószínűsége annak, hogy éppen $k$ különleges elemet választunk ki.

:::note
A hipergeometriai eloszlás lényegében a lottóhúzás általánosításaként fogható fel.
:::

A Képlet előállításához a klasszikus "kedvező per összes" képletet fogjuk használni.

$n$ elemet $m$ elemből összesen $m \choose n $ módon tudunk kiválasztani. $s$ különleges elemből pontosan $k$ elemet
$s \choose k$ módon. Végül a maradék nem különleges elem $m-s \choose n-k$ módon válaszható ki. 

:::info[Definíció]
Legyen $m, s \in \mathbb{N}$ és legyen $n \in \mathbb{N}$ úgy, hogy $n \le s$ és $n \le m-s$ teljesül. $X$-et Hipergeometriai eloszlásúnak nevezzük, ha sűrűségfüggvénye
$$
\pr(X = k) = \frac{{s \choose k}{m-s \choose n-k}}{m \choose n} \quad (k=0,1,\dots,n)
$$
:::
