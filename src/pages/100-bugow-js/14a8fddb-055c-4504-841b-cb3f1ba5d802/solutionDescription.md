W błędnym przykładzie, wywołanie funkcji `sum(1, 2)` zaloguje do konsoli wartość `NaN`.

_JavaScript_ w przeciwieństwie do innych języków np. _C++_, _Java_, _Swift_, nie pozwala na przeciążanie funkcji, czyli deklarowania ich używając tej samej nazwy funkcji ale z innymi parametrami.

Co ciekawe _TypeScript_ zezwala na definiowanie funkcji przeciążających.

O ile przeciążanie funkcji nie jest możliwe w JavaScript, to nadpisywanie ich już jak najbardziej tak.

Nie dostajemy więc błędu o zdefiniowaniu funkcji z nazwą, która już istnieje, bo jest to dozwolone.

Do konsoli zostaje zalogowane `NaN` (skrót od _Not-A-Number_), bo JavaScript nie może wykonywać operacji matematycznych na typach danych innych niż `Number`.

Nadpisując funkcję `sum()`, nadpisujemy ją deklarując w jej nowej wersji trzy parametry.

Wywołując `sum()` przekazujemy tylko dwa argumenty. Trzeci, brakujący, używany wewnątrz funkcji jako parametr pozostaje niezdefiniowany.

Operacja wewnątrz funkcji `1 + 2 + undefined` zwraca więc `NaN`.

Aby rozwiązać problem, najprościej będzie nam nadpisać funkcję w odwrotnej kolejności, lub kompletnie pozbyć się deklaracji funkcji `sum()` z trzema parametrami.
