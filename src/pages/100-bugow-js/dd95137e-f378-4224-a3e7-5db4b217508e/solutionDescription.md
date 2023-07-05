Pierwsze cztery przykłady zalogują ciągi znaków w ten sam sposób:

```
foo
bar
baz
```

Niespodzianką może być ostatni, piąty przykład, który zwróci:

```
foo \nbar \nbaz
```

`String.raw()` zwraca literał szablonu w oryginalnej formie, bez respektowania wstecznego ukośnika jako znaku ucieczki np. dla przejść do nowej linii poprzez `\n`.

`String.raw()` respektuje jednak zagnieżdżanie literałów szablonu za pomocą `${}`, wykonując je już z uwzględnieniem znaków ucieczki, stąd też przykład z czwartej linii działa tak samo jak przykład z linii trzeciej.
