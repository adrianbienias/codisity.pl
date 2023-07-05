W przykładzie z błędem, stała `numbers` oraz `sorted` zwróci tą samą tablicę `[100, 2, 11, 27]`.

Sortowanie działa poprawnie, problem leży jednak w mutowaniu oryginalnej tablicy poprzez metodę `sort()`.

Metoda `sort()`, nie wykonuje kopii tablicy, na której zostanie wykonana. Modyfikuje oryginalną tablicę i zwraca efekt tej modyfikacji.

Po posortowaniu liczb, tablica `sorted`, na pozycji `0` posiada wartość `1`.

Ta wartość jest jednak podmieniona na wartość `100` za pomocą `sorted[0] = 100`.

Z uwagi na wspomnianą wcześniej cechę działania `sort()`, kolejnym modyfikacjom tablicy `sorted`, ulega również tablica `numbers`.

Dobrze o tym pamiętać, szczególnie, że JavaScript jest tutaj niespójny.

Niektóre metody, takie jak np. `slice()`, `map()`, `concat()`, zwracają kopię oryginalnej tablicy, przez co późniejsze modyfikacje nie dotykają oryginału (nie mutują).

Inne, jak np. `push()`, `reverse()`, `sort()`, modyfikują oryginalną tablice (mutują).
