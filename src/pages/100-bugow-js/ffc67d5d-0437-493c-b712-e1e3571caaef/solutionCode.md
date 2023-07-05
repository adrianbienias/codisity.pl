```js showLineNumbers {8}
const func1 = (args) => console.log(args)
const func2 = (...args) => console.log(args)

// 1: ["first ", ", second ", ""]
func1`first ${"val"}, second ${["a", "b"]}`

// 2: first val, second a,b
func1(`first ${"val"}, second ${["a", "b"]}`)

// 3: [Array[3], "val", Array[2]]
func2`first ${"val"}, second ${["a", "b"]}`

// 4: ["first val, second a,b"]
func2(`first ${"val"}, second ${["a", "b"]}`)
```