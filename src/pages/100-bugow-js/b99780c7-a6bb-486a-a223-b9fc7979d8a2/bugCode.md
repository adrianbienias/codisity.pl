```js showLineNumbers
setTimeout(() => {
  console.log("setTimeout")
})

new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise setTimeout")
  })
}).then((response) => {
  console.log(response)
})

new Promise((resolve) => {
  resolve("Promise")
}).then((response) => {
  console.log(response)
})

queueMicrotask(() => {
  console.log("Microtask")
})

console.log("Global context")
```