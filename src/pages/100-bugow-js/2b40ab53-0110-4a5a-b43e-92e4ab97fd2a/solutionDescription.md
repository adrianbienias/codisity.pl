W błędnym przykładzie wszystkie trzy wywołania zalogują do konsoli wartość `1`.

Funkcja generatora (z gwiazdką `*`) zwraca obiekt generatora, który możemy iterować wywołując metodę `next()`.

Wywołując funkcję `iterate(array)`, zwrócony zostaje nowy obiekt generatora.

Wywołując wielokrotnie `iterate(array).next()` za każdym razem dostajemy nowy obiekt, więc wywoływanie na nim metody `next()` zawsze zwraca tylko pierwszą iterację z tablicy.

Aby to naprawić, musimy zwracany z funkcji obiekt generatora przypisać do stałej (lub zmiennej) i dopiero wtedy wywoływać metody `next()` na tym obiekcie.
