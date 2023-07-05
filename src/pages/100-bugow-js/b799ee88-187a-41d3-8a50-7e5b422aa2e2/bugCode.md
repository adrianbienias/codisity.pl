```js showLineNumbers
// 1
if ([]) {
  console.log("[]")
}
if (["0"]) {
  console.log('["0"]')
}

// 2
if ([] == false) {
  console.log("[] == false")
}
if (["0"] == false) {
  console.log('["0"] == false')
}

// 3
if ([] === false) {
  console.log("[] === false")
}
if (["0"] === false) {
  console.log('["0"] === false')
}
```