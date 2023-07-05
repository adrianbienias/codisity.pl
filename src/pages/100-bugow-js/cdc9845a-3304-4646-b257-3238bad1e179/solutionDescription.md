`Proxy` umożliwia ustanowienie pełnomocnictwa dla danego obiektu.

Oznacza to, że poprzez `new Proxy(greeting, {})`, tworzymy nowy obiekt proxy `{}`, który będzie zachowywał się tak jak obiekt `greeting`.

Wszystkie operacje na takim obiekcie w tym np. modyfikacje własności `message2`, będą miały odzwierciedlenie w oryginalnym obiekcie, czyli zmiany zajdą zarówno w obiekcie `proxy1` jak i `greeting`.

Na tym etapie proxy przypomina stworzenie aliasu obiektu np. poprzez `proxy1 = greeting`.

Mamy więc przypisanie przez referencję i modyfikowanie obiektu `proxy1` jest tożsame z modyfikowaniem obiektu `greeting`.

Proxy umożliwia jednak dodanie dodatkowej logiki, która zostanie wykonana w imieniu oryginalnego obiektu.

Możemy w ten sposób dodać np. walidację _setter_'ów, przez co przed modyfikacją oryginalnego obiektu, obiekt proxy najpierw wykona własny kod i dopiero w nim zdecyduje czy dana modyfikacja może zostać wykonana.

Tworząc obiekt `validator` i ustawiając go jako proxy dla obiektu `greeting` poprzez `new Proxy(greeting, validator)`, blokujemy możliwość ustawienia własności `message2` na wartość `no one`.

`proxy2.message2 = "no one"` staje się więc niedozwolone i nie zmodyfikuje ani obiektu proxy ani obiektu oryginalnego.

Jeśli aktywujemy tryb ścisły, to ze względu na taką niedozwoloną akcję, wyrzucony zostanie błąd `'set' on proxy: trap returned falsish for property 'message2'`.
