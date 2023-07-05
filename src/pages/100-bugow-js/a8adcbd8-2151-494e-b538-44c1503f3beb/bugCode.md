```js showLineNumbers
console.log(Object.is([1], [1]))
console.log([1] === [1])

console.log(Object.is(NaN, NaN))
console.log(NaN === NaN)

console.log(Object.is(NaN, 0 / 0))
console.log(NaN === 0 / 0)

console.log(Object.is(-0, +0))
console.log(-0 === +0)
```