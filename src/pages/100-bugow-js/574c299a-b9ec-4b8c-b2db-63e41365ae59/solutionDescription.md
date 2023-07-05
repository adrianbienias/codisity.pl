W przykładzie z błędem do konsoli zostanie zalogowana 10 x wartość `10`.

Dzieje się tak, ponieważ deklaracja zmiennej za pomocą `var` tworzy zmienną globalną (dostępną również poza pętlą).

`setTimeout()` bez podania wartości opóźnienia w drugim argumencie, domyślnie przyjmuje wartości `delay` jako `0`.

Użycie `setTimeout()` nawet z zerowym opóźnieniem oddelegowuje kod do wykonania go asynchronicznie tj. na końcu kolejki w danej pętli zdarzeń (_event loop_).

Finalnie 10 wywołań `console.log()` nastąpi więc dopiero po wykonaniu wszystkich iteracji z pętli.

Ostatnia iteracja pętli ustawi wartość zmiennej `i` na `10`, więc wszystkie 10 wywołań `console.log()` będzie logowało wartość `10` przypisaną do globalnej zmiennej `i`.

Aby naprawić ten problem, musimy użyć wyrażenia `let` zamiast `var`.

Spowoduje to utworzenie lokalnej zmiennej, dostępnej jedynie w obrębie bloku pętli, bez efektu nadpisywania jej, jak to ma miejsce w przypadku zmiennej globalnej.

`for (let i = 0; i < 10; i++)` utworzy więc pętlę ze zmienną lokalną i `setTimeout()` nawet przy wykonaniu logowań do konsoli już po wykonaniu wszystkich iteracji pętli, będzie cały czas miało dostęp do wartości lokalnych użytych w każdej z iteracji.

Zalogowane zostaną wtedy wartości `0`, `1`, `2`, ... zamiast `10`, `10`, `10`, ...

Użycie `var` wewnątrz pętli będzie miało więc taki sam efekt, jak użycie deklaracji `let` poza pętlą, tworzącą zmienną globalną.

Deklarując `let i`, a następie używając tej zmiennej w pętli `for (i = 0; i < 10; i++)` otrzymamy taki sam (problematyczny) efekt, jak w przypadku użycia `for (var i = 0; i < 10; i++)`.
