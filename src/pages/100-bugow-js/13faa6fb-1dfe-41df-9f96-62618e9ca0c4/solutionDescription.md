W przykładzie z błędem zostanie zalogowana tablica `1,12,26,43,5`.

Wyraźnie została ona zmieniona względem oryginału, ale sortowanie nastąpiło nie według wartości liczbowych, a alfabetycznych.

Domyślne działanie metody `sort()` polega na sprowadzeniu porównywanych wartości do ciągów znaków i posortowaniu ich według tablicy kodowania znaków _UTF-16_.

`1` występuje przed `2` tak samo jak `a` przed `b`.

Kolejność `1,12,26...` można więc porównać np. do `a,ab,bf...`.

Aby posortować wartości z tablicy pod kątem liczbowym, musimy samodzielnie napisać funkcję porównującą i przekazać ją jako argument do funkcji `sort()`.
