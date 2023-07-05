```js showLineNumbers
function js(...params) {
  return JSON.stringify(...params)
}

console.log(js(true))
console.log(js(false))
console.log(js(null))

console.log(js(NaN))
console.log(js(Infinity))

console.log(js([1, 2, 3]))
console.log(js(new Set([1, 2, 3])))

console.log(js(undefined))
console.log(js([undefined]))
console.log(js({ prop: undefined }))

console.log(js(() => "foo"))
console.log(js([() => "foo"]))
console.log(js({ prop: () => "foo" }))

console.log(js(Symbol("foo")))
console.log(js([Symbol("foo")]))
console.log(js({ prop: Symbol("foo") }))
```