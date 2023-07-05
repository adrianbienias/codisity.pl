```js showLineNumbers {13}
const myDog = new Dog()

function Dog() {
  this.name = "Pluto"
}

class Cat {
  constructor() {
    this.name = "Garfield"
  }
}

const myCat = new Cat()

console.log(myDog.name)
console.log(myCat.name)
```
