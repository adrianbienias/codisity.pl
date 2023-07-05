```js showLineNumbers
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number(true)) // 1
console.log(Number({})) // NaN
console.log(Number([])) // 0

console.log(Number("a")) // NaN
console.log(Number("\f")) // 0
console.log(Number("\n")) // 0
console.log(Number("\r")) // 0
console.log(Number("\t")) // 0
console.log(Number("\v")) // 0
console.log(Number("\b")) // NaN

console.log(Number(["a"])) // NaN
console.log(Number([0])) // 0
console.log(Number(["0"])) // 0
console.log(Number([0, 0])) // NaN
console.log(Number([1])) // 1
console.log(Number(["1"])) // 1
console.log(Number([0, 1])) // NaN

console.log(Number("")) // 0
console.log(Number("  ")) // 0
console.log(Number("  \n  \t  \f  \v  ")) // 0
console.log(Number("  \n  \t  \f  \v  1  ")) // 1

console.log(Number("1e2")) // 100
console.log(Number(1e2)) // 100
console.log(Number("0x64")) // 100
console.log(Number(0x64)) // 100
console.log(Number("0b01100100")) // 100
console.log(Number(0b01100100)) // 100
console.log(Number("\u0031\u0030\u0030")) // 100
console.log(Number("\x31\x30\x30")) // 100
```