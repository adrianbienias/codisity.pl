W przykładzie z błędem, w 7 lini zostanie zalogowana wartość `false`.

Pozostałe wywołania zalogują wartość `true`.

Metoda `hasOwnProperty()` sprawdza czy obiekt zawiera własną własność o podanej nazwie. Własną, czyli nie odziedziczoną.

Tablice (_Array_) są obiektami, ale ich własności to indeksy elementów tablicy. Inne własności/metody są dziedziczone.

`myArray.hasOwnProperty(0)` zwróci `true`, ponieważ `0` jest istniejącą własnością obiektu tablicy (indeksem), pod którą przechowywana jest wartość `1`.

W przypadku tablicy, byłby to ekwiwalent wywołania\
`myArray[0] !== undefined`.

Mimo, że tablica jako obiekt ma dostęp do metody `push()` to jednak nie jest to jej własna własność.

Metoda `push()` jest własnością prototypu obiektu tablicy.

Jej faktyczna deklaracja znajduje się w obiekcie prototypu `myArray.__proto__.push`.

Wywołując `myArray.push()` korzystamy z własności języka JavaScript jakim jest łańcuch prototypów.

JavaScript w celu wykonania danej metody, sprawdza najpierw metody zdefiniowane bezpośrednio w obiekcie, następnie metody prototypów oraz metody prototypów ich prototypów (łańcuch dziedziczenia), aż do momentu gdy znajdzie szukaną metodę lub skończy się łańcuch dziedziczonych prototypów.

`hasOwnProperty()` przydaje się gdy chcemy sprawdzić, czy dany obiekt ma konkretną własność zdefiniowaną jako swoją.

Gdy zależy nam na sprawdzeniu czy własność jest dostępna dla danego obiektu, uwzględniając dziedziczenie, wtedy lepiej użyć operatora `in`.
