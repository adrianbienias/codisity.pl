W przykładzie z błędem okazuje się, że `fruits` i `favFruits` zwrócą ten sam zbiór 3 elementów `["apple", "orange", "banana"]`.

Powodem takiego efektu jest charakter działania metody `push()`. Mutuje ona tablicę, tj. zmienia jej oryginalną zawartość.

O funkcjach/metodach, które mają tego typu działanie, mówi się, że generują efekty uboczne. Jest to z reguły sytuacja niepożądana.

Dodatkową pułapką w błędnym kodzie, może być też fakt, że deklarujemy nową stałą `newArray`, komunikując chęć stworzenia kopi tablicy `array`.

W JavaScript odwoływanie do tablic odbywa się przez referencję, czyli przez adres, pod którym tablica została zapisana w pamięci RAM.

`const newArray = array` nie tworzy więc kopi tablicy, a jedynie alias (nową nazwę), wskazując na tą samą tablicę z pamięci.

Aby naprawić przykładowy kod, możemy użyć np. metody `concat()`, która nie generuje efektów ubocznych i zwraca **nową** tablicę.

Po takiej zamianie, `fruits` i `favFruits` zalogują do konsoli właściwe elementy z dwóch różnych tablic.
