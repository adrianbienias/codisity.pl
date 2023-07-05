W przykładzie z błędem, w konsoli zalogowana zostanie wartość `1` jako efekt wywołania funkcji `getFirst()`.

Zostanie zalogowany też błąd, `getSecond is not a function`.

Błąd ten mówi nam, że nazwa `getSecond` jest dostępna w miejscu jej wywołania, nie jest jednak typem funkcji.

Dostępność nazwy `getSecond` jest efektem podnoszenia (_hoisting_) deklaracji funkcji na początek wykonywanego kodu.

W naszym przykładzie `getSecond` jest jednak deklarowane warunkowo.

Interpreter JavaScript podnosi nazwę zadeklarowanej funkcji na początek wykonywanego kodu, ale nie przypisuje jej konkretnej wartości. Nazwa `getSecond` jest więc zdefiniowana jako `undefined`, ponieważ nie zostaje spełniony warunek w instrukcji warunkowej `if`.

Tego typu sposób interpretowania kodu jest mylący i może prowadzić do powstawania błędów. Aby tego uniknąć, możemy aktywować tryb ścisły.

Możemy to zrobić np. poprzez wywołanie `"use strict"`.

W trybie ścisłym, kod z naszego przykładu będzie interpretowany inaczej.

Deklaracje funkcji zostaną podniesione tylko na początek bloku, w którym zostały zdefiniowane.

Zagnieżdżając więc deklaracje funkcji wewnątrz bloku instrukcji warunkowej, pętli, lub innej funkcji, zadeklarowana w ten sposób funkcja nie będzie dostępna na zewnątrz bloku, który ograniczają nawiasy klamrowe `{}`.

Po aktywowaniu trybu ścisłego, w konsoli zalogowany zostanie błąd `getFirst is not defined`. Oznacza to, że dla interpretera JavaScript, funkcje `getFirst` i `getSecond` są niezdefiniowane w globalnym zakresie, w których są wywoływane.
