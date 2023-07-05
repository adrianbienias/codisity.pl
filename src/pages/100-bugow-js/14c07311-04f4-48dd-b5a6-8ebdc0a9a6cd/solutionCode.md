```js showLineNumbers
const promise1 = new Promise((resolve) => {
  resolve("foo")
})
const promise2 = new Promise((resolve) => {
  resolve(promise1)
})

console.log(promise1) // Promise {}
console.log(promise2) // Promise {}

promise2.then((value) => {
  console.log(value) // foo
  console.log(value === promise1) // false
})
```