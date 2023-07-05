`first val, second a,b` zostanie zwrócone w wywołaniu nr 2.

**Przykłady 1 i 3** to wywołania tzw. etykietowanego szablonu (_tagged template_). Używając grawisów (_backtick_ `` ` ``) możemy wywoływać funkcje przekazując literał szablonu (_template literal_) jako argument.

Funkcja ma wtedy do dyspozycji goły tekst jako pierwszy parametr, a pod kolejnymi, dynamicznie generowanymi parametrami, dostępne są ewaluacje notacji `${}` przekazane wewnątrz literału szablonu.

**W przykładzie 1**, w funkcji pod parametrem `args` mamy dostępną tylko tablicę z gołymi fragmentami tekstu z literału szablonu. Brakuje w niej elementów wywoływanych za pomocą notacji `${}`, które dostępne są pod kolejnymi, dynamicznie tworzonymi parametrami funkcji.

**Przykład 3** różni się od 1 tylko użyciem parametru reszty dla argumentów funkcji. Tym samym, wszystkie dynamicznie wygenerowane parametry dostępne są w tablicy `args`.

Pierwszy element tablicy zawiera 3 wartości gołego tekstu, te same, które zostały zalogowane w przykładzie 1.

Kolejne elementy tablicy to wartości wywołane wewnątrz notacji `${}`, czyli `val` oraz tablica z 2 elementami `["a", "b"]`.

**Przykład 2** zwraca nam ciąg znaków przekazany jako argument, już po ewaluacji kodu umieszczonego w notacjach `${}`.

**Przykład 4** robi to samo co 2, jednak z uwagi na użycie parametru reszty `...args`, zwrócona zostaje tablica przekazanych argumentów. Przekazany został tylko 1 argument w postaci literału szablonu, więc tablica zawiera tylko 1 element, ciąg znaków, taki jak ten z przykładu nr 2.
