Próbując wykonać kod z przykładu z błędem, ujrzymy w konsoli `Error: lis.map is not a function`.

Do stałej `lis` chcieliśmy przypisać listę z elementami `li` i do tego momentu kod wykonywany jest poprawnie.

Jednak `document.querySelector()` nie tworzy kolekcji w formie `Array`, a jako `NodeList`.

Obiekt `NodeList` w przeciwieństwie do obiektu `Array` nie zawiera metody `map`, więc wyrzucany jest błąd.

`NodeList` zawiera jednak metodę `forEach`, której możemy użyć zamiast `map`.

Użycie `map` było tutaj bezzasadne. Nie potrzebujemy wygenerować nowej tablicy z elementami na podstawie istniejącej.

Jeśli jednak mielibyśmy faktyczną potrzebę użycia `map` na obiekcie `NodeList` to musimy go skonwertować do `Array`, najprościej za pomocą konstrukcji `Array.from(lis)`.

Po takiej konwersji, lista węzłów (node'ów) będzie już obiektem `Array` razem ze wszystkimi dostępnymi w tym obiekcie metodami (jak np. map).
