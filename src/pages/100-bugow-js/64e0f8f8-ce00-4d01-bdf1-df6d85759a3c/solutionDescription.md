W przykładzie z błędem zostanie zwrócona wartość `3`.

Niezależnie od tego czy wewnątrz bloku `try` zostanie wyrzucony wyjątek, blok `finally` wykona się zawsze, w dodatku bezpośrednio przed wyrażeniami przepływu sterowania (`return`, `throw`, `break`, `continue`) w innych blokach.

Używając `return` w bloku `finally` nie ma sensu abyśmy używali `return` w pozostałych blokach, bo po prostu nie zostanie on wykonany.
