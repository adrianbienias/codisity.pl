W przykładzie z błędem, do konsoli zostanie zalogowana wartość `false` dla ostatniego porównania z `str4`.

Użycie operatora `new` tworzy nową instancję obiektu. Zwracana wartość jest więc obiektem, a nie typem prymitywnym `string`.

Operator `new` służy do stworzenia instancji obiektu w oparciu o konstruktor. W języku JavaScript konstruktorem może być funkcja o nazwie `constructor`, znajdująca się wewnątrz definicji klasy (`class`), ale nie musi. Może to być też samodzielna funkcja o dowolnej nazwie.

Ścisłe porównanie obiektu z wartością prymitywną prowadzi więc do zwrócenia fałszu.

Aby w czwartym porównaniu uzyskać `true` musimy na utworzonym obiekcie `String` wywołać metodę `toString()`, która wyciągnie z obiektu wartość prymitywną `"Hello World"` typu `string`.

Sytuacja z odrębnym zachowaniem się funkcji w zależności od tego czy została ona wywołana z, czy bez operatora `new` wygląda podobnie również w przypadku innych funkcji, w tym tych predefiniowanych jak `String`, `Number`, czy `Boolean`.
