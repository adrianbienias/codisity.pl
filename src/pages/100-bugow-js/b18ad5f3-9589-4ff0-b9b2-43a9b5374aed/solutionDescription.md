Zacznijmy od tego, że dwa znaki `+ +` oddzielone od siebie spacją są interpretowane jako dwa osobne znaki (operatory).

Nie ma tu więc mowy o zadziałaniu operatora inkrementacji `++`.

Znak `+` może działać jako jednoargumentowy operator, gdy występuje w sąsiedztwie tylko jednego operandu.

Jego działanie skutkuje wtedy konwersją wartości na wartość liczbową.

Przykładowo `+ true` lub `+true` (białe znaki są tutaj ignorowane) zwróci wartość `1`.

Kluczowe jest wystąpienie wyłącznie jednego operandu z prawej strony operatora `+`.

Gdyby pojawiły się dwa operandy np. `true + true` to operator `+` zadziała już jako operator dodawania (choć wcześniej nastąpi też konwersja wartości logicznych na wartości liczbowe).

Wystąpienie dwóch operatorów `+ +` oznacza, że drugi z nich na pewno po swojej lewej stronie nie ma operandu, więc zadziała jako jednoargumentowy operator.

Jednoargumentowy operator `+` ma też pierwszeństwo wykonywania przed operatorem dodawania `+`.

Wracając do przykładów, pierwsze cztery będą operacjami dodawania.

Dodawanie nie oznacza jednak zawsze dodawania wartości liczbowych.

Gdy jeden z operandów jest ciągiem znaków, operator ten zachowuje się jako operator konkatenacji czyli łączenia ze sobą ciągów znaków.

Gdy dodawane są wartości nie prymitywne (obiekty), w pierwszej kolejności następuje zamiana na wartości prymitywne.

Tablice konwertowane są na ciągi znaków.

Jeśli są puste, to konwertowane są do pustych ciągów znaków `""`.

Dodanie do siebie dwóch pustych tablic `[]` to więc to samo co dodanie do siebie dwóch pustych ciągów znaków, co finalnie daje nam pusty ciąg znaków.

Puste obiekty, które nie są tablicami, skonwertowane do ciągu znaków, zwracają `"[object Object]"`.

Na pierwszy rzut oka może to wyglądać jak tablica z dwoma wartościami `object`, `Object`.

W rzeczywistości jest to jednak ciąg znaków, który zawiera nawias kwadratowy.

Jeśli dodamy więc pustą tablicę i pusty obiekt, to operator `+` połączy ze sobą dwa ciągi znaków: `""` oraz `"[object Object]"`, co finalnie da nam ciąg znaków `"[object Object]"`.

Dodanie do siebie dwóch pustych obiektów, da nam zdublowane\
`"[object Object][object Object]"`.

Gdy do gry wkracza dodatkowo jednoargumentowy operator `+`, jego prawy operand konwertowany jest do wartości liczbowej.

Pusta tablica zwraca wartość `0`. Pusty obiekt zwraca wartość `NaN`.

Finalnie zachodzi dodawanie (konkatenacja) tych wartości z ciągami znaków (pustej tablicy, albo pustego obiektu) razem z ciągiem znaków `"0"` lub `"NaN"`.
