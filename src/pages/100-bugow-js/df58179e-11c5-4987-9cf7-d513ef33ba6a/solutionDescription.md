Polegając na dedukcji w języku JavaScript, można wpaść w pułapkę.

Logicznym wydaje się, że jeśli `null` nie jest równy `0` i nie jest też większy `>` od `0`, to nie powinien być większy lub równy `0`, a jednak jest.

Powodem jest niespójność działania algorytmów porównania.

Algorytm porównania `==`, jeśli napotka na operand `null` lub `undefined` to aby zwrócić prawdę z takiego porównania, wymaga aby drugi operand również był `null` albo `undefined`.

`null` może być równy tylko wartości `null`. Ten sam algorytm porównania `==` wprowadza jednak konwersję innych typów danych np. wartości logicznych `true` i `false`, sprowadzając je do wartości liczbowych `1` i `0`.

Algorytm stojący za porównaniem _większy niż_ `>` działa inaczej.

Najpierw podmienia on miejscami operandy i stosuje algorytm porównanie _mniejszy niż_ `<` (co nie ma tutaj żadnego znaczenia).

Później natomiast, UWAGA, konwertuje wartości logiczne `true`/`false` na `1`/`0`, ale TAKŻE wartość `null` na `0`.

Wartość `undefined` konwertuje natomiast na `NaN`.

Operator _większy lub równy_ `>=` robi z `null` to samo, więc finalnie wyrażenie zostaje zamienione na `0 >= 0`, co staje się prawdą.
