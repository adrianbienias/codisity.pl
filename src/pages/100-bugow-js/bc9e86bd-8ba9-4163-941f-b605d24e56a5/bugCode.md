```js showLineNumbers
const myObject = {
  message: "Hello world!",
  showMessage() {
    setTimeout(function () {
      console.log(this.message)
    }, 500)
  },
}

myObject.showMessage()
```