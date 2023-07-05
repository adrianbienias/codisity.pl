`sentence instanceof String` zwróci prawdę.

Ciąg znaków został stworzony za pomocą konstruktora klasy `String`.

Zwróć uwagę na użycie operatora `new`. Bez niego ciąg znaków zostałby utworzony za pomocą funkcji `String` nie będącej konstruktorem klasy, więc `instanceof` zwróciłby w takiej sytuacji fałsz (ciąg znaków byłby wtedy typem prymitywnym, a nie obiektem).

`!sentence instanceof Number` zwróci fałsz.

I tutaj mamy naszego buga.

W intencji mamy zanegowanie wyniku działania operatora `instanceof`.

W rzeczywistości negujemy jednak wartość ze stałej `sentence`.

Ponieważ typ danych w `sentence` jest obiektem, zostaje on skonwertowany poprzez działanie operatora negacji najpierw do wartości logicznej `true`, a następnie odwrócony do wartości `false`.

Wartość `false` z pewnością nie jest instancją klasy `Number`, więc finalnie do konsoli zostaje zalogowana wartość `false`.

Jeśli zależy nam na sprawdzeniu czy dany obiekt **nie jest** instancją danej klasy, musimy całą operację sprawdzania instancji umieścić wewnątrz nawiasów i zanegować dopiero efekt takiego sprawdzenia.

`sentence instanceof Number` zwróci `true`.\
`!(sentence instanceof Number)` zwróci `false`.

Innym sposobem mogłoby być użycie operatora porównania\
`sentence instanceof Number === false`.
