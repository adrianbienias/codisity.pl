W błędnym przykładzie do konsoli zostanie zalogowany obiekt `Promise`.

Nie mamy w nim dostępu do danych, bo obietnica nie została wypełniona.

Aby rozwiązać ten problem musimy dodać brakujące słowo kluczowe `await` przed wywołaniem `getData()`.

Moglibyśmy się też dostać do pobranych danych poprzez wywołanie metody `then()` na obiekcie `Promise`.

`getData().then(resp => console.log(resp))` zwróciłoby nam dane, ale nie zostałyby one przypisane do stałej `data`.

Poprzez użycie konstrukcji `await getData()`, wykonywanie kodu zaczeka na pobranie danych i przypisze je do stałej `data`. Dzięki temu będziemy je mogli przetworzyć w dalszej części funkcji np. logując je do konsoli.
