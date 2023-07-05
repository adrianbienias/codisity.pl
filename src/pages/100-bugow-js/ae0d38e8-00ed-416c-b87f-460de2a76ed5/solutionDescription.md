W przykładzie z błędem, do konsoli zostania zalogowana cena `123`.

Mimo, że wywołując `addTax()` wyraźnie podajemy w drugim argumencie `0` jako wartość podatku, to używając wewnątrz funkcji logicznego operatora _OR_ (`||`), wartość `0` traktowana jest jako wartość fałszywa (_falsy_). W procesie porównywania jest więc odrzucana na rzecz wartości prawdziwej (_truthy_) i finalnie do zmiennej tax przypisana zostaje wartość `0.23`.

Aby naprawić ten błąd możemy np. bezpośrednio podać wartość domyślną dla parametru tax podczas deklarowania funkcji.

Unikniemy dzięki temu wykonywania operacji porównania i wewnątrz funkcji używana będzie dokładnie taka wartość, jaką przekażemy w argumencie wywołując funkcję. W przypadku braku przekazania argumentu `tax`, użyta zostanie wartość domyślna `0.23`.
