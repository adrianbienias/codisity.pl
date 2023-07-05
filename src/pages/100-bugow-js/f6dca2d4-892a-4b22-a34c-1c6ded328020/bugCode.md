```js showLineNumbers
function addToArray(item, array) {
  const newArray = array
  newArray.push(item)

  return newArray
}

const fruits = ["apple", "orange"]
const favFruits = addToArray("banana", fruits)

console.log({ fruits, favFruits })
```