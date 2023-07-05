```js showLineNumbers
const myObject = { push: function () {} }
const myArray = [1, 2, 3]

console.log(myObject.hasOwnProperty("push"))
console.log("push" in myObject)

console.log(myArray.hasOwnProperty("push"))
console.log("push" in myArray)
```