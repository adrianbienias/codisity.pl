Wywołania `func1()` i `func2()` zalogują do konsoli to samo, czyli tablice z listą przekazanych argumentów.

Nazwę parametru reszty (występującego po wielokropku) możemy zdefiniować dowolnie, nie musi nazywać się `arguments`.

Następnie w tak zdefiniowanym parametrze reszty otrzymujemy dostęp do tablicy z pozostałymi parametrami przekazanymi do funkcji.

Pozostałymi, czyli jeśli w funkcji zdefiniujemy np. `func(a, ...rest)`, to w `rest` będziemy mieli dostęp do tablicy z resztą parametrów, bez parametru `a`.

W kolejnych funkcjach, `func3()` i `func4()` wywołane zostały predefiniowane obiekty `arguments`.

Funkcje mają dostęp do takiego obiektu, mimo, że nie jest on wyraźnie zadeklarowany. Podobna sytuacja ma miejsce np. z `this`.

Analogicznie do `this`, obiekt `arguments` jest dostępny tylko w przypadku deklaracji funkcji z użyciem słowa kluczowego `function`. Jeśli zdefiniowana funkcja jest funkcją strzałkową, wtedy obiekt `arguments` nie jest dostępny.

W wywołaniu `func4()` JavaScript wyrzuci więc błąd `ReferenceError: arguments is not defined`.

Jeśli jednak sprawdzisz kod w środowisku StackBlitz (Plac zabaw poniżej), obiekt `arguments` wewnątrz funkcji strzałkowej zwróci dziwne rzeczy.

Jest to spowodowane zdefiniowaniem obiektu `arguments` w globalnym zakresie poprzez StackBlitz i to samo zostanie zwrócone gdy wywołamy `console.log(arguments)` bezpośrednio w globalnym polu, bez zagnieżdżania go w funkcji

Podsumowując, preferowane jest używanie parametru reszty, zamiast predefiniowanego obiektu `arguments`.
