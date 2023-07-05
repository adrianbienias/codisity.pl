Wartości `false` zostają zwracane dla ciągów znaków, w których występują liczby, ponieważ zakres od _A_ do _z_ nie zawiera liczb.

Białe znaki jak spacje czy przejścia do nowej linii (`\n`) również nie wchodzą w skład zakresu z wyrażenia regularnego, więc ich obecność w ciągu znaków również poskutkuje zwróceniem wartości `false`.

Ciągi znaków składające się wyłącznie ze znaków z zakresu od _A_ do _z_ zwracają `true`.

Duża niespodzianka czeka na nas gdy w ciągu znaków pojawią się znaki\
`` [ \ ] ^ _ ` ``

Okazuje się, że są one również elementem zakresu `[A-z]` w wyrażeniach regularnych.

Tablica kodowania znaków _Unicode_ plasuje te znaki dokładnie pomiędzy zakresem `[A-Z]` a `[a-z]`.

Tworząc więc wyrażenie regularne dla zakresu znaków `[A-z]` niejawnie szukamy też znaków `` [ \ ] ^ _ ` ``.
