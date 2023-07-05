```js showLineNumbers
console.log({} instanceof Object) // true

console.log([] instanceof Array) // true
console.log([] instanceof Object) // true

console.log((() => {}) instanceof Function) // true
console.log((() => {}) instanceof Object) // true

console.log("foo" instanceof String) // false
console.log(String("foo") instanceof String) // false
console.log(new String("foo") instanceof String) // true

console.log("foo" instanceof Object) // false
console.log(String("foo") instanceof Object) // false
console.log(new String("foo") instanceof Object) // true
```