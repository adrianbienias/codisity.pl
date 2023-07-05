Błędny przykład zwróci nam tablicę `[undefined, undefined, undefined]`.

Funkcje strzałkowe domyślnie zwracają zawartość funkcji (domniemany `return`) tylko jeśli **nie** jest ono w formie blokowej.

Użycie nawiasów klamrowych `{` i `}` tworzy ciało funkcji w formie blokowej i tym samym wymaga wyraźnego zwrócenia wartości z takiego ciała poprzez wyrażenie `return`.

W funkcji strzałkowej chcąc zwrócić obiekt musielibyśmy ciało funkcji zapisać jako `{ return { value: n } }`.

Możemy jednak użyć formy zwięzłej i pominąć `return`, umieszczając obiekt wewnątrz nawiasów `(` i `)`.

Tym samym funkcja strzałkowa potraktuje taką konstrukcję jako zwięzłe ciało funkcji i zwróci je bez konieczności użycia `return`.
