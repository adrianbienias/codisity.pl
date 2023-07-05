W błędnym przykładzie do konsoli zostanie zalogowana wartość `undefined`.

Globalna funkcja `setTimeout()` to tak naprawdę metoda globalnego obiektu (`window` lub `global`).

Wywołanie `this` wewnątrz zwrotnej funkcji (_callback_) przekazanej do `setTimeout()` skutkuje więc wskazywaniem `this` na obiekt globalny, który nie ma zdefiniowanej własności `message`.

`this` jest zawsze zależne od kontekstu, w którym zostaje wywołane.

Aby przypisać interesujący nas kontekst obiektu `myObject` możemy użyć metody `bind()` na anonimowej funkcji przekazywanej jako _callback_ do `setTimeout()`.

Innym sposobem może być zamienienie deklaracji anonimowej funkcji _callback_ na wyrażenie funkcji strzałkowej.

Dzięki temu `this` będzie odnosiło się do wyższego kontekstu, ponieważ funkcje strzałkowe nie mają własnego wiązania dla `this`.
