```js showLineNumbers
if (false) {
  console.log("First")
}

if (Boolean(false)) {
  console.log("Second")
}

if (new Boolean(false)) {
  console.log("Third")
}

if (!!false) {
  console.log("Fourth")
}
```