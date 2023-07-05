Operator `+` jest przeładowany tzn. obsługuje zarówno dodawanie jak i łączenie ciągów znaków.

Opis algorytmu operatora `+` mówi, że jeśli jeden z operandów jest ciągiem znaków, to drugi jest również konwertowany do ciągu znaków i oba ciągi znaków są ze sobą łączone.

W innym przypadku obie strony powinny zostać skonwertowane do wartości liczbowej, a potem dodane do siebie.

`true` jest konwertowane do wartości liczbowej `1`.\
`1 + 1` daje `2`.

`false` jest konwertowane do wartości liczbowej `0`.\
`0 + 1` daje `1`.

`null` jest konwertowany do wartości liczbowej `0`.\
`0 + 1` daje `1`.

`undefined` jest już jednak konwertowany do wartości `NaN`.\
`NaN + 1` daje `NaN`.

Jeśli typy danych nie są prymitywne, to algorytm sprowadza je do takich.

Obiekty (w tym tablice) nie są danymi typu prymitywnego. Dziedziczą z prototypu `Object` metodę `valueOf()`, która w pierwszej kolejności jest sprawdzana pod kątem konwersji do typu prymitywnego przez operację dodawania.

`valueOf` zwraca jednak obiekt, więc wartość jest ignorowana (nie jest prymitywna) i algorytm przechodzi do sprawdzenia drugiej metody `toString()`, która zwraca ciąg znaków.

Pusta tablica `[]` nie zostaje więc zamieniona na wartość liczbową `0`, a na pusty ciąg znaków, który następnie jest łączony z wartością `1`, również skonwertowaną na ciąg znaków.

Podobnie jest z obiektem `{}`. Jest on konwertowany do ciągu znaków `[object Object]`, a następnie łączony z wartością `1`, również skonwertowaną do ciągu znaków.
