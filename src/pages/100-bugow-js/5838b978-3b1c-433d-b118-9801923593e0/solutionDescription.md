W przykładzie z błędem, poprawność działania kodu częściowo zależy od dnia, w którym zostanie uruchomiony.

`new Date()` generuje aktualną datę w lokalnej strefie czasowej.

Polska leży w strefie czasowej +1h (czas zimowy) lub +2h (czas letni) w stosunku do strefy _UTC_.

Metoda `toISOString()` zwraca datę w formacie UTC. Jeśli więc kod zostanie uruchomiony np. o godz. _00:30_ w polskiej stefie czasowej, to `toISOString()` zwróci w odpowiedzi datę z dnia poprzedniego polskiej strefy czasowej.

Pozostałe metody występują w dwóch wariantach.

Pierwsze, bez _UTC_ w nazwie metody, zwracają datę czasu lokalnego (tego, w którym został uruchomiony kod). Drugie, z _UTC_ w nazwie metody, zwracają datę ze strefy czasowej _UTC_.

Przykładowo, wariant `getDate()` zwróci dzień miesiąca czasu lokalnego, a wariant `getUTCDate()` dzień miesiąca czasu _UTC_.

Metoda `getDate()` nie sprawia niespodzianek, zwracając dzień miesiąca w formie liczbowej (w przedziale od `1` do `31`).

Metoda `getMonth()` jest już nieco mniej intuicyjna. Zwraca bowiem numer miesiąca, ale numeracja miesięcy zaczyna się od `0`.

Styczeń to `0`, grudzień to `11`.

Jeśli chcemy przypisać nazwy miesięcy do wartości z zakresu od `1` do `12`, to wywołując `getMonth()` musimy pamiętać, aby zawsze dodawać do zwracanej wartości `+1`.

Metoda `getDay()` zwraca numer dnia tygodnia w zakresie liczbowym od `0` do `6`. Dodatkowo musimy jednak pamiętać, że numerowanie dni tygodnia zaczyna się od niedzieli (`0`), a kończy na sobocie (`6`).
