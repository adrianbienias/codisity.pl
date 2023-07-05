```js showLineNumbers {4,6}
function getNumber() {
  try {
    // Some code that can throw an error
    //
  } catch {
    //
  } finally {
    return 3
  }
}

console.log(getNumber())
```