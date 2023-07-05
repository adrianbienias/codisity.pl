Wszystkie 6 wywołań zwróci te same wartości, tablicę `["a", "b", "c"]`.

Funkcja `fn` za pomocą operatora `...` tworzy listę przekazanych do niej argumentów, a następnie zwraca utworzoną w ten sposób tablicę z wartościami przekazanymi w argumentach.

`console.log(fn("a", "b", "c"))` zaloguje do konsoli wartości zwrócone z wywołanej funkcji `fn`, co skutkuje stworzeniem z listy przekazanych argumentów, tablicy `["a", "b", "c"]`.

`console.log.call(null, ["a", "b", "c"])` za pomocą metody `call` wywoływana jest funkcja `console.log` co stanowi ekwiwalent wywołania `console.log(["a", "b", "c"])` z kontekstem `null`, czyli bez wskazywania na konkretny obiekt, który byłby dostępny pod `this`.

`console.log(Function.call.call(fn, null, "a", "b", "c"))` loguje do konsoli efekt wywołania metody `call()` na funkcji utworzonej przez wywołanie poprzedniej metody `call()`, która to tworzy anonimowy obiekt funkcji, tak samo jak gdybyśmy wywołali `Function()`.

Początkowa funkcja w takim ciągu przestaje mieść znaczenie. Widać to na kolejnym przykładzie `console.log(fn.call.call(fn, null, "a", "b", "c"))`, który zachowuje się tak samo.

Łańcuch `.call.call` mógłby zawierać znacznie więcej powtórzeń nie zmieniającą ostatecznego działania. Początkowa funkcja na której rozpoczyna się ciąg wielu wywołań `.call` traci wtedy na znaczeniu.

Finalnie liczą się tylko 2 ostatnie elementy. Wywołanie poprzez metodę `call()` funkcji, która również jest funkcją `call` i nie implementuje dodatkowego działania.

Następuje więc przesunięcie. Kontekst przekazany jako pierwszy argument do `call()` staje się implementacją wywoływanej funkcji.

Kolejny argument `null` staje się kontekstem dla ewentualnego wywołania `this`, a następne argumenty stają się argumentami przekazanymi już do docelowej funkcji (w naszym przypadku `fn`).

Ostatnim przykładem udowadniającym to działanie jest użycie `setTimeout`, który służy jedynie za "dawcę", na którym można rozpocząć wywoływanie ciągu `.call`.

Warto też wspomnieć o bliźniaczym odpowiedniku metody `call()`, `apply()`.

Jedyna różnica pomiędzy tymi metodami jest taka, że `call()` przyjmuje listę argumentów (tak jak standardowa funkcja), a `apply()` przyjmuje tablicę zawierającą docelowe argumenty.
