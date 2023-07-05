`Set` w przeciwieństwie do `Array` to zbiór unikalnych wartości.

Wielkość zbioru `set1` będzie wynosiła `3` elementy, mimo że na pierwszy rzut oka elementy wydają się nie być unikalne i zbiór powinien zawierać tylko `1` element.

W przypadku obiektów (w tym tablic) każdy traktowany jest jako unikalny element, bo o unikalności świadczą adresy referencyjne z pamięci RAM.

Gdybyśmy na początku przypisali tablicę do zmiennej np. poprzez \
`const table = ["a", "b", "c"]`, to kilkukrotnie dodając ją poprzez referencję tj. `set1.add(table)`, tablice nie duplikowałyby się w zbiorze i finalnie `set1.size` zwróciłoby wartość `1`.

W `set2` metoda `join()`, łączy elementy z tablic (domyślnie za pomocą przecinka), tym samym tworząc wartości prymitywne typu ciąg znaków.

Wartości prymitywne są porównywane poprzez wartość, a nie referencję, więc finalnie `set2.size` zwraca `1` jako łączą ilość elementów zbioru.

Aby nieco ułatwić sobie zrozumienie działania unikalności elementów w `Set`, można posłużyć się operatorem unikalnego porównania.

Jeśli któryś z elementów porównywany z innym elementem za pomocą operatora `===` zwróci prawdę, to znaczy, że taki element już jest w zbiorze i kolejny nie zostanie dodany.

`["a","b","c"] === ["a","b","c"]` zwróci `false`, więc elementy zostają dodawane do zbioru jako unikalne.

Wyjątkiem jest `NaN`, który jako jedyny w porównaniu z samym sobą zwraca fałsz, ale mimo to `Set` nie pozwala na umieszczenie więcej niż jednej wartości `NaN` w zbiorze.

Ostatni przykład `set3.size` zwraca wielkość zbioru jako `4` elementy, ponieważ bezpośrednie przekazanie ciągu znaków do funkcji konstruktora `Set` rozbija ciąg znaków na zbiór pojedynczych znaków.

Ciąg znaków można więc zapisać również jako `["t","r","a","l","a","l","a","l","a"]`.

Widać wtedy wyraźnie, że niektóre znaki się powtarzają, przez co zostają zignorowane i finalnie zbiór składa się jedynie z `4` unikalnych elementów `["t","r","a","l"]`.
