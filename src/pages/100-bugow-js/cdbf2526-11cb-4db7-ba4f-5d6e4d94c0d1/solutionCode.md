```js showLineNumbers {2}
function capitalize(str) {
  str = str[0].toUpperCase() + str.slice(1)

  return str
}

const sentence = "the quick brown fox"

console.log(capitalize(sentence))
```