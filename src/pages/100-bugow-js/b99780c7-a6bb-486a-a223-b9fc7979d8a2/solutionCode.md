```js showLineNumbers
setTimeout(() => {
  console.log("setTimeout") // 4
})

new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise setTimeout")
  })
}).then((response) => {
  console.log(response) // 5
})

new Promise((resolve) => {
  resolve("Promise")
}).then((response) => {
  console.log(response) // 2
})

queueMicrotask(() => {
  console.log("Microtask") // 3
})

console.log("Global context") // 1
```