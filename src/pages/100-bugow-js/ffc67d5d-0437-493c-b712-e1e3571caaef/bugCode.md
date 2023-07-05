```js showLineNumbers
const func1 = (args) => console.log(args)
const func2 = (...args) => console.log(args)

// 1:
func1`first ${"val"}, second ${["a", "b"]}`

// 2:
func1(`first ${"val"}, second ${["a", "b"]}`)

// 3:
func2`first ${"val"}, second ${["a", "b"]}`

// 4:
func2(`first ${"val"}, second ${["a", "b"]}`)
```