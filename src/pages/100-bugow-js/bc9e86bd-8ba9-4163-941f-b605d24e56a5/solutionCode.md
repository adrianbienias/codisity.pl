```js showLineNumbers {6}
const myObject = {
  message: "Hello world!",
  showMessage() {
    setTimeout(function () {
      console.log(this.message)
    }.bind(myObject), 500)
  },
}

myObject.showMessage()
```