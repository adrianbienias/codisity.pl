Niestety tak. W przykładzie z błędem, obiekt `dog` i `cat` to ten sam obiekt, `dog` ma więc własność `meow`.

Dzieje się tak, ponieważ JavaScript wywołuje referencje obiektów (czyli ich adresy z tzw. sterty, przechowywanej w pamięci RAM, z ang. _heap_).

`const cat = dog`

Tworząc nową stałą `cat` wskazujemy nią na istniejący obiekt `dog`.

Finalnie tworzymy więc jedynie alias tego samego obiektu, który dostępny jest od teraz pod dwiema nazwami `cat` i `dog`.

Aby uniknąć sytuacji przypisania tego samego obiektu do stałej/zmiennej, musimy wyraźnie stworzyć kopię obiektu.

Możemy to zrobić np. przez destrukturyzację obiektu i przypisanie zdestrukturyzowanych elementów do nowego obiektu

`const cat = { ...dog }`

Lub przez przepisanie własności obiektu `dog` do nowego pustego obiektu `{}` używając `Object.assign()`.

`const cat = Object.assign({}, dog)`

**Uwaga!** Powyższe metody tworzą jedynie "płytką" kopię. Kopiowany jest tylko pierwszy poziom własności. Zagnieżdżone obiekty (obiekt w obiekcie) są wciąż przekazywane w postaci referencji, a nie kopi.

`const deepObject = { level: 1, nested: { level: 2 } }`

Przy skopiowaniu powyższego obiektu za pomocą `{ ...deepObject }` lub `Object.assign({}, deepObject)`, obiekt `nested` wciąż będzie przekazany jako referencja.

Rozwiązaniem tego problemu jest użycie funkcji `structuredClone()` lub metody `_.cloneDeep()` z biblioteki _Lodash_.
