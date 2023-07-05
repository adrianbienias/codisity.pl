```js showLineNumbers
fetch("https://api.spacexdata.com/v4/404")
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    console.log(json)
  })
  .catch((error) => {
    if (error.status === 404) {
      return console.error("Page not found")
    }

    return console.error(error)
  })
```