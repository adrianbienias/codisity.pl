```js showLineNumbers
// "use strict"

const greeting = {
  message1: "hello",
  message2: "everyone",
}

const validator = {
  set(obj, prop, value) {
    if (prop === "message2") {
      return value !== "no one"
    }
    obj[prop] = value

    return true
  },
}

const proxy1 = new Proxy(greeting, {})
proxy1.message2 = "everybody"

const proxy2 = new Proxy(greeting, validator)
proxy2.message2 = "no one"

greeting.message1 = "welcome"

console.log(greeting)
console.log(proxy1)
console.log(proxy2)
```