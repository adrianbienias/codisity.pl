```js showLineNumbers {2}
function addToArray(item, array) {
  const newArray = array.concat(item)

  return newArray
}

const fruits = ["apple", "orange"]
const favFruits = addToArray("banana", fruits)

console.log({ fruits, favFruits })
```