```js showLineNumbers {10}
const Car = {
  color: "red",
  drive() {
    console.log(this)
  },
}

Car.drive()

const driveMyCar = Car.drive.bind(Car)

driveMyCar()
```