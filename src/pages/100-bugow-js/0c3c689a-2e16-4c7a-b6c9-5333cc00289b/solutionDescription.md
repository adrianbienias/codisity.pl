W przykładzie z błędem, wszystkie działania oprócz `"8" + "4"` zwrócą poprawne wyniki. Jedynie `"8" + "4"` zwróci `"84"`.

Aby naprawić ten błąd musimy zapisywać liczby w formacie liczbowym, zamiast jako ciągi znaków.

Wystarczy więc pozbyć się cudzysłowu, zapisując liczby jako `8` i `4`.

W przedstawionych działaniach tylko dodawanie zwraca błędny wynik, ponieważ w odróżnieniu od pozostałych operatorów, `+` ma dwojakie działanie. Sumuje wartości liczbowe lub łączy ciągi znaków.

Jeśli któryś ze składników działania dodawania jest ciągiem znaków, JavaScript zamienia również pozostałe składniki na ciągi znaków i łączy je ze sobą.

`"text" + 1` (string + number) zwróci `"text1"` (string)

`5 + "5"` (number + string) zwróci `"55"` (string)

`5 + 5` (number + number) zwróci `10` (number)

Pozostałe operatory, przed wykonaniem działania, dokonują konwersji typów danych na typ liczbowy.

Przykładowo, `"5" - 5` (string - number) będzie skonwertowane na `5 - 5` (number - number) i zwróci `0` (number).
