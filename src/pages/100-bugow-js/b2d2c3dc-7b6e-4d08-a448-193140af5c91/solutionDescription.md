Zacznijmy od tego, że użycie operatora `==` lub `===` nie ma tutaj żadnego znaczenia. Typ porównywanych danych jest taki sam, więc ścisłe porównanie (`===`) zadziałałoby identycznie jak zwykłe (`==`).

Jednak mimo, że wartości obiektów `user1` i `user2` są takie same, ich porównanie zwraca fałsz, ponieważ są to dwa różne obiekty.

W poprzednich bugach (np. #001) dowiedziałeś się, że przypisywanie obiektów do stałych/zmiennych polega na przypisaniu jedynie ich referencji tj. adresu z pamięci RAM.

Oznacza to, że porównując wartości przypisane do stałych `user1` i `user2`, porównujemy tak naprawdę jedynie adresy w pamięci RAM, w których zapisane są te obiekty. A te w naszym przypadku są różne.

Sytuacja ma się inaczej w przypadku porównywania typów pierwotnych jak ciągi znaków (_string_), liczby (_number_), wartości logiczne (_boolean_).

Możemy więc użyć obejścia i za pomocą `JSON.stringify()` przekonwertować obiekty na ciągi znaków. Następnie możemy porównać ciągi znaków i otrzymać `true`, już zgodnie z naszymi oczekiwaniami.
