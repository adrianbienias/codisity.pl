Rozsiane tablice (_sparse arrays_) to takie, które zawierają puste miejsca (_slot_'y).

Tablice rezerwują w pamięci miejsce na dane, ale żadnych danych w tych miejscach nie przechowują.

Nie są to wartości `undefined` czy `null`. To dosłownie puste miejsca.

Sprawdzenie własności `length` na takiej rozsianej tablicy zwróci całkowitą liczbę miejsc, które tablica rezerwuje w pamięci.

Wszystkie trzy tablice `arr1`, `arr2`, `arr3`, zwracają wartość `length` równą `5`.

Wywołanie metody `forEach()` na tych tablicach nie iteruje jednak pustych miejsc.

Dla tablic `arr1` i `arr2` nie zostaną zwrócone żadne indeksy `i` z takich iteracji.

Tablica `arr3` ma 3 elementy zajęte i 2 puste.

Zgłoszą się tylko zajęte elementy, logując do konsoli indeksy `0`, `2`, `4`.

JavaScript zachowuje się tutaj niespójnie. Część metod pomija puste miejsca, np. `forEach()`, `map()`, `sort()`, ale część traktuje puste miejsca jako wartość `undefined`, np. `entries()`, `fill()`, `find()`.

Przykładowo `arr1.find((e, i) => console.log(i))`\
zwróciłoby `0`, `1`, `2`, `3`, `4`.
