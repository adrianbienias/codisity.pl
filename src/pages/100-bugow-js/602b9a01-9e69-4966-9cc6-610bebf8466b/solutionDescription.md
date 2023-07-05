Po uruchomieniu kodu z przykładu z błędem, w konsoli ujrzymy `Error: Unexpected token 'N', "Not Found" is not valid JSON`.

API, którego użyłem do tego przykładu zwraca strony z błędem (404) w formie czystego tekstu. Tekst `Not Found` nie jest więc prawidłowym formatem JSON, więc wywołanie `response.json()` wyrzuca błąd, który zostaje przechwycony w sekcji `catch()`.

W sekcji `catch()` założyłem, że wyrzucony obiekt błędu, może w jakiś sposób znać status z obiektu `response`.

Moglibyśmy co prawda stworzyć stałą i przypisać do niej obiekt błędu `const myError = Error`, a następnie dodać własność `status` i przypisać do niej wartość z `response`, dodając kod `myError.status = response.status`.

Musielibyśmy jednak sami obsłużyć wyrzucanie takiego błędu przez `throw myError`.

Po pierwsze dodajemy więc sprawdzanie własność `ok` w obiekcie `response`. Jeśli jest to wartość fałszywa, to znaczy, że kod odpowiedzi z odpytywanej strony był inny niż z zakresu `200-299`.

Dodajemy więc instrukcję warunkową, która sprawdza poprzez negację `if (!response.ok)`. Jeśli warunek zostanie spełniony to samodzielnie wyrzucamy błąd, aby później obsłużyć go w sekcji `catch()`.

Aby w łatwy sposób uzyskać dostęp do obiektu `response` w wychwyconym błędzie, przekazujemy go do obiektu `Error` jako drugi argument z obiektem opcji i własnością `cause`.

Finalnie wychwycony błąd w `error.cause` będzie zawierał cały obiekt `response`. Możemy więc już łatwo obsłużyć kody błędów w `catch()` poprzez `error.cause.status`.
