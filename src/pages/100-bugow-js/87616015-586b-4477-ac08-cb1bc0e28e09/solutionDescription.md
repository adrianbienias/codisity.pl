Konsola wyświetli `baNaNa`.

W JavaScript operator `+` ma kilka zastosowań.

Może działać jako operator matematycznego dodawania.

Może działać jako łącznik ciągów znaków.

Może przekształcać ciągi znaków na typ liczbowy, jeśli występuje z pojedynczym argumentem (wartością).

Przeanalizujmy krok po kroku, co dzieje się przy wywołaniu `"b" + "a" + + "a" + "a"`.

Tak samo jak w matematyce, tak samo w JavaScript, operatory mają hierarchię pierwszeństwa wykonywania (_precedence_).

I tak jednoargumentowy (_unary_) operator `+` wykonywany jest przed operatorem dodawania `+`.

Jednoargumentowy operator działa wtedy, gdy po jego lewej stronie nie występuje żadna wartość.

Wystąpienie dwóch plusów `+ +` oznacza, że drugi z nich zachowa się jako jednoargumentowy operator, ponieważ po jego lewej stronie nie ma wartości, jest tylko inny operator.

Sprawdzamy więc co znajduje się po prawej stronie jednoargumentowego operatora i jest to `+ + "a"`.

JavaScript poprzez `+` próbuje wykonać konwersji typu danych po prawej stronie tego operatora na typ liczbowy.

Wartość `"a"` nie jest jednak liczbą zapisaną jedynie jako ciąg znaków.

Operacja konwersji typu danych się nie udaje i zwrócona zostaje wartość `NaN` (_Not a Number_).

Tym samym otrzymujemy `"b" + "a" + NaN + "a"`.

Znak dodawania pomiędzy `"b" + "a"` daje nam `"ba"` ponieważ `+` działa tu jako łącznik ciągów znaków.

Gdy operator `+` musi wybrać, czy wykonać działanie dodawania, czy łączenia ciągów znaków, wybiera to drugie jeśli którykolwiek z argumentów jest typem ciągu znaków (_string_).

Wartość `NaN` zostaje więc skonwertowana do ciągu znaków `"NaN"`.

Finalnie daje nam to konstrukcję `"ba" + "NaN" + "a"`, która złączona daje nam `"baNaNa"`.
