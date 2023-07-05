```js showLineNumbers
const myObj = {
  toString: () => "orange",
  valueOf: () => "apple",
}

console.log(String(myObj))
console.log("".concat(myObj))
console.log("" + myObj)
console.log(`${myObj}`)
```