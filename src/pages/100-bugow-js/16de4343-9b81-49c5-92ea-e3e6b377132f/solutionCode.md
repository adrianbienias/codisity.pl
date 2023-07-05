```js showLineNumbers {9}
const str1 = "Hello World"
const str2 = `${"Hello World"}`
const str3 = String("Hello World")
const str4 = new String("Hello World")

console.log(str1 === "Hello World")
console.log(str2 === "Hello World")
console.log(str3 === "Hello World")
console.log(str4.toString() === "Hello World")
```
