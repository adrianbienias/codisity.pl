W przykładzie z błędem, w konsoli zobaczymy zalogowaną wartość `undefined`.

Winowajcom takiego efektu jest mechanizm _ASI_ (skrót z ang. od _Automatic Semicolon Insertion_).

Język JavaScript nie wymaga wyraźnego stawiania średników na końcu wierszy. Dzieje się to automatycznie w momencie interpretowania kodu.

Są jednak pewne sytuacje, w których musimy wyraźnie postawić średnik (np. chcąc umieścić więcej niż 1 wyrażenie w jednym wierszu).

Są też takie, w których nie możemy rozdzielić kodu na wiele wierszy.

I w naszym przykładzie mamy tą drugą sytuację.

Automatyczne wstawianie średników przez JavaScript, w przykładzie z błędem, automatycznie wstawia średnik na końcu drugiego wiersza, przez co jest on interpretowany jako `return;`.

To z kolei wpływa na całkowite pominięcie obiektu `{ foo: "bar" }`, gdyż jest on zdefiniowany już po deklaracji zakańczającej wykonywanie funkcji.

Przenosząc znak otwarcia klamrowego nawiasu do wiersza z `return`, otrzymamy pożądany efekt. Z funkcji zwrócony zostanie obiekt, a nie `undefined`.

Pewnym ułatwieniem w wychwyceniu tego błędu jest automatyczne kolorowanie składni w edytorze kodu. Kod, który nie zostanie wykonany w funkcji ze względu na wystąpienie wyrażenia `return`, zostaje wizualnie oznaczony przyciemnieniem kolorystyki kodu.
