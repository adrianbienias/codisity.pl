Trójskładnikowy operator warunkowy jest jedynym operatorem w języku JavaScript, który przyjmuje trzy operandy.

1. Warunek, po którym następuje znak zapytania `?`
2. Wyrażenie, które zostanie wykonane jeśli warunek jest prawdziwy, po którym następuje dwukropek `:`
3. Wyrażenie, które zostanie wykonane jeśli warunek jest fałszywy

Jest to skrócona wersja deklaracji `if...else`, która umożliwia wykonanie tych samych operacji logicznych w skrócony sposób.

Co ciekawe, trójskładnikowy operatora warunkowy można zagnieżdżać jako wyrażenia, które zostają wykonane w innym trójskładnikowym operatorze warunkowym.

Przypomina to wtedy deklarację `if...else if...else`.

I właśnie taki zagnieżdżony ciąg znajduje się w naszym przykładzie.

Aby nieco ułatwić sobie jego zrozumienie, możemy pogrupować każde z wyrażeń używając nawiasów.

`("" ? "ok" : (0 ? 1 : ([] ? "foo" : "bar")))`

`""` jest wartością fałszywą, więc pierwsze wyrażenie `"ok"` zostaje pominięte na rzecz drugiego wyrażenia, którym jest kolejna trójskładnikowa grupa.

`0` również jest wartością fałszywą, więc wykonana jest kolejna, jeszcze głębiej zagnieżdżona trójskładnikowa grupa.

`[]` jest wartością prawdziwą, zwrócona zostaje więc wartość `"foo"`, a `"bar"` zostaje pominięte.

W naszym przypadku kolejne grupy zostały zagnieżdżone jako wyrażenia wykonywane w przypadku fałszywego spełnienia warunku.

Nic nie stoi jednak na przeszkodzie aby używać ich jako wyrażeń dla ewaluacji warunku do prawdy, lub też w obu miejscach - prawdy i fałszu.
