Do formatu JSON możemy skonwertować jedynie niektóre typy danych.

Ciągi znaków i wartości liczbowe nie stanowią problemu.

Podobnie wartości logiczne, `true`/`false`.

Wartość `null` również zostanie poprawnie skonwertowana.

Do `null`a skonwertowane zostaną także wartości `NaN` i `Infinity`.

Tablice `[]` zostaną poprawnie skonwertowane do formatu JSON, ale kolekcje `Map` i `Set` zostaną skonwertowane do pustego obiektu `{}`.

Funkcje, symbole oraz wartość `undefined`, konwertują się różnie, w zależności od kontekstu wystąpienia.

Samodzielne wystąpienia zamieniane są na `undefined`. Jako elementy tablicy, stają się `null`em, a jako elementy obiektu, zostają pominięte.
