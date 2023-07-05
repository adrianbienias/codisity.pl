Daty przypisane do stałych `date_1999` i `date_1999_` są takie same.

Są jednak różnymi obiektami i porównywanie ich za pomocą operatora `==` lub `===` zawsze zwróci fałsz.

Prawda z takiego porównania zostanie zwrócona tylko wtedy, gdy porównywany ze sobą będzie ten sam referencyjny obiekt.

Moglibyśmy stworzyć alias np. `const date_1999_x = date_1999`.

Wtedy porównanie `date_1999_x == date_1999` zwróciłoby prawdę.

Wiązałoby się to jednak też i z innymi implikacjami jakie niosą za sobą aliasy obiektów w JavaScript.

Mutując taki alias lub referencyjny obiekt, zmieniałby się on jednocześnie w obu stałych/zmiennych.

Operator `<`, ale również i `<=` oraz ich odwrotności `>` i `>=`, działają na podstawie innego algorytmu niż `==`

Porównywane są tutaj wartości liczbowe, do których zostaną sprowadzone operandy (w naszym przypadku obiekty dat).

Nie ma znaczenia czy wartości są przekazywane jako referencja.

Jeśli chcemy więc porównać dwie daty pod kątem, która data jest wcześniejsza (mniejsza) lub późniejsza (większa), to używanie operatorów `<`, `<=`, `>`, `>=` nadaje się bardzo dobrze.

Jeśli chcemy jednak dowiedzieć się, czy dwie daty są identyczne, musimy najpierw samodzielnie sprowadzić je do wartości liczbowych np. metodą `getTime()`.

Dopiero tak zaprezentowane daty w postaci wartości liczbowych możemy porównywać za pomocą `==` lub `===`.
