```js showLineNumbers
function nested(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        a = 0
        return a + b + c + d
      }
      b = 0
    }
  }
}

console.log(nested(1)(2)(3)(4))
```