W przykładzie z błędem, zadeklarowanie zmiennej z użyciem wyrażenia `var`, spowoduje zalogowanie konsoli w obu miejscach wartość `2`.

Nie jest to błąd _per se_, o ile jesteśmy świadomi własności działania deklaracji `var`, która to deklaruje zmienną o zasięgu globalnym.

Znacznie lepszym pomysłem dla deklaracji zmiennych będzie używanie wyrażenia `let`. Wtedy zasięg działania jest ograniczony do bloku kodu (`{}`), wewnątrz którego `let` zostało zdefiniowane.

Używając `let`, do konsoli zostaną zalogowane kolejno, wartości `2` i `1`.
