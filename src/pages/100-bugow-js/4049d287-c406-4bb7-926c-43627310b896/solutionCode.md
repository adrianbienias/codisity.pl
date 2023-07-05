```js showLineNumbers
console.log(typeof NaN) // number

console.log(isNaN("foo")) // true
console.log(Number.isNaN("foo")) // false

console.log(isNaN(() => {})) // true
console.log(Number.isNaN(() => {})) // false

console.log(isNaN({})) // true
console.log(Number.isNaN({})) // false

console.log(isNaN([1, 2])) // true
console.log(Number.isNaN([1, 2])) // false

console.log(isNaN(undefined)) // true
console.log(Number.isNaN(undefined)) // false

console.log(isNaN(NaN)) // true
console.log(isNaN("NaN")) // true

console.log(isNaN(123)) // false
console.log(isNaN("123")) // false (?)
console.log(isNaN([])) // false (?!)
console.log(isNaN(true)) // false (?!)
console.log(isNaN(false)) // false (?!)
console.log(isNaN(null)) // false (?!)
```