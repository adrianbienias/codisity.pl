Żaden z trzech początkowych przykładów nie będzie się do nadawał do sprawdzenia, czy tablica jest pusta.

Po pierwsze, pusta tablica nie jest wartością fałszywą według listy wartości fałszywych w JavaScript, więc `if ([])` odpada.

Po drugie, luźne porównanie `==` tablicy z wartością `false` jest najbliższe spełnieniu zadania, ale nie daje 100% pewności.

Po trzecie, ścisłe porównanie `===` odpada, bo porównywane typy danych `[]` i `false` się od siebie różnią.

W przypadku luźnego porównania tablicy z wartością logiczną, `==` sprowadzi najpierw wartości do jednego typu, którym będzie wartość liczbowa (tak działa algorytm tego operatora).

`[] == false` zamieni się na `Number([]) === Number(false)`. Typy porównywanych danych się zgadzają, więc luźne porównanie zastosuje już algorytm porównania ścisłego.

Wartość liczbowa z pustej tablicy zostanie skonwertowana do wartości `0`. Wartość liczbowa z wartości `false` da również `0`.

Mamy zwycięzcę... prawie. Bo co jeśli zamiast pustej tablicy, pojawi się np. `[0]`, albo `["0"]`?

Funkcja `Number()` sprowadzi taką tablicę również do wartości `0`. 🤯

Nie możemy więc polegać na porównaniu `[] == false`, jeśli zależy nam na wykonaniu instrukcji warunkowej tylko w przypadku gdy tablica jest pusta.

Rozsądną opcją może być użycie własności `length` na obiekcie tablicy. Zwrócona zostanie wtedy wartość liczbowa wskazująca na ilość elementów znajdujących się w tablicy.

Jeśli zwróconą wartością będzie wartość `0`, to mamy wtedy pewność, że tablica nie zawiera żadnych elementów (jest pusta).
