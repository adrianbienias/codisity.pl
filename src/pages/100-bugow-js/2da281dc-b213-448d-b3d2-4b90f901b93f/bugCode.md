```js showLineNumbers
document.body.innerHTML = `
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
`

const lis = document.querySelectorAll("li")

lis.map((li) => {
  const updatedText =
    li
    .innerText
    .replace("Item", "Element")

  li.innerText = updatedText
})
```