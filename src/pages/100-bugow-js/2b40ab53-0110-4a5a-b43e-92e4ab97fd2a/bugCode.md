```js showLineNumbers
function* iterate(array) {
  let i = 0
  while (array.length) {
    yield array[i++]
  }
}

const array = [1, 2, 3]

console.log(iterate(array).next().value)
console.log(iterate(array).next().value)
console.log(iterate(array).next().value)
```