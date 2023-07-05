```js showLineNumbers
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function main() {
  const numbers = [1, 2, 3]
  const store = []

  numbers.forEach(async (num) => {
    await sleep(1000)
    store.push(num)
  })

  console.log(store)
}
main()
```