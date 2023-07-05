```js showLineNumbers
const letters = ["a", "z", "b", "c", "e", "f"]

letters.splice(1, 1)
letters.splice(3, 0, "d")

letters.slice(0, 3)
letters.slice(3)

console.log(letters)
// ["a", "b", "c", "d", "e", "f"]
```