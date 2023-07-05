Operator negacji (logiczne NIE `!`), odwraca prawdziwość/fałszywość i konwertuje ją do wartości logicznej.

Dl wartości `!true` zostanie zwrócona więc odwrotność, czyli `false`, a dla `!false`, `true`.

W przypadku gdy operator `!` zostaje użyty z wartością inną niż logiczna (_boolean_), wtedy pod uwagę brana jest prawdziwość (_truthy_) lub fałszywość (_falsy_) operandu i zwracana jest jego odwrotność w postaci logicznej (`false` lub `true`).

Pusty ciąg znaków `""` w JavaScript jest wartością fałszywą, więc jej zanegowanie da nam wartość logiczną `true`, a podwójne zanegowanie wartość `false`.

Użycie podwójnego operatora negacji (`!!`) jest równoznaczne z użyciem konstruktora (`Boolean`), czyli konwersją wartości prawdziwych/fałszywych na logiczne `true/false`.

Gdy jednak ciąg znaków nie jest pusty i zawiera choćby biały znak `" "` jest już wtedy interpretowany jako wartość prawdziwa, więc negacja takiej wartości da nam `false`.

Sytuacja z pustym ciągiem znaków i ciągiem znaków składającym się z białych znaków może być myląca, szczególnie gdy porównamy to z działaniem konstruktora `Number`, ale to już jest temat na innego buga...

Rozwiązaniem problematyczności tych zjawisk jest tylko i wyłącznie zapamiętanie w jaki sposób JavaScript interpretuje kod.

Mocno wskazane jest też testowanie kodu przed wdrożeniem go na produkcję.
