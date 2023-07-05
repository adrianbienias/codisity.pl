```js showLineNumbers
const func1 = function (...arguments) {
  console.log(arguments)
}
const func2 = (...arguments) => {
  console.log(arguments)
}

const func3 = function (a, b) {
  console.log(arguments)
}
const func4 = (a, b) => {
  console.log(arguments)
}

func1("foo", "bar")
func2("foo", "bar")
func3("foo", "bar")
func4("foo", "bar")
```
