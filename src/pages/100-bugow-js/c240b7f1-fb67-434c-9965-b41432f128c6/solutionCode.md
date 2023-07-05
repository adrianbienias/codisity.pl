```js showLineNumbers
const fn = (...args) => args

console.log(
  fn("a", "b", "c")
)
console.log.call(
  null, ["a", "b", "c"]
)
console.log(
  Function.call.call(
    fn, null, "a", "b", "c"
  )
)
console.log(
  fn.call.call(
    fn, null, "a", "b", "c"
  )
)
console.log(
  setTimeout.call.call(
    fn, null, "a", "b", "c"
  )
)
```