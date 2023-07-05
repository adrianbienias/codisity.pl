Instrukcja warunkowa `if (new Boolean(false))` zostanie wykonana i do konsoli zostanie zalogowana wartość `"Third"`.

Pozostałe instrukcje nie wykonają się.

`if (false)` powinno być oczywiste. Instrukcja nie wykonuje się, bo przekazany warunek jest fałszywy.

Funkcja `Boolean` zwraca wartość logiczną `true` lub `false` w zależności od przekazanego argumentu i jego ewentualnej konwersji na wartość logiczną, jeśli jest innego typu.

`Boolean(false)` zwraca wartość `false` więc tutaj mamy tą samą sytuację co w pierwszej instrukcji.

`new Boolean(false)` może wydawać się ekwiwalentem `Boolean(false)`, ale użycie słowa kluczowego `new` powoduje utworzenie nowego obiektu, traktując funkcję `Boolean()` jako konstruktor obiektu,

`new Boolean()` zwraca więc obiekt, a nie wartość logiczną.

Obiekty z natury są wartościami prawdziwymi (nie ma znaczenia, że wprowadziliśmy do konstruktora wartość `false`), więc trzecia instrukcja warunkowa zostaje wykonana.

Czwarta i ostatnia instrukcja nie zostaje wykonana bo podwójny wykrzyknij działa tak samo, jak funkcja `Boolean()`.

Z `!false` generowana jest wartość przeciwna `true`, a następnie z `!true`, wartość przeciwna, czyli `false`.
