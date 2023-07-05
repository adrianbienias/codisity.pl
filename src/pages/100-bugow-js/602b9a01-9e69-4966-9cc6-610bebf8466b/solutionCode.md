```js showLineNumbers {3,4,5,6,7,15}
fetch("https://api.spacexdata.com/v4/404")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response not ok", {
        cause: response,
      })
    }

    return response.json()
  })
  .then((json) => {
    console.log(json)
  })
  .catch((error) => {
    if (error.cause.status === 404) {
      return console.error("Page not found")
    }

    console.error(error)
  })
```