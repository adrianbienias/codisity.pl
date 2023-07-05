```js showLineNumbers
console.log(/^[A-z]+$/.test("ABCD")) // true
console.log(/^[A-z]+$/.test("wxyz")) // true
console.log(/^[A-z]+$/.test("QwEr")) // true
console.log(/^[A-z]+$/.test("\\[]")) // true
console.log(/^[A-z]+$/.test("^_``")) // true
console.log(/^[A-z]+$/.test("1234")) // false
console.log(/^[A-z]+$/.test("a1b2")) // false
console.log(/^[A-z]+$/.test("\nnn")) // false
console.log(/^[A-z]+$/.test("a b ")) // false
```