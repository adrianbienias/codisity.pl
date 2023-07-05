Operator przecinka (`,`) wykonuje operandy w kolejności od lewej do prawej, a następnie zwraca wartość ostatniego z nich.

Operator `,` ma najniższe pierwszeństwo wykonywania z wszystkich operatorów, niższe niż operator przypisania `=`.

Mylące może być występowanie przecinka również w innych, bardziej popularnych rolach jak np. rozdzielanie elementów w tablicy, własności w obiektach, parametrów i argumentów w funkcjach, liście deklaracji zmiennych, importach czy eksportach.

Przykładowo, `a = b = 1, c = 2`, wykona operacje przypisania `1` do zmiennej `b` oraz wartości z `b` do zmiennej `a`. Wykonane zostanie też przypisanie `2` do zmiennej `c`, ale już jako osobna operacja. Zwrócona z niej wartość `2` nie bierze udziału w przypisywaniu wartości do `a`.

Konsola logując wartość zmiennej `a` zwróci więc `1`.

W przykładzie `x = (y = 1, z = 2)`, pierwsze w kolejności wykonane zostaną wyrażenia w nawiasie. Najpierw dwie operacje przypisania, `1` do zmiennej `x` oraz `2` do zmiennej `z`, następnie zadziała operator przecinka, który zwróci wartość ostatniej z tych operacji, czyli `2`

Finalnie wartość zmiennej `x` zostanie zalogowana jako `2`.

Inny przykład, `log("foo", "bar")`, to wywołanie metody z przekazaniem dwóch argumentów. Metoda loguje do konsoli oba argumenty.

Gdy jednak argumenty zgrupujemy umieszczając je w nawiasie `log(("foo", "bar"))`, to operator `,` zwróci ostatnią z wartości czyli `bar` i tylko ta wartość będzie argumentem dla metody `log`.
