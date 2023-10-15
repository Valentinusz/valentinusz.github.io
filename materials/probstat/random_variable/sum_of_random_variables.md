---
sidebar_position: 3
---

# Valószínűségi változók összege

Lehetőségünk van két valószínűségi változó összeadására. Ez különböző eloszlású változók esetében egy bonyolultabb,
művelet, amit ebben a jegyzetben nem fogunk taglalni. Bizonyos feltélek mellett az eddig tanult eloszlásokat követő
valószínűségi változók esetén, jóval egyszerűbb módon meghatározhatjuk a változók összeget.

## Független, normális eloszlású változók összege

Legyen $X$ normális eloszlású valószínűségi változó az $m_X$ és $\sigma_X$, míg $Y$ normális eloszlású valószínűségi
változó az $m_Y$ és $\sigma_Y$ paraméterekkel.

Ha $X$ és $Y$ függetlenek, akkor $X+Y$ is normális eloszlású, melynek várható értéke ($m_X + m_Y$) szórása pedig
$\sqrt{\sigma_X^2 + \sigma_Y^2}$.

:::tip PÉLDA
Legyen $X \sim N(2, \sqrt{5}^2)$ és $Y \sim N(5, 3^2)$ függetlenek és legyen $W = 3X - 2Y + 1$. Számítsuk ki
$\mathrm{E}(W)$-t és $\mathrm{D}^2(W)$-t!

Mivel a változók függetlenek és normális eloszlásúak, használhatjuk az előbbi összefüggéseket. Tudjuk továbbá, hogy a
keresett várható érték és szórásnégyzet pontosan az $m$ és $\sigma^2$ paraméterekkel egyeznek meg.

$$
\mathrm{E}(W) = m_{3X-2Y+1} = 3 \cdot 2 + (- 2 \cdot 5) + 1 = -3
$$
$$
\mathrm{D}^2(W) = \sigma_{3X-2Y+1}^2 = (3 \cdot \sqrt{5})^2 + (2 \cdot 3)^2 + \mathrm{D}^2(1) = 45 + 36 + 0 = 81
$$
::::::note
$\mathrm{D}^2(1)$ azért 0, mert $\mathrm{D}^2(X) = \mathrm{E}(X^2) - \mathrm{E}^2(X)$. Mivel esetünkben $E(1) = 1$,
ezért $\mathrm{D}^2(1) = 1 - 1 = 0$.

::::::

:::

## Független, Poisson eloszlású változók összege

Legyenek $X$ és $Y$ független, Poisson-eloszlású valószínűségi változók, rendre a $\lambda_X$ és $\lambda_Y$
paraméterekkel. Ekkor $(X+Y)$ is Poisson eloszlású, $(\lambda_X + \lambda_Y)$ paraméterrel.

## Független, Binomiális eloszlású változók összege

Legyenek $X$ és $Y$ olyan független valószínűségi változók, amik binomiális eloszlást követnek az $n_X$ és $p$, illetve
az $n_y$ és $p$ paraméterekkel (figyeljük meg ,hogy a p paraméter közös). Ekkor $(X+Y)$ is binomiális eloszlású,
$(n_X + n_Y)$ és $p$ paraméterekkel.