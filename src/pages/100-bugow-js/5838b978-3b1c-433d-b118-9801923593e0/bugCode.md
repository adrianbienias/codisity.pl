```js showLineNumbers
const now = new Date()

const months = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
])

const weekdays = new Map([
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
  [7, "Sunday"],
])

console.log(now.toISOString())
console.log(now.getDate())
console.log(months.get(now.getMonth()))
console.log(weekdays.get(now.getDay()))
```