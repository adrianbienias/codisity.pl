Wszystkie porównania zwrócą wartość `true`.

Nie są to jednak wartości, których intuicyjnie moglibyśmy się spodziewać po użyciu operatora `<`.

Porównanie _mniej niż_ oraz analogicznie przeciwstawne _więcej niż_ działa intuicyjnie poprawnie dla wartości liczbowych.

Dla porównania ciągów znaków intuicja mija się jednak z algorytmem, który odpowiada za faktyczne porównania.

Jeśli operandami są ciągi znaków, porównywane są wartości liczbowe przypisane do znaków w kodowaniu _Unicode_.

Znak `"a"` w kodowaniu _Unicode_ to liczba `97`.

Znak `"b"`, odpowiada liczbie `98`.

`97 < 98` jest więc twierdzeniem prawdziwym.

Gdy ciągi znaków składają się z większej ilości znaków są one porównywane ze sobą kolejno, znak po znaku.

`"b" < "b"` zwróciłoby fałsz, bo fałszywe jest stwierdzenie `98 < 98`.

`"b" < "bz"` zwraca prawdę, bo kolejny znak, `"z"` jest większy niż brak znaku po lewej stronie porównania.

`"bxz" < "bz"` zwraca prawdę bo `"x"` w kodowaniu _Unicode_ ma niższą wartość (kod `120`) niż `"z"` (kod `122`), innymi słowy występuje wcześniej w alfabecie. Trzecie `z` zostaje pominięte.

Gdy zamiast liter użyjemy liczb, ale będą one zapisane w postaci ciągu znaków, to sytuacja będzie wyglądała tak samo.

`"34" < "5"` jest prawdziwe, bo `"3"` (kod `51`) jest mniejsze niż `"5"` (kod `53`). `"4"` zostaje znakiem pominiętym w porównaniu.

Nie ma znaczenia ile kolejnych znaków dodamy oraz jakie to będą znaki, `"3499999999" < "5"`.

Zwróci tak samo prawdę, ponieważ _Unicode_ `"3"` (`51`) jest mniejszy niż _Unicode_ `"5"` (`53`).
