```js showLineNumbers
const myObj = {
  toString: () => "orange",
  valueOf: () => "apple",
}

console.log(String(myObj)) // orange
console.log("".concat(myObj)) // orange
console.log("" + myObj) // apple
console.log(`${myObj}`) // orange
```