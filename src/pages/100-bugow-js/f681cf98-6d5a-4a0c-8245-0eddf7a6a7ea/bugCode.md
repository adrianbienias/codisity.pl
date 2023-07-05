```js showLineNumbers
console.log(NaN == NaN)
console.log(NaN === NaN)

console.log(Number.NaN == Number.NaN)
console.log(Number.NaN === Number.NaN)

console.log(isNaN(NaN))
console.log(Number.isNaN(NaN))

console.log(isNaN("123"))
console.log(Number.isNaN("123"))

console.log(isNaN("abc"))
console.log(Number.isNaN("abc"))

const valueIsNaN = (val) => val !== val

console.log(valueIsNaN("123"))
console.log(valueIsNaN("abc"))

console.log(valueIsNaN(NaN))
console.log(valueIsNaN(Number.NaN))
```