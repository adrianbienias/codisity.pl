```js showLineNumbers
setTimeout(() => {
  console.log("Infinity")
}, Infinity)

setTimeout(() => {
  console.log("24.8 days")
}, 2147483648)

setTimeout(() => {
  console.log("Immediately")
}, 0)
```