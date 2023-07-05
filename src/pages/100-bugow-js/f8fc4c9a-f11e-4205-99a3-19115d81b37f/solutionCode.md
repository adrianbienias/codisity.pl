```js showLineNumbers {2,4}
const now = new Date()
const future = new Date()

future.setHours(now.getHours() + 6)

console.log({ now, future })
```