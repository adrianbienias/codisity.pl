```js showLineNumbers
function reducer(accumulator, currentValue) {
  currentValue += 1

  return accumulator + currentValue
}

const numbers = [1, 2, 3]
const sum = numbers.reduce(reducer)

console.log(sum)
```