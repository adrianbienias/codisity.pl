Pierwszy i trzeci sposób nie zadziała.

Pojawienie się kropki bezpośrednio po wartości liczbowej w `123.toString()` zostaje zinterpretowane jako liczba zmiennoprzecinkowa. Wystąpienie `toString()` po kropce, nie jest wartością liczbową, której JavaScript się spodziewa w liczbie zmiennoprzecinkowej np. `123.456`.

Sytuację naprawia umieszczenie liczby w nawiasie `(123).toString()`, przez co nawias zamykający wyraźnie blokuje możliwość interpretacji kropki jako części liczby zmiennoprzecinkowej.

Innym wariantem może być wyraźne zadeklarowanie liczby zmiennoprzecinkowej z zerową wartością dziesiętną `123.0.toString()` i taka konstrukcja również zadziała prawidłowo.

Zaskoczeniem może być poprawne działanie poniższych przykładów:

```
123..toString()
123 .toString()
123 . toString()
```

Warto zwrócić uwagę, że `123. toString()` już poprawnie nie zadziała.

`123.` jest poprawną liczbą, tak samo jak `123.0`.

`123 .` poprawną liczbą nie jest podobnie jak `123 .0`.

Wywołując `123. toString()` przekazujemy więc do metody `log()` dwa parametry: liczbę oraz samodzielne wywołanie funkcji `toString()`.

JavaScript spodziewa się więc `console.log(123., toString())`.

`123..toString()` daje nam zapis poprawnej liczby `123.` oraz wywołanie na niej metody `toString()`.

`123 .toString()` dla JavaScript oznacza wystąpienie liczby całkowitej, bo liczby zmiennoprzecinkowe nie mogą mieć białych znaków pomiędzy separatorem dziesiętnym.

Skoro jest to liczba całkowita to wywołanie `toString()` zostaje już poprawnie zinterpretowane. Nieważna jest też ilość białych znaków, które występują po liczbie całkowitej oraz, uwaga, po akcesorze (kropce), dającym dostęp do metody.

`123    .    toString()` wszystko gra 🤯
