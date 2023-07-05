Przypisanie wartości do ujemnych indeksów w tablicy powoduje ukrycie tych elementów dla większości metod w prototypie `Array`.

Przypisując wartości do ujemnych indeksów tablicy, nie zobaczymy tych wartości logując do konsoli tablicę, czy sprawdzając jej długość.

Możemy jednak ręcznie wyciągać wartości odwołując się do tych indeksów np. `letters[-2]`.

Indeks `-1` jest zwracany przez niektóre metody (w tym `indexOf()`) jako informacja o braku szukanej wartości w tablicy.

Wywołując przykładowo `letters.indexOf("x")` szukalibyśmy ciągu znaków `"x"` w tablicy `letters` z zamiarem otrzymania indeksu szukanego elementu.

Jeśli nie zostaje on znaleziony, metoda `indexOf()` zwraca `-1`.

Możemy skorzystać z tej własności zacieniając jednocześnie faktyczne działanie kodu.

Wywołując `letters.indexOf(9)` szukamy indeksu elementu o wartości `9`, czyli nie istniejącego w naszej tablicy.

Nie ma znaczenia co przekażemy jako argument do metody `indexOf()`, tak długo jak będzie to wartość, która w tablicy nie występuje, zwrócony zostanie indeks `-1`.

`letters[letters.indexOf(9)]` to tak naprawdę `letters[-1]`, czyli pobranie elementu z tablicy o indeksie `-1`.

Domyślnie w tablicy nie powinno być elementu pod takim indeksem, ale my przypisaliśmy wcześniej wartość `z` to tego indeksu.

Być może lepiej byłoby gdyby metoda `indexOf()` zwracała np. `undefined` w momencie gdy szukana wartość nie zostaje odnaleziona.

Nie byłoby wtedy furtki dla nie do końca intuicyjne działającego kodu.
