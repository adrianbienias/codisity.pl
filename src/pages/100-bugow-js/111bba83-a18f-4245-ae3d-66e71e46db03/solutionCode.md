```js showLineNumbers {6}
function Car(color) {
  this.color = color
  this.mileage = 0
}

Car.prototype.drive = function (distance) {
  this.mileage += distance
}

const myCar = new Car("red")
myCar.drive(1000)

console.log(myCar)
```
