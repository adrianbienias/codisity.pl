```js showLineNumbers
const url =
  "https://swapi.dev/api/films?format=json"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // do something with data
  })
  .then((data) => {
    console.log(data)
  })
```