Poprawny wynik dodawania z `25.65` i `4.15` wynosi `29.80`. Jednak `total` zwraca liczbę `29.799999999999997`.

Dzieje się tak, ponieważ komputerowe operacje matematyczne na liczbach zmiennoprzecinkowych mają ograniczoną precyzję ze względu na przetwarzanie ich w formie binarnej.

W JavaScript typem danych, który obsługuje zarówno liczby całkowite jak i zmiennoprzecinkowe jest typ `Number`.

Jest on zaimplementowany jako 64 bitowy format _double-precision floating-point_ (znanego też jako _float64_).

Rozwiązaniem problemu może być użycie metody zaokrąglającej wynik `Number.prototype.toFixed()`. Nie jest to jednak rozwiązanie idealne i w przypadku wielu operacji matematycznych, końcowy wynik może być podany błędnie.

W przypadku operacji walutowych sugerowanym rozwiązaniem jest przetwarzanie wszystkich kwot w ujęciu najniższego nominału.

100 zł to 10 000 groszy  
$100 to 10 000 centów

Operacje na liczbach całkowitych nie są obarczone problemami zmiennoprzecinkowych zaokrągleń, a chcąc zaprezentować ostateczną kwotę wystarczy podzielić ją przez 100.
