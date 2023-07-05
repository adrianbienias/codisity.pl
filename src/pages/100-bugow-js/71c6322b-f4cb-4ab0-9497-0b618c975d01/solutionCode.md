```js showLineNumbers {8}
const numbers = [10, 20, NaN, 30, null]

console.log(numbers.includes(NaN))
console.log(numbers.includes(30))
console.log(numbers.includes(null))

console.log(numbers
  .findIndex((number) => Number.isNaN(number))
)
console.log(numbers.indexOf(30))
console.log(numbers.indexOf(null))
```