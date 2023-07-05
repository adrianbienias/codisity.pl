```js showLineNumbers
const now = new Date()
const future = new Date(
  now.setHours(now.getHours() + 6)
)

console.log({ now, future })
```