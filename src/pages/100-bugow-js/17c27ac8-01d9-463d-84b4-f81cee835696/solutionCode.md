```js showLineNumbers {8}
function reducer(accumulator, currentValue) {
  currentValue += 1

  return accumulator + currentValue
}

const numbers = [1, 2, 3]
const sum = numbers.reduce(reducer, 0)

console.log(sum)
```
