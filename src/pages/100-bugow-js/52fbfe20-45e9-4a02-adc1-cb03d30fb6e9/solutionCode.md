```js showLineNumbers {14}
let firstName = new String("Brendan")
let lastName = String("Eich")
let user = { id: 1, admin: true }
let numbers = [1, 2, 3]
let nothing
let empty = null
let greet = function () { return "Hi!" }
let greeting = new greet()

console.log("object" === typeof firstName)
console.log("object" === typeof lastName)
console.log("object" === typeof user)
console.log("object" === typeof numbers)
console.log("object" === typeof empty)
console.log("object" === typeof nothing)
console.log("object" === typeof greet)
console.log("object" === typeof greeting)
```