```js showLineNumbers
async function getData() {
  const url =
    "https://api.spacexdata.com/v4/history"
  const response = await fetch(url)
  const json = await response.json()

  return json
}

async function processData() {
  const data = getData()
  console.log(data)
}

processData()
```