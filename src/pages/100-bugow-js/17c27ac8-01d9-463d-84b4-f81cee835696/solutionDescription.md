W przykładzie z błędem, wartość zwrócona z `sum` wyniesie `8` zamiast `9`.

Działanie metody `reduce()` polega na zredukowaniu wielu wartości z tablicy (_array_) do jednej, zgodnie z zasadami zdefiniowanymi w funkcji `callback`, którą w naszym przykładzie nazwaliśmy `reducer`.

Pułapka myślowa w przykładzie, polega na tym, że możemy błędnie założyć, że `reduce()` wywoła funkcję `reducer` tyle razy, ile elementów zawiera tablica `numbers`.

W rzeczywistości jednak tak się nie dzieje.

Gdy do metody `reduce()`, oprócz funkcji `callback`, nie przekażemy drugiego argumentu, definiującego wartość początkową reduktora, to `reduce()` użyje jako wartości początkowej, pierwszej wartości z tablicy, pomijając tym samym pierwsze wywołanie `callback`u.

`reduce()` ustawi więc wartość początkową na `1`, a następnie wykona w pętli działania kumulujące dla kolejnych 2 elementów.

Można to zapisać w formie równania `1 + (2 + 1) + (3 + 1)`.

Aby naprawić ten problem, musimy w metodzie `reduce()` przekazać drugi argument, który będzie wartością początkową. W naszym przykładzie, gdy zależy nam na zsumowaniu wartości, powinniśmy przekazać tam po prostu `0`.

Z wyraźnym ustawieniem wartości początkowej, będziemy mieli do czynienia z równaniem `0 + (1 + 1) + (2 + 1) + (3 + 1)`.

W takim przypadku funkcja `reducer()` zostanie wywołana trzykrotnie.
