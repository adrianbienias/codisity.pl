Porównywanie ze sobą symboli oraz obiektów, które zostały zdefiniowane niezależnie, da nam ten same efekt - fałsz.

Jedynie porównywanie tych samych stałych, które przechowują dany obiekt lub symbol zwróci prawdę.

Wówczas porównywane będą rzeczywiście te same obiekty/symbole, przechowywane w pamięci pod adresem na który wskazuje dana stała.

Na tym etapie podobieństwa obiektów i symboli z grubsza się kończą.

Symbole z natury służą do utworzenia unikalnej wartości.

Nie są też konwertowane do ciągu znaków w sytuacjach wymuszających tego typu operację.

`test[sym1]` i `test[sym2]` zalogują do konsoli `"Foo"` i `"Bar"`.

Co ważne, `test[Symbol()]` zwróci `undefined`, bo jak już wcześniej ustaliliśmy, każdy nowo utworzony symbol jest unikalny.

Jednocześnie własności zdefiniowane za pomocą symboli nie będą widoczne po zalogowania do konsoli obiektu `test` (będą prywatne).

Nazwy własności w `test[obj1]` i `test[obj2]` ulegną konwersji do ciągu znaków `"[object Object]"`.

Istotne jest aby omyłkowo nie zinterpretować takiego zapisu jako tablicy z elementami `object` i `Object`.

`"[object Object]"` to zwykły ciąg znaków powstający w wyniku konwersji `({}).toString()`

Ten sam ciąg znaków użyty dwukrotnie jako nazwa własności obiektu `test` powoduje, że każde kolejne jego użycie nadpisuje poprzednio zdefiniowaną własność o tej samej nazwie.

`test[obj1]` i `test[obj2]` logują do konsoli `"Qux"` bo taka wartość została przypisana jako ostatnia dla `test["[object Object]"]`.
