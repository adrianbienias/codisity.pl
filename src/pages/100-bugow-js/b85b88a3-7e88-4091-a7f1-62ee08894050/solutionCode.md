```js showLineNumbers
let foo = { val: 1 }
let bar = foo
foo.prop = foo = { val: 2 }

console.log(foo) // { val: 2 }
console.log(bar) // { val: 1, prop: { val: 2 } }
console.log(foo.prop) // undefined
```