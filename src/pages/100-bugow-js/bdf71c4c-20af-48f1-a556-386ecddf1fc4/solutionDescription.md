Niestety, algorytm stojący za konwersją wartości do typu liczbowego w funkcji `Number()` jest inny niż w funkcji `parseInt()`.

Zamiana pustego ciągu znaków `""` poprzez `Number()` zwraca `0`.\
Zamiana pustego ciągu znaków `""` poprzez `parseInt()` zwraca `NaN`.

Zamiana ciągu znaków `"  0 bar  "` poprzez `Number()` zwraca `NaN`.\
Zamiana ciągu znaków `"  0 bar  "` poprzez `parseInt()` zwraca `0`.

Dla `Number()` każdy ciąg znaków, który zawiera liczbę, ale też i inne, niebiałe znaki, zwróci `NaN`. Jeśli pojawi się więcej niż jedna liczba (oddzielona dowolnym znakiem, w tym białym), wtedy też będzie to `NaN`.

Dla `parseInt()` każdy ciąg znaków który zaczyna się od liczby, nawet jeśli jest ona poprzedzona białymi znakami, będzie skonwertowany na tą liczbę. Jeśli występują inne znaki po tej liczbie (białe oraz niebiałe), lub kolejne liczby, są one zwyczajnie ignorowane.

Zamiana `null` poprzez `Number()` zwraca `0`.\
Zamiana `null` poprzez `praseInt()` zwraca `NaN`.

Może to być bardzo mylące z uwagi na to, że dla wartości `undefined`, obie funkcje zwracają `NaN`.

Zamiana `true`/`false` poprzez `Number()` zwraca `1`/`0`.\
Zamiana `true`/`false` poprzez `parseInt()` zwraca `NaN` w obu przypadkach.

Konwersja liczb z innych systemów liczbowych np. binarnego (zapisywanego z prefiksem `0b`), zwraca wartość liczbową w systemie dziesiętnym zarówno poprzez `Number()` jak i `parseInt()`.

Różnica w wartości zwracanej pojawia się, gdy jako argument funkcji przekażemy liczbę wewnątrz ciągu znaków np. `"0b0111"`.

`Number()` zwróci wartość w systemie dziesiętnym, jak poprzednio.\
`parseInt()` zachowa się już jednak inaczej i zwróci `0`...

Tak jak we wcześniejszym przykładzie `"  0 bar  "`, dla `parseInt()` liczy się tylko pierwsza liczba, którą rozpozna w ciągu znaków. Przykładowo `parseInt("123abc")` zwróci `123`.

Warto zaznaczyć, że wartości można też konwertować na typ liczbowy za pomocą jednoargumentowego operatora `+`. Używa on tego samego algorytmu co `Number()` z jednym, małym wyjątkiem... 🙃

Dla dużych wartości liczbowych, konwersja wartości typu `BigInt` poprzez `Number()` zwróci przybliżoną wartość w postaci liczbowej.

Używając operatora `+` dla konwersji wartości `BigInt` otrzymamy błąd `Cannot convert a BigInt value to a number`.

Warto też wiedzieć, że `parseInt()` jest również dostępny jako metoda `Number.parseInt()`. Na szczęście nie ma między nimi różnic i obie działają tak samo.
