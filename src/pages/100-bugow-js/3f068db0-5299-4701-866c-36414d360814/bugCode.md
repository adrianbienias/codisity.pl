```js showLineNumbers
let arr1 = Array(5)
let arr2 = [, , , , ,]
let arr3 = ["a", , "b", , "c"]

console.log(arr1.length)
console.log(arr2.length)
console.log(arr3.length)

arr1.forEach((e, i) => console.log(i))
arr2.forEach((e, i) => console.log(i))
arr3.forEach((e, i) => console.log(i))
```