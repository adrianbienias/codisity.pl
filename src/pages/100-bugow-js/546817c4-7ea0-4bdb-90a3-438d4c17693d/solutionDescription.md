W komentarzach obok zwracanych wartości dodałem wykrzykniki dla rozwiązań, które w mojej ocenie są najbardziej nielogiczne.

JavaScript nie jest spójny w kwesti działania operatora porównania `==` w porównaniu do ewaluacji wyrażeń warunkowych.

Porównując ze sobą dwa elementy, które mają różne typy i oczekując zwrócenia wartości logicznej `true`/`false`, intuicyjnie możemy zakładać (błędnie), że algorytm porównania będzie dążył do sprowadzenia odmiennych typów danych do wartości logicznych.

Tak robi instrukcja warunkowa, która przyjmując typ danych inny od wartości logicznej, konwertuje ją na taką.

Operator `==` przypadku porównywanie różniących się typów danych, najczęściej dąży jednak do sprowadzenia różnych typów danych do wartości liczbowych.

Stąd też powszechna opinia, aby unikać używania operatora `==`, gdyż zwraca on wartość logiczną, ale sam nie dąży do konwersji odmiennych typów danych na wartości logiczne przed ich porównaniem.

Algorytm stojący za `==`, jeśli porównuje różne typy danych, w pierwszej kolejności dąży on do sprowadzenia ich do wartości prymitywnych (konwertując obiekty do wartości liczbowych lub ciągi znaków).

Następnie, jeśli typy porównywanych danych dalej się różnicą, algorytm dąży on do sprowadzenia wartości prymitywnych do wartości liczbowych.

Algorytm konwersji do wartości liczbowych wprowadza dodatkowe zamieszanie, konwertując wartości, które z definicji w języku JavaScript są prawdziwe (jak np. ciąg białych znaków, puste tablice), do wartości liczbowych `0`, które to z kolei, z definicji są fałszywe.

Gdy porównujemy różne typy danych za pomocą operatora porównania `==`, bliskie prawdy jest zapisanie takiego porównania z użyciem konwersji porównywanych danych do wartości liczbowych oraz operatora ścisłego porównania `Number(a) === Number(b)`.
