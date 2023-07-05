```js showLineNumbers
{
  foo: {
    console.log("first")
    break foo
    console.log("second")
  }

  break foo
  console.log("third")
}
```
