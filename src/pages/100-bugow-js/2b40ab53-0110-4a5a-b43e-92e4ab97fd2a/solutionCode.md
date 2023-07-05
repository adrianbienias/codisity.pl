```js showLineNumbers {10,11,12,13}
function* iterate(array) {
  let i = 0
  while (array.length) {
    yield array[i++]
  }
}

const array = [1, 2, 3]

const numbersIterator = iterate(array)
console.log(numbersIterator.next().value)
console.log(numbersIterator.next().value)
console.log(numbersIterator.next().value)
```
