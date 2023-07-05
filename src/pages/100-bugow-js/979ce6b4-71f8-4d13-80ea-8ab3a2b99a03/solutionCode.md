```js showLineNumbers {11,15}
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function main() {
  const numbers = [1, 2, 3]
  const store = []

  const promises = numbers.map(async (num) => {
    await sleep(1000)
    store.push(num)
  })
  await Promise.all(promises)

  console.log(store)
}
main()
```