```js showLineNumbers
const sym1 = Symbol()
const sym2 = Symbol()

const obj1 = {}
const obj2 = {}

console.log(sym1 === sym2) // false
console.log(sym1 === sym1) // true

console.log(obj1 === obj2) // false
console.log(obj1 === obj1) // true

const test = {}

test[sym1] = "Foo"
test[sym2] = "Bar"

test[obj1] = "Baz"
test[obj2] = "Qux"

console.log(test[sym1]) // "Foo"
console.log(test[sym2]) // "Bar"

console.log(test[obj1]) // "Qux"
console.log(test[obj2]) // "Qux"

console.log(test) // {[object Object]: "Qux"}
```