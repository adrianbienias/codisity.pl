Efektem działania błędnego kodu będzie zalogowanie tekstu do konsoli po upływie jednej sekundy, dziesięciokrotnie naraz.

Nasz błąd logiczny ukrył się w przekazanym argumencie opóźnienia w funkcji `setTimeout()`.

Ustawione opóźnienie 1 sekundy (`1000` milisekund) nie zmienia się w żadnej iteracji pętli.

Pętla `for()`, `10` razy wywołuje `setTimeout()`, który przy każdym wywołaniu ma ustawiane to samo opóźnienie.

Aby uzyskać pożądany efekt 1 sekundowych opóźnień pomiędzy wywołaniami kodu, musimy pomnożyć opóźnienie przez wartość indeksu (`i`) w każdej z iteracji pętli

Uzyskamy wtedy wywołania z rosnącą różnicą odstępu czasu:

- `setTimeout(() => {...}, 0)`
- `setTimeout(() => {...}, 1000)`
- `setTimeout(() => {...}, 2000)`
- &nbsp;

I właśnie o taki efekt nam chodzi.

Pomiędzy każdym z wywołań kodu z anonimowej funkcji strzałkowej przekazanej jako callback do `setTimeout()`, różnica odstępu wykonania kodu w czasie będzie wynosiła `1000` milisekund.
