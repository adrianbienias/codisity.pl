Operator logiczny LUB `||` porównuje wartości logiczne. Gdy operandy nie są wartościami logicznymi (`true`/`false`), sprowadza je do wartości logicznej. Następnie zwraca pierwszy z nich, jeśli jest on prawdziwy, lub drugi, w każdym innym przypadku.

Konwersja do wartości logicznej odbywa się za pomocą działania algorytmu, który odpowiada za konwersję w funkcji `Boolean()` lub podczas użycia podwójnego wykrzyknika `!!`.

Jeśli pierwszy operand po konwersji do wartości logicznej, jest wartością prawdziwą (`true`), to jest on zwracany w pierwotnej postaci.

Przykładowo, `"to nie fałsz" || true` zwróci `"to nie fałsz"`

Warto pamiętać, że występuje tutaj efekt zwarcia tzn. gdy pierwszy operand jest prawdziwy, drugi operand jest już całkowicie pomijany. Gdyby zamiast `true` pojawiło się np. wywołanie funkcji, to funkcja nie zostałaby w żaden sposób wywołana.

Jeśli natomiast pierwszy operand `||` jest wartością fałszywą, to automatycznie zwracany zostaje operand drugi. Nie ma znaczenia, czy jest on prawdziwy czy fałszywy.

Można w ten sposób stworzyć np. łańcuch wielu operatorów `||`, który zwróci operand w momencie gdy napotka na taki, który jest prawdziwy, jednocześnie zatrzymując wykonywanie dalszej części kodu z łańcucha.
