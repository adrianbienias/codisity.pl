W "zarobaczonym" przykładzie, wszystkie 3 logowania do konsoli wykonają się z tym samym, zerowym opóźnieniem.

Dzieje się tak, ponieważ aktualnie wszystkie najpopularniejsze przeglądarki przechowują w pamięci wartość opóźnienia z `setTimeout()` jako 32 bitową, podpisaną liczbę całkowitą.

Oznacza to, że w pamięci możemy zapisać w systemie binarnym wyłącznie liczby z zakresu od `-2147483647` do `2147483647`.

32 bity to 32 jednostki pamięci mogące przechowywać wartość 0 lub 1.

Pierwszy bit odpowiada za podpisanie liczby tj. zakomunikowanie czy jest ona dodatnia czy ujemna. W pozostałych 31 bitach możemy więc zapisać maksymalnie 31 jedynek.

31 jedynek w systemie binarnym to 2 147 483 647 w systemie dziesiętnym.

Użycie każdej liczby, która jest większa, jak np. 2 147 483 64**8** lub nieskończoności, spowoduje "przelanie" się dostępnego miejsca w pamięci i poskutkuje wykonaniem `setTimeout()` z zerowym opóźnieniem.

Środowisko uruchomieniowe _Node.js_ w przeciwieństwie do przeglądarek informuje nas o tym błędzie. Do konsoli logowane jest ostrzeżenie, informujące, że wartości `Infinity` oraz `2147483648` nie mieszczą się w pamięci jako 32 bitowej podpisanej liczby całkowitej i z tego względu czas opóźnienia zostaje ustawiony na `1`.
