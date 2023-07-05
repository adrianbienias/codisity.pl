```js showLineNumbers
let foo = { val: 1 }
let bar = foo
foo.prop = foo = { val: 2 }

console.log(foo)
console.log(bar)
console.log(foo.prop)
```