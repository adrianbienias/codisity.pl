W przykładzie z błędem, 7 linia wyrzuci do konsoli `SyntaxError`.

Treść błędu może się różnić w zależności od kontekstu, w którym kod zostanie wywołany.

W przypadku przekazania kodu jako argument do `console.log()`, dostaniemy informację o brakującym domknięciu nawiasu na liście argumentów.

`SyntaxError` sprowadza się jednak do niedozwolonej składni w języku JavaScript. Po prostu nie możemy użyć danej konstrukcji.

I taką niedozwoloną konstrukcją jest użycie operatora `??` na równi z operatorami `||` lub `&&`.

Po prostu nie możemy tego robić, musimy użyć nawiasów dla wyraźnego zgrupowania wyrażeń, które chcemy aby zostały wykonane w pierwszej kolejności.

Dokumentacja JavaScript od Mozilli (_MDN_), tłumaczy, że jednoczesne użycie `??` w połączeniu z `||` lub `&&` mogłoby wprowadzać w kodzie błędy wynikające z wystąpienia zwarcia (_short circuiting_).

Warto zauważyć, że tabela priorytetów wykonywania operatorów plasuje `&&` wyżej niż `||`, ale ze względu na efekt zwarcia, który jeśli wystąpi, totalnie ignoruje drugi operand, co również może prowadzić do błędów w kodzie związanych z oczekiwaniem wywołania funkcji w takim wyrażeniu.

Przykładowo, przy wyrażeniu `true || alert("bar") && false` zadziała zwarcie na wartości `true` i cały dalszy kod nie zostanie wykonany, mimo że priorytet wykonywania operatorów mógłby sugerować, że funkcja `alert("bar")` powinna zostać wykonana w celu ewaluacji wartości operatora `&&`.

W tym kontekście, wyrzucanie błędu składniowego w momencie równoległego użycia `??` z `&&` lub `||` wydaje się być naciągane.
