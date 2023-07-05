```js showLineNumbers {6}
let twister = `
Król Karol
kupił królowej Karolinie
korale koloru koralowego
`
twister = twister.replace(/karol/gi, "Jan")

console.log(twister)
```