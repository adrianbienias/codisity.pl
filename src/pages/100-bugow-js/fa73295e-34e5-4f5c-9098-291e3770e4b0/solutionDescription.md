W przykładzie z błędem, `Car.drive()` zaloguje do konsoli obiekt `Car`, natomiast `driveMyCar()` zaloguje globalny obiekt lub `undefined` w zależności od tego, czy aktywny będzie tryb ścisły (_strict mode_).

Przypisując do stałej `driveMyCar` metodę `Car.drive`, przypisujemy ją w globalnym kontekście.

Wywołanie `this` będzie więc odnosiło się do globalnego obiektu (`Window` w przeglądarkach, `global` w Node.js), lub zwróci `undefined` jeśli będziemy w trybie ścisłym.

Jeśli chcemy to naprawić, musimy wyraźnie powiązać przypisywaną metodę `drive` z innym kontekstem, w którym chcemy aby została wykonana. Takie powiązanie uzyskamy korzystając z metody `bind()`.

W naszym przypadku chcemy powiązać tą metodę z obiektem `Car`.
