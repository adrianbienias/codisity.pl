Obiekt `numbers` sam w sobie działa poprawnie.

Umożliwia ustawianie liczby poprzez dodanie jej do tablicy `log`, a następnie pobranie ostatnio ustawionej liczby poprzez _getter_ `latest()`.

`numbers.log` zwraca więc `[5, 23]` ponieważ te dwie liczby zostały wcześniej ustawione poprzez _setter_ `current()`, tym samym lądując w tablicy `log`.

`numbers.latest` zwraca ostatnio ustawioną liczbę, pobierając ją jako ostatni element z tablicy, czyli `23`.

Skopiowanie obiektu za pomocą `Object.assign()` (ale również innymi metodami jak np. rozkład obiektu - _spread_), nie daje możliwości kopiowania metod w tym _getter_'ów, czy _setter_'ów.

`numbersCopy.current` przestaje działać i staje się niezdefiniowany.

`numbersCopy.current = 11` tworzy nową własność, do której na sztywno zostaje przypisana wartość `11`.

Operacja ta w żaden sposób nie wpływa już na tablicę `log` w skopiowanym obiekcie.

`numbersCopy.log` zwraca tą samą tablicę co `numbers.log`, ponieważ została ona skopiowana z oryginalnego obiektu.

Niespodzianką może być `numbersCopy.latest`, ponieważ zwraca `23`.

Mimo, że metody obiektu nie są kopiowane, to w przypadku _getter_'a jest on wykonany w momencie kopiowania i wartość, którą zwraca, zostaje przypisana na stałe do własności w skopiowanym obiekcie.

`numbersCopy.latest` nie jest już więc metodą zwracającą dynamicznie ostatni element z tablicy `log`, a jedynie sztywną wartością, do której na stałe przypisana została wartość `23`.
