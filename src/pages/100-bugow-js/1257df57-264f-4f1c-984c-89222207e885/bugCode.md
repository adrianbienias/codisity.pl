```js showLineNumbers
console.log({} instanceof Object)

console.log([] instanceof Array)
console.log([] instanceof Object)

console.log((() => {}) instanceof Function)
console.log((() => {}) instanceof Object)

console.log("foo" instanceof String)
console.log(String("foo") instanceof String)
console.log(new String("foo") instanceof String)

console.log("foo" instanceof Object)
console.log(String("foo") instanceof Object)
console.log(new String("foo") instanceof Object)
```