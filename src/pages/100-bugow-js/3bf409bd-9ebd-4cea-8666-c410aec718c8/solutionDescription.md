Operator opcjonalnego łańcuchowania `?.` działa poprawnie przy odczycie własności obiektów.

W przykładzie z błędem użyliśmy go do przypisania wartości, a w takim kontekście nie może on zostać użyty. Konsola zaloguje więc błąd `Invalid left-hand side in assignment`.

Operacja przypisania nie zostanie zrealizowana ze względu na błąd składniowy po lewej stronie operatora przypisania `=`.

Używanie `?.` zapobiega wystąpieniu błędu krytycznego `Cannot read properties of undefined` w sytuacji gdy obiekt, z którego chcemy odczytać wartość jest niezdefiniowany lub jest `null`em.

Gdy chcemy przypisać własność do obiektu, ale nie jesteśmy pewni czy obiekt istnieje, rozsądnie będzie użyć instrukcji warunkowej `if`.
