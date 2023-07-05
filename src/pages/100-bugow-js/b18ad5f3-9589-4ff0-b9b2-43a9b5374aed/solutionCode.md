```js showLineNumbers
console.log([] + []) // ""
console.log([] + {}) // "[object Object]"
console.log({} + []) // "[object Object]"
console.log({} + {}) // "[object Object][object Object]"

console.log([] + + []) // 0
console.log([] + + {}) // NaN
console.log({} + + []) // "[object Object]0"
console.log({} + + {}) // "[object Object]NaN"
```