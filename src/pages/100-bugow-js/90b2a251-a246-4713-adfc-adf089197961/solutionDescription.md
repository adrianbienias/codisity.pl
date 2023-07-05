W przykładzie z błędem, do konsoli zostanie zalogowane `can everything`. Mimo, że zalogowany użytkownik ma ustawioną rolę na `reader`, instrukcja `switch` nie zatrzyma swojego działania na tym przypadku i finalnie użytkownik uzyska prawa admina.

Dzieje się tak, ponieważ domyślnie `switch` zaczynając od przypadku w którym nastąpi dopasowanie, wykonuje kod aż do pojawienia się deklaracji `break`.

W naszym błędnym przykładzie nie dodaliśmy `break` w żadnym z przypadków (`case`), więc kod wykonywał się po kolei, kończąc na przypisaniu do zmiennej `permission` wartości z ostatniego przypadku w `switch`.

Innym rozwiązaniem, unikającym wystąpienia błędu, mogłoby być pominięcie zmiennej `permission` i bezpośrednie zwracanie pożądanych wartości w każdy z przypadków (`return "can ..."`).

Nie musielibyśmy wtedy używać wyrażeń `break`, ponieważ po wywołaniu `return`, dalszy kod w funkcji nie byłby wykonywany.
