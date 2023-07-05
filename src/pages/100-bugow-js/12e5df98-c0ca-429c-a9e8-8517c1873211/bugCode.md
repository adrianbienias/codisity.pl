```js showLineNumbers
const date_1999 = new Date("1999-01-01")
const date_1999_ = new Date("1999-01-01")
const date_2000 = new Date("2000-01-01")
const date_2001 = new Date("2001-01-01")

console.log(date_1999 < date_2000)
console.log(date_1999_ < date_2001)
console.log(date_1999 < date_1999)
console.log(date_1999 < date_1999_)
console.log(date_1999 == date_1999)
console.log(date_1999 == date_1999_)
console.log(date_1999 <= date_1999_)
```