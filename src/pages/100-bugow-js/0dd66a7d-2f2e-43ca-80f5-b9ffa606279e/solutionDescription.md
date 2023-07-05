Przejdźmy po kolei przez operacje jakie wykonuje JavaScript.

Utworzona zostaje zmienna `a` bez przypisania wartości, czyli jej wartość to `undefined`.

Operator przypisania `=` przechodzi do ewaluacji wartości po prawej stronie operatora.

Utworzony zostaje obiekt z własnością `a`, której wartość to `undefined`.

Destrukturyzując obiekt, przemianowujemy własność obiektu o nazwie `a` na nazwę `b`, tworząc tym samym zmienną `b`.

Wprowadzony zostaje domyślny parametr `"foo"`, który zostaje przypisany jako wartość zmiennej, w przypadku gdy wartość destrukturyzowanej własności obiektu okazałaby się fałszywa.

Z uwagi na to, że obiekt ma kształt `{ a: undefined }`, to rozbijając go na zmienną `a`, przemianowaną na `b`, wartość własności `a` jest fałszywa, zostaje więc użyty parametr domyślny `"foo"`.

Finalnie utworzona zostaje więc zmienna `b` z wartością `"foo"`.

Zmienna `a` nie ulega po drodze żadnym modyfikacjom i zachowuje swoją początkową wartość `undefined`.
