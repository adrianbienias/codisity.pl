```js showLineNumbers
console.log(false ? true : false)
console.log(null ? true : false)
console.log(undefined ? true : false)
console.log(0 ? true : false)
console.log("" ? true : false)
console.log([] ? true : false)
console.log("0" ? true : false)
console.log(" \n " ? true : false)

console.log(null == undefined)
console.log(undefined == false)
console.log(null == false)

console.log("" == false)
console.log("" == 0)
console.log("" == [])
console.log([] == false)
console.log("0" == 0)
console.log(" \n " == 0)
```