W konsoli ujrzymy `["a", "b", "c", "d", "e", "f"]`.

`letters.splice(1, 1)` usuwa z tablicy jeden element pod indeksem `1` (czyli `"z"`).

`letters.splice(3, 0, "d")` dodaje do tablicy element o wartości `"d"` w indeksie `3`, bez jego usuwania (nadpisywania) oraz bez usuwania następnych elementów w zadanej ilości (`0`).

Następuje więc "wepchnięcie" nowego elementu, spychając istniejące elementy od indeksu `3` na dalsze pozycje.

Metoda `Array.prototype.splice()` modyfikuje oryginalną tablicę.

Tablica pod stałą `letters` jest więc mutowana, dlatego po zalogowaniu jej do konsoli widzimy zaktualizowany układ elementów.

Jeśli chcielibyśmy uniknąć mutacji sugerowaną alternatywą jest `Array.prototype.toSpliced()`.

Jest to jednak nowa metoda, w chwili pisania tego tekstu, nie zaimplementowana jeszcze przez wszystkie silniki JavaScript.

Aktualnie obsługują ją przeglądarki Chrome, Edge, Opera, Safari, ale nie Firefox i środowiska uruchomieniowe Node.js, Deno.

Druga, użyta w przykładzie metoda to `Array.prototype.slice()`.

Tworzy ona płytką kopię modyfikowanej tablicy i zwraca nowy zmodyfikowany jej kształt.

Płytka kopia oznacza, że w przypadku zagnieżdżonych tablic, również mogą wystąpić mutacje, tak jak w przypadku użycia `splice()`.

Wywołanie `letters.slice(0, 3)` oraz `letters.slice(3)` nie wpływa w naszym przykładzie na oryginalną tablicę `letters`.

Żeby zobaczyć wynik działania tych metod, musielibyśmy zalogować ich wykonanie do konsoli.

`letters.slice(0, 3)` zwróciłoby wtedy tylko pierwsze trzy elementy tablicy.

Cięcie tablicy odbywa się tutaj od indeksu `0` do `3` (nie włączając `3`).

`letters.slice(3)` to z kolei odcięcie fragmentu tablicy rozpoczynając od indeksu `3` aż do końca tablicy.

W naszym przypadku byłyby to trzy ostatnie elementy tablicy.
