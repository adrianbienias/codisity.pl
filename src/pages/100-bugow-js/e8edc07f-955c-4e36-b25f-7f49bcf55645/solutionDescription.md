Przykład błędnego kodu nie jest wymyślony przeze mnie. Znalazłem go w kursie JavaScript, który mianował się tytułem "_Prawdopodobnie najlepszy darmowy kurs JavaScript_".

W sekcji dodawania elementów do tablicy, użycie operatora `+` było zaproponowane przez autora, jako metoda dodawania do tablicy nowych elementów, lub łączenia ze sobą tablic.

`+` jest przeładowanym operatorem dodawania, tzn. ma więcej niż jedną funkcjonalność, która zależy od typów danych, które zostaną podstawione jako operandy.

`+` może matematycznie dodawać wartości liczbowe, ale może też łączyć ze sobą ciągi znaków.

W przypadku próby dodania do siebie dwóch tablic, w pierwszej kolejności algorytm operatora `+` wymusi konwersję tablic do ciągów znaków poprzez wywołanie metody `toString()`.

`[1, 2, 3].toString()` zwróci ciąg znaków `"1,2,3"`.

Analogicznie dla drugiej tablicy będzie to `"4,5,6"`.

Połączenie tych dwóch ciągów znaków da nam więc ciąg znaków `"1,2,34,5,6"`.

Nie uda się nam odwrócić tej operacji np. poprzez `"1,2,34,5,6".split(",")`, bo nowa tablica otrzyma wtedy zlepiony element `"34"`. Tracimy też informację o oryginalnym typie danych.

Aby połączyć, lub w sposób nienaruszający oryginalną tablicę (`push()`, patrzę na Ciebie), dodać nowe elementy, najwygodniej będzie użyć operatora rozkładu (_spread_), rozkładając tablicę wewnątrz nowej tablicy `[...[1, 2, 3]]`.

W ten sposób możemy łączyć dowolną ilość tablic i dodawać do nich dowolną ilość nowych elementów.

Innym sposobem może być użycie np. `Array.prototype.concat()`.
