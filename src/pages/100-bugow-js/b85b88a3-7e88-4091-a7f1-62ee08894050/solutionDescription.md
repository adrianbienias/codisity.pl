Logując zmienną `foo`, dostaniemy obiekt `{ val: 2 }`, bo taki został do niej przypisany w 3 linii.

Zwróć uwagę, że ta operacja przypisania ma efekt nadpisania, tzn. przypisujemy nową wartość do zmiennej `foo`. Nie ma tu miejsca modyfikacja własności `foo.val`, więc nie wpływa to na początkowy obiekt przypisany (przez referencję) do zmiennej `bar`.

Zmienna `bar` zwiera więc obiekt z własnością `val` o wartości `1`. Dodatkowo w obiekcie pojawia się też własność `prop`, bo zmienna `bar` to tak naprawdę jedynie alias początkowego obiektu ze zmiennej `foo`.

W 3 lini, przypisanie `foo.prop` działa też dla aliasu czyli, aktywuje przypisania też dla `bar.prop`.

Moglibyśmy więc to zapisać też jako `bar.prop = foo = { val: 2 }`.

W tym miejscu "ginie" też początkowa wartość zmiennej `foo`, którą nadpisujemy nowym obiektem, który nie jest już związany referencją z obiektem przypisanym do zmiennej `bar`.

Od tego momentu, obiekt w zmiennej `foo` jest już nowym obiektem, który nie ma pojęcia o własności `prop`, dlatego loguje `undefined`.
