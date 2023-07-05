```js showLineNumbers
function js(...params) {
  return JSON.stringify(...params)
}

console.log(js(true)) // true
console.log(js(false)) // false
console.log(js(null)) // null

console.log(js(NaN)) // null
console.log(js(Infinity)) // null

console.log(js([1, 2, 3])) // [1,2,3]
console.log(js(new Set([1, 2, 3]))) // {}

console.log(js(undefined)) // undefined
console.log(js([undefined])) // [null]
console.log(js({ prop: undefined })) // {}

console.log(js(() => "foo")) // undefined
console.log(js([() => "foo"])) // [null]
console.log(js({ prop: () => "foo" })) // {}

console.log(js(Symbol("foo"))) // undefined
console.log(js([Symbol("foo")])) // [null]
console.log(js({ prop: Symbol("foo") })) // {}
```