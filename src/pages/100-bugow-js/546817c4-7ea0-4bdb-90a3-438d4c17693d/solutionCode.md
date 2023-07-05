```js showLineNumbers
console.log(false ? true : false) // false
console.log(null ? true : false) // false
console.log(undefined ? true : false) // false
console.log(0 ? true : false) // false
console.log("" ? true : false) // false
console.log([] ? true : false) // true
console.log("0" ? true : false) // true
console.log(" \n " ? true : false) // true

console.log(null == undefined) // true
console.log(undefined == false) // false (!)
console.log(null == false) // false (!)

console.log("" == false) // true
console.log("" == 0) // true
console.log("" == []) // true (!)
console.log([] == false) // true (!)
console.log("0" == 0) // true (!)
console.log(" \n " == 0) // true (!)
```