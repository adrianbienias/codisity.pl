```js showLineNumbers
let a
let { a: b = "foo" } = { a }

console.log(a) // undefined
console.log(b) // "foo"
```