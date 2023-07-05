```js showLineNumbers
const person = {
  name: "John",
  height: 178,
  birthdate: new Date("1999-12-31"),
  children: [
    {
      name: "John Junior",
      height: 132,
      birthdate: new Date("2022-02-22"),
    },
  ],
}

const copy1 = JSON.parse(JSON.stringify(person))
const copy2 = { ...person }
const copy3 = structuredClone(person)

person.children[0].name = "Susan"

console.log(person.birthdate.getTime())
console.log(person.children[0])

// console.log(copy1.birthdate.getTime())
console.log(copy1.children[0])

console.log(copy2.birthdate.getTime())
console.log(copy2.children[0])

console.log(copy3.birthdate.getTime())
console.log(copy3.children[0])
```