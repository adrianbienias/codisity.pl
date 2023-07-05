```js showLineNumbers {1}
function addTax(price, tax = 0.23) {
  return price + price * tax
}

const priceWithTax = addTax(100, 0)

console.log(priceWithTax)
```