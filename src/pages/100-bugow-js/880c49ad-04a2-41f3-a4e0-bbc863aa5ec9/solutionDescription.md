Tablica `[, , ,]` to tablica z pustymi, niezdefiniowanymi slotami.

Tworząc tablicę np. `[1, 2, , 4]`, definiujemy tablicę z 4 elementami, z czego trzecią wartością jest `undefined`.

Gdy dostawimy kolejny przecinek na końcu `[1, 2, , 4,]`, nie spowoduje on utworzenie kolejnego, piątek elementu tablicy.

Zamiast tego zostanie zignorowany, ze względu na własność JavaScript zwaną końcowym przecinkiem (_trailing comma_).

Zapisując tą samą tablicę w inny sposób, umieszczając każdy element w nowej lini, końcowy przecinek nabiera więcej sensu.

```
[
  1,
  2,
  ,
  4,
]
```

Dla wygody dopisywania kolejnych elementów w takim zapisie, końcowy przecinek nie wprowadza nowego elementu, a jest jedynie częścią spójnego zapisu każdego z elementów z tablicy.

JavaScript ignoruje więc końcowy przecinek i nie traktuje go jako rozdzielacz elementów.

Tablica `[, , ,]`, ma więc długość (liczbę elementów) równą `3`.

Taką samą długość będzie miała tablica bez pustych wartości, przykładowo `[1, 2, 3,]`.

Dla uproszczenia można zadać sobie pytanie - ile przecinków jest potrzebnych do rozdzielenia N elementów.

Będzie to zawsze wartość o 1 mniejsza niż liczba elementów.

Konwersja tablicy `[, , ,]` do ciągu znaków wyraźnie to pokazuje, logując do konsoli ciąg znaków składający się z dwóch przecinków (w tablicy są 3 elementy, a 3 minus 1 daje nam 2 przecinki rozdzielające).
