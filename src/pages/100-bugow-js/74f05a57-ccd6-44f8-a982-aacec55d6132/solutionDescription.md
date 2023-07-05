W przykładzie z błędem, do konsoli zostanie wyrzucony błąd `Undefined label 'foo'` w 8 linii.

Musimy go naprawić, dodając nazwę etykiety dla bloku nadrzędnego, nazywając go np. `bar`. Następnie możemy zatrzymać wykonywanie kodu wywołując nazwę zdefiniowanej etykiety, czyli `break bar`.

Wywołując przerwanie działania kodu poprzez `break`, możemy odnieść się do etykiety bloku tylko w obrębie bloku, którą dana etykieta definiuje.

Po naprawie tego błędu, w konsoli ujrzymy zalogowane jedynie `first`.

Logowania do konsoli `second` i `third` nie zostaną wykonane, ponieważ działanie kodu w blokach zostaje wcześniej przerwane poprzez `break`.

Etykiety (_label_) używa się zazwyczaj do zagnieżdżonych pętli, aby wywołując `break` lub `continue`, odwołać się do konkretnej pętli.

Etykietowanie samych bloków `{}` jest jednak również jak najbardziej poprawne pod względem semantyki języka JavaScript.
