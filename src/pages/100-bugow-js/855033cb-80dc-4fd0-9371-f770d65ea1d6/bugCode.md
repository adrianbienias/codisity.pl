```js showLineNumbers
const obj = {
  foo() {
    return "foo"
  },
  get bar() {
    return "bar"
  },
}

console.log(obj.foo())
console.log(obj.bar())
```