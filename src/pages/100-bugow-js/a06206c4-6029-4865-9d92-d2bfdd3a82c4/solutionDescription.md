W przykładzie z błędem do konsoli zostanie zalogowana wartość `null` jako efekt wywołania `ebook.title`.

Zostanie jednak zwrócony też błąd `Cannot read properties of null (reading 'subtitle')`, który zatrzyma wykonywanie dalszego kodu.

`null` jest podstawowym typem danych (mimo, że `typeof null` błędnie zwraca wartość `object`).

Podstawowe typy danych nie są obiektami w JavaScript, nie zawierają więc żadnych własności czy metod.

Jakakolwiek próba zwrócenia własności domniemanego obiektu `null` wyrzuca więc błąd, który skutecznie zatrzymuje wykonywanie dalszego kodu aplikacji.

Opcjonalne łączenie łańcuchowe `?.` pozwoli nam uniknąć wyrzucenia błędu, zamiast niego zwracając wartość `undefined`.

Operator `?.` świetnie nadaje np. podczas pobierania danych z API, gdy nie jesteśmy do końca pewni struktury przychodzących danych i istnieje prawdopodobieństwo, że dane, które chcemy zwrócić z zagnieżdżonych własności obiektu, będą niezdefiniowane.

Opcjonalne łączenie łańcuchowe to też świetny skrót umożliwiający pominięcie wielokrotnego używania operatorów logicznych _AND_ `book && book.title && book.title.subtitle`.
