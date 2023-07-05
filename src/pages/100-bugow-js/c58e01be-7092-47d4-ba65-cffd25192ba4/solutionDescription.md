Wszystkie przykłady oprócz `3 > 2 > 1` zalogują wartość `true`.

Dlaczego `3 > 2 > 1` zaloguje `false`? Przeanalizujmy to krok po kroku.

Operatory `>` (_więcej niż_) oraz `<` (_mniej niż_) porównują ze sobą dwa operandy, zwracając wartość logiczną z takiego porównania.

Gdy używamy ciągu kilku porównań, sytuacja wygląda analogicznie, jak w przypadku używania ciągu innych operatorów np. dodawania, mnożenia, porównania, koniunkcji itp.

Kolejność oraz kierunek wykonywania operacji wykonywanych przez operatory definiuje tabela pierwszeństwa operatorów (_operator precedence_).

Operatory `>` i `<` wykonują porównania po kolei, od lewej do prawej.

Dla `3 > 2 > 1` w pierwszej kolejności wykonane zostanie porównanie `3 > 2` i zwróci ono wartość `true`.

Ciąg porównań zostanie zredukowany i będzie w kolejnym kroku porównywał `true > 1`.

W przypadku gdy porównywane wartości nie są wartościami liczbowymi, zostają one sprowadzone do wartości liczbowej za pomocą algorytmu funkcji `Number()`.

Wartość `Number(true)` zwraca wartość `1`.

W językach programowania, wartości logiczne `true`/`false` są z reguły reprezentowane przez wartości liczbowe `1`/`0`.

Finalnie `true > 1` zostanie więc skonwertowane do `1 > 1`. Wynikiem takiego porównania będzie rzecz jasna wartość `false`.

W pozostałych przykładach porównań zachodzi analogiczny proces.

Z początkowych porównań zwracana jest wartość logiczna. Następnie kolejne porównania konwertują wartości logiczne na wartości liczbowe i dokonują kolejnych porównań.

`true < 3` to prawda, `true < 2` to prawda i `true > 0` to też prawda.
