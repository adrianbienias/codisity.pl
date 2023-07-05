```js showLineNumbers
const Car = {
  color: "red",
  drive() {
    console.log(this)
  },
}

Car.drive()

const driveMyCar = Car.drive

driveMyCar()
```