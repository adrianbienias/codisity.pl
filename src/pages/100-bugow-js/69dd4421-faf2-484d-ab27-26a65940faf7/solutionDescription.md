W przykładzie z błędem, zamienione zostanie tylko pierwsze wystąpienie

```
Król Jan
kupił królowej Karolinie
korale koloru koralowego
```

Jeśli w metodzie `replace()` jako pierwszego argumentu (szukanego fragmentu) użylibyśmy ciągu znaków, możliwa byłaby zamiana tylko i wyłącznie pierwszego wystąpienia.

Chcąc zamienić wszystkie wystąpienia należałoby wtedy użyć metody `replaceAll()`.

Jednak przekazując w pierwszym argumencie `replace()` wyrażenie regularne (zdefiniowane wewnątrz dwóch ukośników `/`), możemy ustawić w nim również flagi, takiej jak niewrażliwości na wielkość liter (`i`), czy działanie globalne (`g`).

Z flagą globalną (`g`) w wyrażeniu regularnym, działanie `replace()` będzie miało efekt w całym ciągu znaków.

```
Król Jan
kupił królowej Janinie
korale koloru koralowego
```
