Przykład z błędem nie wykona poprawnie postawionego zadania. Powodem jest nie domknięcie cudzysłowu (bez znaczenia czy użyjemy pojedynczego czy podwójnego).

W kodzie jednak może nam się wydawać, że cudzysłów domykamy. Robimy to jednak nie w tej samej linii, w której go otworzyliśmy, a na to JavaScript już nie pozwala.

Mamy 2 możliwości naprawienia tego błędu.

Pierwszą z nich jest uniknięcie (_escape_) przejścia do nowej linii poprzez wstawienie wstecznego ukośnika (_backslash_ `\`).

_Backslash_ spowoduje, że biały znak przejścia do nowej linii zostanie "wyeskejpowany", czyli nie zostanie potraktowany jako znak kończący kod w danej linii, więc i nie wywoła błędu o niedomkniętym cudzysłowu.

`\` musimy jednak wstawić na końcu każdej linii, w której przechodzimy do nowej linii wewnątrz cudzysłowów (1, 2, 3 linia).

Znacznie wygodniejszym rozwiązaniem będzie użycie _Template literals_ (_Template strings_).

Zamiast używać cudzysłowu (`"` lub `'`) używamy grawisu (_backtick_ `` ` ``).

Możemy wtedy kompletnie pominąć `\` na końcach wierszy i swobodnie przenosić kod do nowych linii.

_Template literals_ ma jednak pewną istotną implikację. Kod HTML będzie preformatowany. Jeśli sprawdzimy źródło kodu w przeglądarce, zobaczymy, że wszystkie białe znaki będą zachowane, podobnie jakbyśmy kod zawarli w znacznikach `<pre>`.
