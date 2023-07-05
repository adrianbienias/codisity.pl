```js showLineNumbers {8}
const user1 = {
  name: "John",
}
const user2 = {
  name: "John",
}

console.log(JSON.stringify(user1) === JSON.stringify(user2))
```