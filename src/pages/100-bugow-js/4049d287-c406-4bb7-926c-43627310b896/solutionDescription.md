Po pierwsze `isNaN()` i `Number.isNaN()` nie są ze sobą zgodne 🤯.

Teoretycznie założeniem `isNaN()` jest sprawdzenie czy wartość przekazana w argumencie nie jest wartością liczbową.

W praktyce `isNaN()` sprawdza jednak czy wartość z argumentu jest ekwiwalentna wartości `NaN` po konwersji do wartości liczbowej.

Co więcej, dokumentacja Mozilli zachęca do korzystania z `Number.isNaN()` jako bardziej niezawodnego odpowiednika.

Tak, `isNan()` i `Number.isNaN()` potrafią zwracać różną wartość dla tego samego argumentu wejściowego.

Mimo deklarowanej większej niezawodności, `Number.isNaN()` wciąż jest bardzo nieintuicyjną metodą w celu sprawdzania, czy wartość wejściowa nie jest wartością liczbową.

Dla uzyskania niezawodności i intuicyjności najlepiej skorzystać z porównania `typeof x === "number"`.

Mamy wtedy pewność, że dostaniemy `true` tylko wtedy, gdy `x` będzie typu liczbowego.

Pułapką może okazać się wtedy `typeof NaN === "number"`, który zwróci `true`, ponieważ typ wartości `NaN` to... `number`.

Największe (moim zdaniem) pułapki w kwesti `isNaN()` i `Number.isNaN()` (gdy są ze sobą zgodne), to:

- Sprawdzanie ciągu znaków, który zawiera liczbę np. `"123"`
- Pustej tablicy `[]`
- Wartości logicznych `true`/`false`
- `null`

Wszystkie z powyższych wartości ulegają konwersji do wartości liczbowych.

Ciąg znaków `"123"` zostaje skonwertowany do wartości liczbowej `123` więc `isNaN("123")`, tak samo jak `Number.isNaN("123")`, zwraca `false`.

Pusta tablica również jest konwertowana do wartości liczbowej, `0`.

Wartości logiczne `true`/`false` są konwertowane do `1`/`0`.

`null` również ulega konwersji do wartości `0`.

Z tego względu, powyższe wartości po konwersji do wartości liczbowej nie stają się wartością `NaN`, więc `isNaN()` dla nich zwraca `false`.
