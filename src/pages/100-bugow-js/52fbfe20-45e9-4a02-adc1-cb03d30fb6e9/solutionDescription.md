Większość wyrażeń porównania z typem `object` zaloguje do konsoli wartości `true`. Wyjątkami będą `lastName`, `nothing`, i `greet`.

Zmienna `firstName` zawiera obiekt utworzony za pomocą wywołania konstruktora `String` z użyciem operatora `new`. Powoduje to zwrócenie obiektu `String` który jest typem obiektu.

Zmienna `lastName` zawiera ciąg znaków o podstawowym typie `string`, stworzonego poprzez wywołanie funkcji `String` **bez** użycia operatora `new`, czyli bez intencji tworzenia nowego obiektu.

Zmienna `user` otrzymuje wartość typowego JavaScriptowego obiektu definiowanego za pomocą nawiasów klamrowych. Nie jest zaskoczeniem, że `typeof` zwraca dla takiej wartości `object`.

Zmienna `numbers` zawiera tablicę, czyli `Array`, a w JavaScript `Array` jest obiektem.

Zmienna `nothing` jest zadeklarowana bez przypisania wartości. Wywołanie jej zwraca więc wartość `undefined`, która jest jednocześnie typem podstawowym. `typeof undefined` zwraca więc `undefined`.

Zmienna `empty` zawiera wartość `null`. Działanie `typeof` dla wartości `null` zwróci `object` i jest to powszechnie uznane za błąd języka JavaScript (patrz podlinkowany artykuł _The history of “typeof null”_).

Bug ten celowo nie jest jednak naprawiany w działaniu języka ze względu na zachowanie kompatybilności wstecznej z wieloma istniejącymi skryptami, które polegają na tym błędnym działaniu.

Zmienna `greet` jest funkcją i mimo, że funkcje są też pierwszorzędnymi obiektami w JavaScript, to jednak poprzez `typeof` zgłaszają swój typ danych jako `function`.

Zmienna `greeting` przechowuje obiekt, utworzony poprzez użycie operatora `new` wywołującego funkcję `greet` jako konstruktora obiektu.
