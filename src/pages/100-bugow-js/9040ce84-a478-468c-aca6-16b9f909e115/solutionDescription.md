Obiekty można pieczętować (_seal_) oraz zamrażać (_freeze_).

Obie metody działają bardzo podobnie, blokując modyfikacje takie jak usuwanie czy dodawanie własności obiektu.

Obiekt zapieczętowany przez `Object.seal()` umożliwia jednak modyfikację istniejących własności w przeciwieństwie do obiektu zamrożonego przez `Object.freeze()`.

`objSealed` zezwala na zaktualizowanie wartości do `{ value: 22 }`.

`objFreezed` nie umożliwia takiej modyfikacji i zatrzymuje początkową wartość `{ value: 11 }`.
