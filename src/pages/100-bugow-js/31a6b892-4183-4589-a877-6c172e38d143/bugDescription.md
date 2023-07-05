Chcemy przetestować różne ciągi znaków za pomocą wyrażenia regularnego `^[A-z]+$`.

`^` oznacza początek ciągu znaków.

`[A-z]` oznacza dowolny znak z zakresu od _A_ do _z_.

`+` oznacza jeden lub więcej znaków.

`$` oznacza koniec ciągu znaków.

Metoda `test()` wykonana na wyrażeniu regularnym zwraca wartość logiczną `true`/`false` w zależności od tego czy przekazany w argumencie ciąg znaków jest zgodny z wyrażeniem regularnym.

Jakie wartości zostaną zalogowane do konsoli dla przykładowych testów?
