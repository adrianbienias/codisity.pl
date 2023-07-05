```js showLineNumbers
const numbers = {
  set current(number) {
    this.log.push(number)
  },
  get latest() {
    return this.log.at(-1)
  },
  log: [],
}

numbers.current = 5
numbers.current = 23

console.log(numbers.log)
console.log(numbers.latest)

const numbersCopy = Object.assign({}, numbers)

numbersCopy.current = 11

console.log(numbersCopy.log)
console.log(numbersCopy.latest)
```