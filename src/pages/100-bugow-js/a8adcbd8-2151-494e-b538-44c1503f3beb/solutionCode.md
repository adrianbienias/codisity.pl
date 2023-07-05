```js showLineNumbers
console.log(Object.is([1], [1])) // false
console.log([1] === [1]) // false

console.log(Object.is(NaN, NaN)) // true
console.log(NaN === NaN) // false

console.log(Object.is(NaN, 0 / 0)) // true
console.log(NaN === 0 / 0) // false

console.log(Object.is(-0, +0)) // false
console.log(-0 === +0) // true
```