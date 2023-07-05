W przykładzie z błędem, do konsoli zostanie zalogowany wynik `35`.

Zdublowanie nazwy parametru w deklaracji funkcji prowadzi do nadpisania wartości przez ostatni nadpisujący parametr.

W naszym przypadku `a + a + c` z przekazanymi argumentami `5, 10, 15` prowadzi do wykonania działania `10 + 10 + 15`.

Wystąpienie takiej sytuacji powinno być jednak zgłoszone przez JavaScript jako błąd składniowy.

Nie otrzymujemy jednak takiego błędu, ponieważ kod z przykładu działa w trybie nieścisłym.

Aby aktywować tryb ścisły, musimy użyć deklaracji `"use strict"`.

Stosuje się ją na początku pliku, jeśli chcemy aktywować tryb ścisły w całym pliku, lub na początku wnętrza definiowanej funkcji, jeśli tryb ścisły ma być aktywny tylko dla danej funkcji.

Tryb ścisły jest też domyślnie aktywowany w JavaScriptowych modułach. Używając więc eksportu lub importu np. `export function sum(a, a, c)` też aktywujemy tryb ścisły.

**Ważne**: brak zgłoszonego błędu w przypadku nadpisywania parametrów funkcji to nie jedyna sytuacja, w której wykonywany kod może zachować się inaczej w zależności od aktywnego, bądź nie, trybu ścisłego.
