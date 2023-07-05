Wszystkie sposoby, oprócz `"" + myObj`, zwrócą wartość `orange`.

Operator `+`, jeśli zostanie użyty na typach danych, z których choć jeden jest różny niż `number`, działa jako operator łączenia ciągów znaków.

`"" + myObj` jest więc operacją łączenia ciągów znaków za pomocą operatora `+`, czyli de facto konwersją `myObj` na ciąg znaków.

Okazuje się jednak, że algorytm konwersji danych na ciąg znaków, który stosuje operator `+`, różni się od pozostałych sposobów.

Operator `+` dokonując konwersji danych na ciąg znaków, zamiast wywołać metodę `toString()` na obiekcie, który konwertuje, w pierwszej kolejności wywołuje na nim metodę `valueOf()`.
