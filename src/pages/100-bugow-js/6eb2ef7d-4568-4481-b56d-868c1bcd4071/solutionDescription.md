W przykładzie z błędem, do konsoli zalogowane zostanie `undefined`.

Dzieje się tak, ponieważ w poprzednim wywołaniu metody `then()`, nie zwróciliśmy żadnej wartości.

Obietnica (_promise_) wypełniła się zwracając wartość `undefined`, tak samo, jak gdybyśmy wywołali standardową funkcję, która nic nie zwraca.

Podobna sytuacja miałaby miejsce z `res.json()`, gdybyśmy nie zwrócili danych z tego wywołania. W kolejnym wywołaniu, tam gdzie chcemy dane przetworzyć, zamiast danych dostalibyśmy `undefined`.

Brak nawiasów w naszym przykładzie powoduje, że wartość z anonimowej funkcji strzałkowej `(res) => res.json()` jest automatycznie zwracana w przeciwieństwie do sytuacji `(res) => { res.json() }`.
