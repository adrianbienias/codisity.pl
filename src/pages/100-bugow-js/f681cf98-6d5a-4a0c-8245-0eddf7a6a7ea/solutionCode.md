```js showLineNumbers {14}
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false

console.log(Number.NaN == Number.NaN) // false
console.log(Number.NaN === Number.NaN) // false

console.log(isNaN(NaN)) // true
console.log(Number.isNaN(NaN)) // true

console.log(isNaN("123")) // false
console.log(Number.isNaN("123")) // false

console.log(isNaN("abc")) // true (!)
console.log(Number.isNaN("abc")) // false

const valueIsNaN = (val) => val !== val

console.log(valueIsNaN("123")) // false
console.log(valueIsNaN("abc")) // false

console.log(valueIsNaN(NaN)) // true
console.log(valueIsNaN(Number.NaN)) // true
```