Próba konwersji `undefined` za pomocą funkcji `Number` zwróci `NaN`.

Dla wartości `null` zostanie jednak zwrócona już wartość liczbowa `0`.

Jest to dość powszechnie niespójne zachowanie JavaScriptu, który w różnych sytuacjach różnie konwertuje wartości `null` i `undefined`.

Wartości logiczne `false`/`true` są konwertowane do liczbowych odpowiedników tj. `0`/`1`.

Mimo, że tablice są również obiektami w języku JavaScript, pusty obiekt zostanie skonwertowany do wartości `NaN`, a pusta tablica do wartości liczbowej `0`.

Ciągi znaków nie zawierających liczb, są konwertowane do wartości `NaN`.

Poprzedzenie litery znakiem wstecznego ukośnika powoduje tzw. ucieczkę (_escape_) danego znaku.

Znaki `f`, `n`, `r`, `t`, `v`, `b` poprzedzone `\` generują białe znaki (podobnie jak np. spacja).

W zależności od znaku może to być np. wstawienie tabulatora, przejście do nowej linii, itp..

Funkcja `Number` konwertuje białe znaki (w tym standardowe spacje), do wartości liczbowej `0`.

Wyjątkiem jest `\b`, który oznacza wstawienie wstecznej spacji (_backspace_) i jest konwertowane do wartości `NaN`.

W przypadku tablic, jeśli składają się tylko z jednego elementu, `Number` konwertuje je tak samo, jak gdyby wartości nie były elementem tablicy.

Gdy jednak tablica zawiera więcej niż jeden element, w efekcie konwersji zwracana jest wartość `NaN`.

Białe znaki łączone w ciąg białych znaków zachowują się tak samo jak pojedyncze, tj. są w całości konwertowane do wartości `0`.

Jeśli jednak wśród białych znaków wystąpi wartość liczbowa, jest ona konwertowana do wartości liczbowej, ignorując wszystkie występujące sąsiadujące białe znaki.

Ostatnią grupą są wartości liczbowe zapisywane w innych notacjach lub systemach liczbowych.

`1e2` to zapis liczby w notacji naukowej. Litera `e` jest skrótem od _exponential_ czyli notacji wykładniczej, czyli potęgowania liczby `10`. Wartość po literze `e` to wielkość wykładnika potęgi.

`1e2` to więc to samo co `1 * 10 ** 2` (gdzie `**` to w JavaScript operator potęgowania).

Upraszczając do zapisu tekstowego, `1` razy `10` do potęgi `2`.

Liczba występująca po `e` oznacza więc ilość zer, które należałoby zapisać stosując standardowy zapis liczby dziesiętnej.

`1e2` daje nam więc w standardowym zapisie liczbę dziesiętną `100`.

W przypadku konwersji poprzez `Number()` nie ma znaczenia czy przekażemy taką notację jako ciąg znaków, czyli z użyciem cudzysłowu, czy bez, jako wartość liczbową.

Podobnie sytuacja wygląda w przypadku innych typów oraz systemów zapisu liczb.

`0x64` to zapis w systemie szesnastkowym (heksadecymalny) oznaczający liczbę dziesiętną `100`.

`0x` to prefix mówiący o typie notacji, a `64` to faktyczna liczba w systemie szesnastkowym.

`0b01100100` to podobna sytuacja. `0b` to prefix dla zapisu liczby w systemie binarnym (dwójkowym).

`01100100` to faktyczna liczba w systemie dwójkowym, odpowiadająca liczbie `100` w systemie dziesiętnym.

`\u0031\u0030\u0030` to ciąg znaków w standardzie kodowania _unicode_ w zapisie szesnastkowym. Każda z liczb odpowiada znakowi z tablicy znaków.

`0031` to liczba szesnastkowa, odpowiadająca liczbie dziesiętnej `49`, która z kolei jest przypisana do znaku liczby `1` z tablicy znaków.

`0030` w zapisie szesnastkowym to `48` w zapisie dziesiętnym i odpowiada mu z tablicy znaków liczba `0`.

`\u0031\u0030\u0030` to więc finalnie to samo co zapis liczby `100`.

Analogicznie wygląda sytuacja z zapisem liczb z prefiksem `\x`.

Oznacza on również zapis szesnastkowy, jednak w skróconej dwu-znakowej wersji.

Zapis ten daje tym samym do dyspozycji mniejszy zakres z tablicy znaków (bazowe kodowanie, bez rozszerzonych znaków, jak chociażby polskie znaki alfabetu typu _ą_, _ę_, itp.).
