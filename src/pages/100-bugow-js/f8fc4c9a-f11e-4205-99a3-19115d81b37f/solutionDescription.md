W błędnym przykładzie zarówno `now` jak i `future` zalogują do konsoli **tą samą datę**, odległą o 6 godzin w przyszłość.

Metoda `setHours()` mutuje obiekt daty, na którym zostaje wykonana.

Aby rozwiązać ten problem, dla stałej `future` musimy utworzyć nowy obiekt daty, który następnie modyfikujemy metodą `setHours()`.
