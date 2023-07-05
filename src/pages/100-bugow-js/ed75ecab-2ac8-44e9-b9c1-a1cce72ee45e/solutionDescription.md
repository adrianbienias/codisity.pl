W przykładzie z błędem, w konsoli ujrzymy `Error: foo is not a function`.

Podciągnięcie (_hoisting_) ma zastosowanie w obu przypadkach - deklaracji funkcji `bar()` oraz wyrażenia przypisania anonimowej funkcji do zmiennej `foo` zadeklarowanej z użyciem `var`.

Jeśli pozbędziemy się wywołania `foo()` generującego błąd, wywołanie `bar()` zadziała prawidłowo.

W przeciwieństwie do pociągania deklaracji funkcji `bar()`, w przypadku funkcji przypisanej do zmiennej `foo` podciągnięta zostaje tylko sama deklaracja zmiennej, bez przypisanej do niej wartości.

`foo` w momencie wywołania ma więc wartość `undefined`, a `undefined` funkcją nie jest, tak jak mówi nam treść błędu.

Patrząc na kod, możemy mieć jednak wrażenie, że `foo` funkcją jest i to treść błędu jest błędna.

Aby poprawić tą sytuację, możemy zamienić słowo kluczowe `var` na `let` lub `const`. Ujrzymy wtedy bardziej jasny komunikat błędu `Error: Cannot access 'foo' before initialization`.

Niemniej, żeby naprawić działanie kodu, musimy po prostu przenieść wywołanie funkcji za wyrażenie przypisywania funkcji do zmiennej.
