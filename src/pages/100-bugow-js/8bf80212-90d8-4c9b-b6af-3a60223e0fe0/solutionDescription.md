Operator przesunięcia w lewo `<<` pozwala na modyfikację bitów poprzez ich przesunięcie w lewo o zadaną wartość.

Zwracana wartość jest w postaci dziesiętnej (decymalnej).

Dziesiętna liczba `8` to w 32 bitowym zapisie binarnym `00000000000000000000000000001000`.

W JavaScript, zapis binarny poprzedzany jest prefiksem `0b`.

Binarny (dwójkowy) zapis `1000` jest więc równy decymalnej (dziesiętnej) liczbie `8`.

W systemie dwójkowym podstawą do potęgowania liczby jest `2`.

Każdy ze znaków liczby liczony od prawej, to potęgowanie o rosnącym o 1 wykładniku, zaczynając od 0.

Binarny `1000` to 2<sup>3</sup> czyli `8`.

W systemie dziesiętnym podstawą do potęgowania liczby jest `10`.

Decymalny `1000` to 10<sup>3</sup> czyli `1000`.

`8 << 3` oznacza chęć przesunięcia binarnego zapisu decymalnej ósemki w lewo o trzy bity.

Z `1000` powstaje więc `1000000`.

Binarne `1000000` to 2<sup>6</sup> czyli decymalne `64`.

Co ciekawe, `8 << 35` również zwraca `64`.

Ponieważ standardowy zapis liczbowy w JavaScript jest zawarty w 32 bitach, chcąc przesunąć zapis liczbowy o `35` miejsc, dochodzimy do końca 32 bitowego zapisu i wracamy na początek.

Przesunięcie o `35` miejsc to tak naprawdę przesunięcie o `35 - 32`, czyli de facto `3` miejsca.

`8 << 3` jest więc równe `8 << 35`, `8 << 67`, `8 << 99`, itd. ponieważ zwiększamy przesunięcie o 32 bity czyli pełny ciąg.
