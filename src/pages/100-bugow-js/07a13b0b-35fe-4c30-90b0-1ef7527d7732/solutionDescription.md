W przykładzie z błędem, w konsoli zostanie zalogowana wartość `It's not false!`

W kodzie pojawił się błąd wewnątrz instrukcji warunkowej. Zamiast operatora porównania użyty został operator przypisania.

W przypadku operatora przypisania, domyślnie zwracana jest wartość przypisywana.

`booleanValue = !false` to po prostu przypisanie zanegowanej wartości `false`, czyli wartości `true`.

Przypisanie `true` do zmiennej `booleanValue` zwraca wartość `true`, więc instrukcja warunkowa się wykonuje i `console.log()` zostaje wywołany.

Naprawienie błędu polega na poprawieniu błędnie użytego operatora przypisania i zastąpieniu go operatorem porównania.

Możemy też użyć alternatywnej konstrukcji i zamiast `=== !false`, zapisać to jako `!== false`.
