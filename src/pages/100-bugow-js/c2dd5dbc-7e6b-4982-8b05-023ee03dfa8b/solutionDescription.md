Działanie `037 - 027` w trybie nieścisłym zwróci wynik `8`.

Tryb nieścisły pozwala na interpretację liczba zaczynających się zerem jako liczb oktalnych (ósemkowych).

`037` w systemie ósemkowym to `31` w systemie dziesiętnym.

`027` w systemie ósemkowym to `23` w systemie dziesiętnym.

`31 - 23` daje wynik `8`.

Aby zablokować interpretację liczb oktalnych poprzez sam prefiks `0`, musimy uaktywnić tryb ścisły.

Można to zrobić np. poprzez deklarację `"use strict"`.

Tryb ścisły automatycznie uaktywnia się też w modułach JavaScript w momencie gdy w kodzie pojawia się `import` lub `export`.

W trybie ścisłym zapis oktalny wymaga bardziej wyraźnego prefiksu `0o`, a nie tylko samego `0`.
