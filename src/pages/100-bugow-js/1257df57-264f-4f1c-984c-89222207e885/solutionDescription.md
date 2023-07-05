Można by błędnie założyć, że `instanceof` sprawdza czy obiekt został utworzony przez dany konstruktor, czyli, czy jego instancja została utworzona poprzez wywołanie `new` na funkcji konstruującej obiekt.

W rzeczywistości `instanceof` sprawdza jednak, czy utworzona instancja obiektu ma w całym swoim łańcuchu prototypów dany konstruktor.

W JavaScript obiekty dziedziczą po sobie przekazując swoje prototypy, jednocześnie tworząc łańcuch, w którym `"foo".__proto__.constructor` zwróci `String`, a `"foo".__proto__.__proto__.constructor` zwróci `Object`.

Ciąg znaków dziedziczy więc w łańcuchu prototypów zarówno konstruktor `String`, jak i `Object`.

Podobnie wygląda sytuacja w przypadku innych typów danych.

Obiekt daty będzie miał w swoim łańcuchu prototypów zarówno konstruktor `Date`, jak i `Object`.

Tablica (_array_) również będzie miała w swoim łańcuchu prototypów konstruktor `Array`, jak i `Object`.

Funkcja również, `Function` i `Object`.

Nie bez powodu mówi się, że w JavaScript wszystko jest obiektem.

Typy prymitywne (jak np. ciąg znaków) z użyciem `instanceof` nie będą się jednak przedstawiały jako instancje `Object`, mimo, że w łańcuchu prototypów jasno widać, że `"foo".__proto__.__proto__.constructor` to `Object`.

`NaN` również nie przedstawi się jako instancja obiektu, ale w swoim łańcuchu prototypów ma konstruktor `Number` i `Object`.

Podobnie w przypadku wartości logicznych `true` i `false`. Tak jak wartości prymitywne, nie zgłoszą się one jako instancja obiektu, ale mają w swoim łańcuchu prototypów konstruktory `Boolean` i `Object`.

Jedynie wartości `null` i `undefined` nie mają swoich prototypów i konstruktorów, ale żeby było śmieszniej `typeof null` zwróci `object`. Jest to jednak uznawane za znany bug w języku JavaScript i ze względu na zachowanie kompatybilności wstecznej, nie zostaje naprawiany.
