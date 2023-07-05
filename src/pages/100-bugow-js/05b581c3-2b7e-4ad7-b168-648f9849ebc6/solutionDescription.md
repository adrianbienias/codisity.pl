JavaScript umożliwia zamykanie funkcji wewnątrz innej. Umożliwia też zwracanie funkcji z funkcji.

Jest to przydatny sposób np. na przechowywanie informacji w zmiennych, które nie ulegają zniszczeniu po wykonaniu funkcji.

Jest to też efektywny sposób na tworzenie fabryki funkcji, które mogą różnić się stanem początkowym, ale współdzielić tą samą logikę.

Te dwa koncepty w JavaScript'u nazywamy _closure_ czyli domknięcia oraz _currying_ czyli wyprawianie.

Przejdźmy do odnalezienia błędu w kodzie. W naszym przypadku błąd w występuje w postaci próby nadpisania parametru `b`.

Jest to niemożliwe ze względu na wystąpienie tego fragmentu kodu po wyrażeniu `return`.

Każde wyrażenie `return` wewnątrz funkcji zakańcza wykonywanie dalszego jej kodu (z wyjątkiem użycia return w `try/catch` gdy dodatkowo użyte zostanie `finally`).

`b = 0` jest więc martwym kodem, który nigdy nie zostaje wykonany.

`a = 0` jest już jednak skuteczne i nadpisuje przekazany w głównej funkcji `nested()` parametr `a`, zmieniając jego wartość na `0`.

Sam zapis `nested(1)(2)(3)(4)` to po prostu ciąg wywołań zagnieżdżonych funkcji, jedna po drugiej.

Wywołanie `nested(1)` zwraca funkcję zagnieżdżoną na pierwszym poziomie. Funkcja ta z kolei zwraca kolejną funkcję, którą znów możemy wykonać.

Moglibyśmy zapisać to również jako `const fn1 = nested(1)`, a następnie wywołać `fn1(2)` przypisując zwróconą z takiego wywołania funkcję do kolejnej stałej `const fn2 = fn1(2)`, itd.

Finalnie, wywołanie ostatniej funkcji z całego ciągu zagnieżdżeń, powoduje zsumowanie argumentów przekazanych do każdej z tych funkcji.
