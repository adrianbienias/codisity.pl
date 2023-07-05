```js showLineNumbers
const dog = { paws: 4 }
const cat = dog

cat.meow = true

if (dog.meow) {
  console.log("That's not a dog!")
}
```