```js showLineNumbers
const letters = []
letters[0] = "a"
letters[1] = "b"
letters[3] = "d"
letters[-1] = "z"
letters[-2] = "y"

console.log(letters) // ["a", "b", undefined, "d"]
console.log(letters.length) // 4
console.log(letters[letters.indexOf(9)]) // "z"
```