```js showLineNumbers
console.log(Number("123")) // 123
console.log(parseInt("123")) // 123

console.log(Number("")) // 0
console.log(parseInt("")) // NaN

console.log(Number("  0  ")) // 0
console.log(parseInt("  0  ")) // 0

console.log(Number("  0 bar  ")) // NaN
console.log(parseInt("  0 bar  ")) // 0

console.log(Number("  foo 0 bar  ")) // NaN
console.log(parseInt("  foo 0 bar  ")) // NaN

console.log(Number(null)) // 0
console.log(parseInt(null)) // NaN

console.log(Number(undefined)) // NaN
console.log(parseInt(undefined)) // NaN

console.log(Number(true)) // 1
console.log(parseInt(true)) // NaN

console.log(Number(0b0111)) // 7
console.log(parseInt(0b0111)) // 7

console.log(Number("0b0111")) // 7
console.log(parseInt("0b0111")) // 0
```