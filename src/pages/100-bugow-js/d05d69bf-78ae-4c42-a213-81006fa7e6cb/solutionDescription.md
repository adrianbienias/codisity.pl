W przykładzie z błędem wywołanie metody `get()` zwróci `undefined`, a wywołanie metody `has()` zwróci `false`.

Obiekt mapy definiuje metody, które umożliwiają interakcje z elementami mapy, ale tylko wtedy gdy elementy zostaną uprzednio wprowadzone w poprawny sposób.

Dodając własności do obiektu w sposób tradycyjny, możemy je wyciągnąć również jedynie tradycyjną metodą tj. wywołując np. `dictionary.car`.

Aby korzystać z mapy w sposób zgodny z przeznaczeniem, musimy dodawać nowe elementy za pomocą metody `set()`.

Możemy też zdefiniować początkowe elementy przekazując je do konstruktora tworzącego nową mapę:

```
new Map([
  ["item1", "value2"],
  ["item2", "value2"],
])
```
