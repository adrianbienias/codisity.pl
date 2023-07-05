```js showLineNumbers {1,8}
bar: {
  foo: {
    console.log("first")
    break foo
    console.log("second")
  }

  break bar
  console.log("third")
}
```
