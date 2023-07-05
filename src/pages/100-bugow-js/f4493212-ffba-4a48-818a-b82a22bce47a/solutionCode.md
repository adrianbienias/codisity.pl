```js showLineNumbers
const set1 = new Set()
set1.add(["a", "b", "c"])
set1.add(["a", "b", "c"])
set1.add(["a", "b", "c"])

const set2 = new Set()
set2.add(["a", "b", "c"].join())
set2.add(["a", "b", "c"].join())
set2.add(["a", "b", "c"].join())

const set3 = new Set("tralalala")

console.log(set1.size) // 3
console.log(set2.size) // 1
console.log(set3.size) // 4
```