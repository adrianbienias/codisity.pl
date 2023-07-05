```js showLineNumbers
const myDog = new Dog()
const myCat = new Cat()

function Dog() {
  this.name = "Pluto"
}

class Cat {
  constructor() {
    this.name = "Garfield"
  }
}

console.log(myDog.name)
console.log(myCat.name)
```