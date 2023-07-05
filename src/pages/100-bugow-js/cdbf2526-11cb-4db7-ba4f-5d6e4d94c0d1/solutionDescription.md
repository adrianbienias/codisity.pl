Błędny kod opiera swoje założenia na mutowalności tablic.

Mimo, że ciągi znaków są z natury przechowywane w pamięci w postaci tablic (każda litera to osobna komórka, którą możemy pobrać tak samo jak komórki tablicy), to fundamentalnie ciągi znaków są niemutowalne.

Metoda `toUpperCase()` nie może więc zmodyfikować oryginalnego ciągu znaków. Może jedynie zwrócić efekt swojego działania tj. zwrócić przekazany w argumencie ciąg znaków w postaci dużych liter.

`str[0].toUpperCase()` pobiera pierwszy znak z ciągu `str` i zwraca go w formie dużej litery.

Nie przypisujemy jednak nigdzie tej zmiany, więc kod ten jest po prostu bezużyteczny.

`str = str[0].toUpperCase()` to nadpisanie początkowego ciągu znaków `str` pierwszym znakiem (indeks `0` z tablicy) zwróconym w postaci dużej litery.

W takim przypadku brakuje jednak dalszego ciągu znaków, który możemy dołączyć używając `str.slice(1)`.

Metoda `slice()` działa tak samo dla ciągu znaków jak i dla tablic, wycinając żądany fragment.

W naszym przypadku wycinamy cały ciąg znaków rozpoczynając od indeksu `1`, pozbywając się tym samym z `str` indeksu `0`.
