`promise1` i `promise2` to obiekty `Promise`, co jest wyraźnie logowane do konsoli w liniach 8 i 9.

`promise2`, mimo że w założeniu rozwiązuje się do obiektu `promise1`, finalnie zostaje rozwiązane do wartości `foo`.

`resolve()` spłaszcza przekazane obietnice jeśli takie zostają przekazane jako wartość rozwiązania obietnicy i rozwiązuje je wszystkie.

`value` po rozwiązaniu `promise2`, będzie więc wartością przekazaną w `resolve()` w `promise1`.

`value === promise1` zwróci więc fałsz, bo `value` to `foo`, a nie obiekt obietnicy `promise1`.
