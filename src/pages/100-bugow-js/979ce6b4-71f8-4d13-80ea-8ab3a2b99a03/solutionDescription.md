W przykładzie z błędem do konsoli zostanie zalogowana pusta tablica `[]`. Nasz kod nie zadziała więc zgodnie z planem.

Metoda `forEach()`, wywołuje funkcję przekazaną w argumencie jako _callback_ w sposób synchroniczny.

Działa to więc tak samo, jak gdybyśmy w zwykłej funkcji wywołali inną, zagnieżdżoną, asynchroniczną.

Kod wewnątrz takiej funkcji byłby oddelegowany do wykonania na później w pętli zdarzeń (jako _microtask_).

Nieco lepszy obraz sytuacji da nam zamiana `forEach()` na `map()` i zalogowanie do konsoli takiej mapy.

Okaże się wtedy, że nowa, zmapowana tablica będzie zawierać nierozwiązane obiekty `Promise`.

W celu rozwiązania tablicy z obietnicami, możemy użyć `Promise.all()`.

Aby wykonać to synchronicznie i nie używać `Promise.all().then()`, dodajemy `await` przed wywołaniem `Promise.all()` i czekamy, aż wszystkie obietnice z tablicy zostaną rozwiązane.

Następnie logując do konsoli `store`, mamy już dostęp do wszystkich elementów. Wszystkie obietnice zostały rozwiązane i tym samym wykonane zostały wszystkie wywołania `push()` na tablicy `store`.

Alternatywnym rozwiązaniem może być wywołanie pętli `for`, która w przeciwieństwie do `forEach()` nie przyjmuje funkcji _callback_, a tym samym użycie `await` wewnątrz iteracji pętli zostaje wykonane zgodnie z oczekiwaniami.

```
for (const num of numbers) {
  await sleep(1000)
  store.push(num)
}
```
