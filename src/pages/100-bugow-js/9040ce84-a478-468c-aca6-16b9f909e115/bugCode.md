```js showLineNumbers
const objSealed = { value: 11 }
const objFreezed = { value: 11 }

Object.seal(objSealed)
Object.freeze(objFreezed)

objSealed.value = 22
objFreezed.value = 22

objSealed.foo = "bar"
objFreezed.foo = "bar"

delete objSealed.value
delete objFreezed.value

console.log(objSealed)
console.log(objFreezed)
```