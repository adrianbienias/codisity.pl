```js showLineNumbers
console.log(Number("123"))
console.log(parseInt("123"))

console.log(Number(""))
console.log(parseInt(""))

console.log(Number("  0  "))
console.log(parseInt("  0  "))

console.log(Number("  0 bar  "))
console.log(parseInt("  0 bar  "))

console.log(Number("  foo 0 bar  "))
console.log(parseInt("  foo 0 bar  "))

console.log(Number(null))
console.log(parseInt(null))

console.log(Number(undefined))
console.log(parseInt(undefined))

console.log(Number(true))
console.log(parseInt(true))

console.log(Number(0b0111))
console.log(parseInt(0b0111))

console.log(Number("0b0111"))
console.log(parseInt("0b0111"))
```