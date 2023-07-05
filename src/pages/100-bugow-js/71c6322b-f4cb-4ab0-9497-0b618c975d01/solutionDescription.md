Wszystkie wywołania metody `includes()` zwrócą prawdę.

Wartości `NaN` oraz `null` zostaną poprawnie znalezione w tablicy.

Wywołując metodę `indexOf()` dostaniemy jednak wartość `-1` dla próby odnalezienia indeksu dla wartości `NaN`.

Metoda `indexOf()` dla odnajdywania elementów używa tego samego algorytmu co operator porównania ścisłego `===`.

Wartości `NaN` porównywane z jakąkolwiek wartością (nawet z wartością `NaN`) zawsze zwracają fałsz.

Wywołując `indexOf()` z argumentem `NaN` zwrócone zostanie zawsze `-1` czyli informacja, że wartość nie została znaleziona w tablicy.

Aby rozwiązać ten problem musimy użyć innej metody np. `findIndex()` i samodzielnie skonstruować funkcję sprawdzającą pod kątem wystąpienia wartości `NaN`.
