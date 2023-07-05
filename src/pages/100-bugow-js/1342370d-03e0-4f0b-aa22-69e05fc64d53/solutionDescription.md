Uruchomienie kodu z błędem wyrzuci nam do konsoli błąd `Cannot access 'Cat' before initialization`.

W JavaScript deklaracje funkcji oraz zmiennych definiowanych wyrażeniem `var` są podciągane na początek wykonywanego kodu. Własność tą z j. angielskiego nazywamy _hoisting_.

_Hoisting_ w JS oznacza, że możemy najpierw wywołać funkcję, a dopiero w dalszej części kodu ją zdefiniować.

Nie możemy jednak zrobić tego samego z klasą. Deklaracja `class` nie jest podciągana, przez co nie możemy jej wywołać przed jej zdeklarowaniem.

I dokładnie to jest powodem wystąpienia błędu w wcześniej przedstawionym błędnym kodzie.

Aby naprawić błąd, musimy po prostu przenieść wywołanie `new Cat()` do dalszej części kodu, aby wywołanie nastąpiło już po deklaracji klasy.
