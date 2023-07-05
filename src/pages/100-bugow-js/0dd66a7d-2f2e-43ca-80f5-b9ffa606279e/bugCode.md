```js showLineNumbers
let a
let { a: b = "foo" } = { a }

console.log(a)
console.log(b)
```