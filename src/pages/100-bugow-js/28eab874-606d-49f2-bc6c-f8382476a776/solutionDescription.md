Metoda `split()` dzieli ciąg znaków formując tablicę z fragmentami ciągów znaków.

Podział zostaje wykonany na podstawie wartości rozdzielacza, przekazanego jako argument metody.

Przykładowo, `"a b c".split(" ")`, podzieli ciąg znaków `"a b c"` używając białego znaku spacji jako rozdzielacza.

Uformowana zostanie tablica `["a", "b", "c"]`.

`"".split(" ")` zwraca tablicę z jednym elementem pustego ciągu znaków `[""]`.

Mimo, że nie ma czego dzielić (pusty ciąg znaków), przekazanie rozdzielacza powoduje, że następuje podział, którego efektem jest pusty ciąg znaków.

W przypadku próby podziału pustego ciągu znaków, element rozdzielacza jest nieistotny, zawsze wygeneruje tablicę z jednym elementem pustego ciągi znaków.

`"".split("?")`, `"".split("asd")`, `"".split("-")`, bez znaczenia, zawsze zwróci `[""]`.

Z kolei `"".split("")` to próba podzielenia pustego ciągu znaków za pomocą pustego znaku rozdzielacza.

Jest to jedyna sytuacja, w której w efekcie działania metody `split()`, zostaje zwrócona pusta tablica.
