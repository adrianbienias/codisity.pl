```js showLineNumbers
let a, b, c
let x, y, z

a = b = 1, c = 2
x = (y = 1, z = 2)

console.log(a) // 1
console.log(x) // 2

console.log("foo", "bar") // foo bar
console.log(("foo", "bar")) // bar
```