```js showLineNumbers
function getNumber() {
  try {
    // Some code that can throw an error
    return 1
  } catch {
    return 2
  } finally {
    return 3
  }
}

console.log(getNumber())
```