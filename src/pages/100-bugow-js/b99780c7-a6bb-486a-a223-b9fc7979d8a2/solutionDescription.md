Do konsoli zostaną zalogowane odpowiedzi w następującej kolejności:

1. `Global context`
2. `Promise`
3. `Microtask`
4. `setTimeout`
5. `Promise setTimeout`

JavaScript jest jednowątkowym językiem programowania. Nie możemy wykonać równolegle wielu fragmentów kodu poprzez wiele wątków procesora (chyba, że z pomocą _Worker_'ów, ale to osobny temat).

Nieporozumienie, które może wynikać z uznawania JavaScriptu jako języka wielowątkowego jest możliwość asynchroniczność.

W JavaScript asynchroniczność oznacza, że możemy oddelegować na później wykonywanie kodu, który do wykonania potrzebuje więcej czasu.

Każda interakcja na stronie internetowej, obsługiwana przez JavaScript, zawiesza działanie strony (zamrażając możliwość wykonywania na niej jakichkolwiek akcji) do czasu ukończenia wykonywania kodu przez procesor. Zazwyczaj dzieje się to jednak tak szybko, że nawet nie dostrzegamy wynikających z tego opóźnień.

Są jednak operacje, które wymagają więcej czasu do zrealizowania, nie tylko z uwagi na złożoność obliczeniową, ale także na opóźnienia wynikające z dostępu do danych (np. odpytując zewnętrzne API).

Gdyby tego typu operacje były wykonywane synchronicznie, strona kompletnie zawieszałaby się (przewijanie, czy klikanie w przyciski byłoby zamrożone), aż do momentu pobrania danych.

Rozwiązaniem tego problemu w JavaScript jest pętla zdarzeń (_event loop_), która regularnie wykonuje zadania, jakimi jest wykonanie kodu. Jednocześnie zadania wywołane asynchronicznie są umieszczane w kolejce do wykonania podczas kolejnego cyklu pętli zdarzeń.

Asynchroniczna kolejka zadań jest jeszcze dodatkowo podzielona na zwykłe zadania i zadania mikro.

Zadaniem zwykłym, które wpadnie do kolejki asynchronicznej jest np. `setTimeout()`, a mikro zadaniem `Promise`.

Mikro zadania z kolejki wykonywane są na końcu aktualnej iteracji pętli zdarzeń, natomiast standardowe zadania z kolejki, na początku kolejnej iteracji.

Kod z przykładu wykonuje się więc w następującej kolejności:

1. `Global context` jest wywołany synchronicznie, czyli w pierwszej kolejności, w aktualnej iteracji pętli zdarzeń
2. `Promise` i `queueMicrotask()` to mikro zadania, oddelegowane do wykonania na koniec aktualnej iteracji pętli zdarzeń, wykonywane w kolejności w jakiej zostały dodane (w naszym przykładzie najpierw `Promise`, potem `Microtask`)
3. `setTimeout()` to zadania oddelegowane do wykonania na początek kolejnej iteracji pętli zdarzeń, wykonywane również w kolejności w jakiej zostały dodane (w naszym przykładzie najpierw `setTimeout()` wywołany wewnątrz mikro zadania `Promise`, następnie `setTimeout()` wywołany w globalnym kontekście)

Zdefiniowanie zadania `setTimeout()` w mikro zadaniu `Promise` oznacza, że wykonywane mikro zadanie `Promise` na początku aktualnej iteracji pętli zdarzeń, oddeleguje zadanie `setTimeout()` na początek kolejnej iteracji pętli. Efekt działania jest więc taki sam, jak gdyby `setTimeout()` było wywołane w globalnym kontekście, bez zagnieżdżenia wewnątrz mikro zadania `Promise`.
