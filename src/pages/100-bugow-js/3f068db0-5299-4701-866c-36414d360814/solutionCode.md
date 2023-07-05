```js showLineNumbers
let arr1 = Array(5)
let arr2 = [, , , , ,]
let arr3 = ["a", , "b", , "c"]

console.log(arr1.length) // 5
console.log(arr2.length) // 5
console.log(arr3.length) // 5

arr1.forEach((e, i) => console.log(i))
arr2.forEach((e, i) => console.log(i))
arr3.forEach((e, i) => console.log(i)) // 0 2 4
```