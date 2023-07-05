Wywołanie metody `getTime()` na `copy1.birthdate` zwróci błąd informujący, że `getTime` nie jest funkcją.

Mimo, że serializacja i parsowanie formatu JSON działa jako głęboka kopia obiektu, to przez konwersję do formatu JSON tracimy niektóre pierwotne własności obiektu jak funkcje.

Skopiowana data zostaje skonwertowana do ciągu znaków. Nie możemy więc wywoływać na niej metody `getTime()`.

Głęboka kopia `copy2` poprzez operator rozkładu `{ ...person }` nie kopiuje zagnieżdżonych obiektów (w tym tablic), a jedynie przekazuje referencję do nich.

Modyfikując imię dziecka w oryginalnym obiekcie po wcześniejszym wykonaniu kopi poprzez rozkład, wpływamy na zmianę tego imienia również w skopiowanym obiekcie.

Ostatni, trzeci sposób jest najskuteczniejszy dla tworzenia głębokich kopi.

Dla `copy3` globalna funkcja `structuredClone()` wykonuje głęboką kopię, zachowując funkcjonalności oraz kopiując zagnieżdżone obiekty.
