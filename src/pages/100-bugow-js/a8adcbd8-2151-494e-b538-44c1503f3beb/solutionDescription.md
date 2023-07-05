`Object.is()` mimo, że swoją nazwą sugeruje porównywanie obiektów, w rzeczywistości porównuje dwie wartości przekazane jako argumenty do metody `is()`.

Metoda działa bardzo podobnie do porównania, które wykonuje operator `===`, ale z małymi wyjątkami.

Porównanie dwóch wartości `NaN` za pomocą `Object.is()` da prawdę.

Tego samego nie możemy się jednak spodziewać po działaniu operatora `===`, który jeśli napotka operand `NaN`, to zawsze zwraca fałsz.

Nie ma tutaj znaczenia czy `NaN` jest przekazany bezpośrednio jako wartość, czy jest wynikiem działania, np. dzielenia `0 / 0`.

Drugim wyjątkiem i nieścisłością pomiędzy `Object.is()`, a operatorem `===` jest porównanie zera ujemnego z zerem dodatnim.

W informatyce zapis liczb w pamięci w postaci binarnej wiąże się z użyciem dodatkowego bita (_sign_), który określa czy liczba jest dodatnia czy ujemna.

Bit ten może być użyty również dla liczby `0`, tym samym rozgraniczając ją na dwie wartości: `-0` i `+0`.

Dla `Object.is()` zero ujemne będzie różniło się od zera dodatniego więc porównanie ich zwróci `false`.

Dla operatora `===` oba zera będą takie same, zwracając w efekcie ich porównania wartość `true`.
