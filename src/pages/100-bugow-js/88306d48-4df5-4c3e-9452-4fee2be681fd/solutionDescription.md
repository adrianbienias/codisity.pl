Błędy zostaną wyrzucone w trzech liniach:

8: `Numeric separators are not allowed here.`

11: `Numeric separator can not be used after leading 0.`

17: `Numeric separators are not allowed here.`

Pozostałe zapisy liczb i działań są poprawne.

Pomiędzy cyframi w liczbach dziesiętnych można umieszczać wizualny separator `_`.

Przydaje się to przy trzycyfrowych grupach, czyli liczebnikach potęgi tysiąca (tysiąc, milion, miliard, itd.).

W niektórych sytuacjach, nie możemy jednak zastosować podkreślenia w zapisach liczbowych.

Podkreślenie nie może pojawić się jako pierwszy znak, bo taki zapis odnosiłby się do definiowania nazwy np. zmiennej (`_myVar`, `_123`).

Podkreślenie nie może pojawić się na końcu liczby (np. `100_`).

Podkreślenie nie może wystąpić po początkowym zerze (np. `0_1`).

Podkreślenia nie można użyć w zapisach wykładniczych (np. `1_e2`).

Podkreślenia nie można też użyć po początkowej definicji zapisów liczb w postaci binarnej, ósemkowej, czy szesnastkowej (np. `0b_001`).

Przy użyciu `_` możemy więc wizualnie separować liczby dziesiętne jak np. `125_4912_6824`, jak również zapisy liczby w innych systemach liczbowych np. separując co 4 bity liczb binarnych np. `0b1010_1101`.
