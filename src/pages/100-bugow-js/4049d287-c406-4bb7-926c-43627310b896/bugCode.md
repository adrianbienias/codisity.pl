```js showLineNumbers
console.log(typeof NaN)

console.log(isNaN("foo"))
console.log(Number.isNaN("foo"))

console.log(isNaN(() => {}))
console.log(Number.isNaN(() => {}))

console.log(isNaN({}))
console.log(Number.isNaN({}))

console.log(isNaN([1, 2]))
console.log(Number.isNaN([1, 2]))

console.log(isNaN(undefined))
console.log(Number.isNaN(undefined))

console.log(isNaN(NaN))
console.log(isNaN("NaN"))

console.log(isNaN(123))
console.log(isNaN("123"))
console.log(isNaN([]))
console.log(isNaN(true))
console.log(isNaN(false))
console.log(isNaN(null))
```