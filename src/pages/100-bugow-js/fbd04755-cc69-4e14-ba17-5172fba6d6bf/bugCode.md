```js showLineNumbers
console.log(false || true)
console.log(true || false)
console.log("false" || "true")

console.log(undefined || null)
console.log(null || undefined)

console.log(NaN || undefined)
console.log(undefined || NaN)

console.log("" || "not empty")
console.log(" " || "not empty")

console.log(0 || "not zero")
console.log("0" || "not zero")

console.log([] || "not empty array")

console.log(false || " " || alert("!"))
```