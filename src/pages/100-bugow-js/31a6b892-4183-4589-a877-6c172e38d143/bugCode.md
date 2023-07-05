```js showLineNumbers
console.log(/^[A-z]+$/.test("ABCD"))
console.log(/^[A-z]+$/.test("wxyz"))
console.log(/^[A-z]+$/.test("QwEr"))
console.log(/^[A-z]+$/.test("\\[]"))
console.log(/^[A-z]+$/.test("^_``"))
console.log(/^[A-z]+$/.test("1234"))
console.log(/^[A-z]+$/.test("a1b2"))
console.log(/^[A-z]+$/.test("\nnn"))
console.log(/^[A-z]+$/.test("a b "))
```