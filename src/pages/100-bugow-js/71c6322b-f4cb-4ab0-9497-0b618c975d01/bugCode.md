```js showLineNumbers
const numbers = [10, 20, NaN, 30, null]

console.log(numbers.includes(NaN))
console.log(numbers.includes(30))
console.log(numbers.includes(null))

console.log(numbers.indexOf(NaN))
console.log(numbers.indexOf(30))
console.log(numbers.indexOf(null))
```