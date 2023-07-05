`NaN` jest wyjątkową wartością w JavaScript. Jako jedyna porównana sama ze sobą zwraca fałsz. Nie ma znaczenia, czy użyjemy ścisłego (`===`) czy luźnego (`==`) porównania.

Jedyną opcją na sprawdzenie, czy wartością jest `NaN` jest użycie dostępnej w globalnym kontekście metody `isNaN()` lub `Number.isNaN`.

Alternatywnie, możemy stworzyć własną funkcję, która porówna ścisłą nierówność (`!==`) przekazanej wartości. Prawda zwrócona zostanie tylko wtedy, gdy jako argument funkcji przekażemy `NaN`.

Na bardzo mocną uwagę zasługuje `isNaN("abc")`.

`"abc" === NaN` w żaden sposób nie jest prawdziwe.

`"abc"` nie jest wartością `NaN`, dlaczego więc dostajemy z tej metody odpowiedź `true`?

Bo w JavaScript, metoda `isNaN()` działa inaczej niż `Number.isNaN()`.

`isNaN()` zwraca `true` jeśli argument jest wartością `NaN`, **lub jeśli będzie wartością `NaN` po jego konwersji na wartość liczbową** 🤯.
