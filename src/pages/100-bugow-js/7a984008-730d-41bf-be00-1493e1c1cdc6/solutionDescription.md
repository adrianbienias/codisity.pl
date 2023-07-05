JavaScript posiada w obiekcie `Number` własność `MIN_VALUE`, która zwraca najniższą, zmiennoprzecinkową, dodatnią wartość liczbową, jaką może obsłużyć.

Innymi słowy, jest to najmniejsza dodatnia wartość liczbowa bliska 0.

Liczba ta może się różnić w zależności od silnika implementującego specyfikację ECMAScript.

Specyfikacja ECMAScript nie narzuca konkretnej liczby, a jedynie wskazuje, że powinna to być najmniejsza liczba, jaką jest w stanie obsłużyć, w postaci liczby zmiennoprzecinkowej, implementacja danego języka.

Najpopularniejszy silnik implementujący JavaScript, V8, jest w stanie obsłużyć liczbę dodatnią 2<sup>-1074</sup>, czyli 5E-324 (w zapisie naukowym), lub inaczej, 5⨉10<sup>-324</sup>.

`5e-323 > Number.MIN_VALUE` zwróci prawdę.

`5e-324 > Number.MIN_VALUE` zwróci fałsz.

`5e-324 === Number.MIN_VALUE` zwróci prawdę.

Jednak w przypadku operacji matematycznych nie możemy polegać na tej wartości, podobnie jak w przypadku operacji na liczbach zmiennoprzecinkowych.

Niedokładne ich zaokrąglanie pojawia się np. przy działaniu\
`1 + 5e-16`\
i zamiast\
`1.0000000000000005`\
dostajemy\
`1.0000000000000004`

`1 + 5e-17` zwróci już tylko `1` i wraz ze zmniejszaniem liczby zmiennoprzecinkowej poprzez dopisywanie kolejnych miejsc po przecinku, będzie dalej otrzymywać zaokrąglony wynik dodawania, `1`.

`0 / 0` zwróci nam `NaN`, ale `minVal / minVal` zwróci `1`, wyraźnie pokazując, że `minVal` zerem nie jest.

`0 * 0` zwróci `0`, niestety tak samo jak `minVal * minVal`, co może sugerować, że `minVal` zerem jednak jest.

W rzeczywistości jest to jednak pułapka i to ten sam problem, który dotyka operacji matematycznych wykonywanych na wszystkich zmiennoprzecinkowych liczbach, we wszystkich językach programowania.
