W przykładzie z błędem zostanie zalogowana wartość `false`.

`JSON.stringify()` zwraca ciąg znaków w formacie JSON (skrót od _JavaScript Object Notation_).

Możliwość odwrócenia tego procesu zapewnia `JSON.parse()`.

Format JSON jest ciągiem znaków, więc wszelkie wartości z JavaScript muszą być zaprezentowane jako ciąg znaków.

Jak więc w JSON odróżnić np. ciąg znaków od wartości liczbowej, albo logicznej?

Ciąg znaków prezentowany jest w podwójnym cudzysłowie, podczas gdy inne wartości prymitywne, bez.

Do stałej `stringified` przypisany zostaje więc ciąg znaków `"code"`.

Chcą przypisać taką wartość ręcznie, musielibyśmy użyć `\` dla uniknięcia wewnętrznych cudzysłowów, definiując to jako `"\"code\""`, lub nieco prościej, używając pojedynczego cudzysłowu `'"code"'`.
