```js showLineNumbers
let a, b, c
let x, y, z

a = b = 1, c = 2
x = (y = 1, z = 2)

console.log(a)
console.log(x)

console.log("foo", "bar")
console.log(("foo", "bar"))
```