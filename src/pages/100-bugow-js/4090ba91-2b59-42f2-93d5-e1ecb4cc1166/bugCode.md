```js showLineNumbers
const numbers = [11, 2, 27, 1]
const sorted = numbers.sort((a, b) => a - b)
sorted[0] = 100

console.log(sorted)
console.log(numbers)
```