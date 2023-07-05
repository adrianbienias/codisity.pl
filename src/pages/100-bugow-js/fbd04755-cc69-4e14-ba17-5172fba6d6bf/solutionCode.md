```js showLineNumbers
console.log(false || true) // true
console.log(true || false) // true
console.log("false" || "true") // "false"

console.log(undefined || null) // null
console.log(null || undefined) // undefined

console.log(NaN || undefined) // undefined
console.log(undefined || NaN) // NaN

console.log("" || "not empty") // "not empty"
console.log(" " || "not empty") // " "

console.log(0 || "not zero") // "not zero"
console.log("0" || "not zero") // "0"

console.log([] || "not empty array") // "[]"

console.log(false || " " || alert("!")) // " "
```