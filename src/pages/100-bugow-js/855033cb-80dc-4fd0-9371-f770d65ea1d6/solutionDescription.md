_Getter'y_ służą do pobierania informacji i powinny być wywoływane jak własności obiektu, a nie metody (czyli bez nawiasów).

_Getter'y_ nie obsługują też parametrów. Nie moglibyśmy stworzyć _getter'a_ `get bar(param)`.

W związku z powyższym, w przykładzie z błędem, w 11 linii zostanie wyrzucony błąd `obj.bar is not a function`.

Aby go naprawić, wystarczy, że usuniemy nawiasy z wywołania `bar`.
