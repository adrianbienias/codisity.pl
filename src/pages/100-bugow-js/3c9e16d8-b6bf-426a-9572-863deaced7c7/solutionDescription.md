Do konsoli zostanie zalogowany wyłącznie ciąg znaków `A`.

Bug polega na założeniu, że funkcja `alert("B")` powinna zostać wykonana, jako efekt pierwszeństwa działania operatora `&&`.

Tak się jednak nie stanie. Poniżej wyjaśnienie dlaczego.

Tablica pierwszeństwa wykonywania operatorów plasuje operator logiczny _AND_ `&&` ponad operatorem _OR_ `||`.

Analogicznie, w przypadku operatorów arytmetycznych, operator mnożenia `*` plasuje się ponad operatorem dodawania `+`.

Wykonując działanie `1 + 2 * 3` otrzymamy więc `7` a nie `9`.

Najpierw zostanie **wykonane** mnożenie operandów `2` i `3`. Dopiero później dodawanie `1` z otrzymaną wartością `6` z mnożenia.

Wykonane jest tutaj bardzo istotnym słowem.

Skoro operator `&&` ma wyższy priorytet wykonywania od operatora `||`, można oczekiwać od JavaScript, że **wykona** funkcje, które są operandami `&&` aby poznać zwracane z nich wartości w celu ewaluacji operacji logicznej _AND_.

Tak się jednak nie dzieje. JavaScript nie wykonuje operacji logicznej _AND_ ze względu na efekt zwarcia operatora _OR_.

Zwarcie (_short circuiting_) polega na tym, że jeśli pierwszy z operandów użytych z operatorami `||` lub `&&` zwraca wartość, która przesądza o końcowej wartości, drugi operand nie jest już w ogóle sprawdzany (ani wykonywany).

W naszym przykładzie dla `||` drugim operandem byłby efekt działania operatora `&&` czyli `(alert("B") && alert("C"))`.

Nie ma on jednak żadnego znaczenia, ponieważ algorytm _OR_ dąży w pierwszej kolejności do zwrócenia wartości pierwszego operandu, jeśli ta wartość jest prawdziwa.

W sytuacji gdy pierwsza wartość okaże się fałszywa, wtedy, i tylko wtedy, sprawdzany (wykonywany) jest drugi operand i zwracana jest jego (niezależnie jaka) wartość.

Odwrotnie jest w przypadku algorytmu operatora _AND_, który w pierwszej kolejności dąży do zwrócenia wartości fałszywej z pierwszego operandu, a tylko wtedy, gdy ta wartość okaże się prawdziwa, zostanie sprawdzony (wykonany) drugi operand oraz zwrócona zostanie z niego (niezależnie jaka) wartość.

`"A" || alert("B") && alert("C")` mimo, że według kolejności wykonywania operatorów, powinien sprawdzić najpierw co zwrócą operandy operatora `&&`, w rzeczywistości ignoruje je, ponieważ pierwszy operand operatora `||` jest prawdziwy.

Niezależnie więc od tego co zwróciłyby funkcje `alert("B")` i `alert("C")`, końcowy wynik operacji logicznej zawsze wyniesie `A`.

Efekt zwarcia występuje w operatorach `&&`, `||`, `??`, `?.`, ale nie występuje w pozostałych.

W przypadku wspomnianych działań matematycznych, nawet jeśli wynik jest przesądzony przez pierwszy operand (np. w mnożeniu `0` lub `NaN` z innymi liczbami), to pozostałe operandy i tak zostaną wykonane.

Taka tam lekka niekonsekwencja 🤷‍♂️.
