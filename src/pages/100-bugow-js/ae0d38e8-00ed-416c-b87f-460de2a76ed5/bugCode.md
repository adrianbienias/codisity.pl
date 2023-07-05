```js showLineNumbers
function addTax(price, tax) {
  tax = tax || 0.23

  return price + price * tax
}

const priceWithTax = addTax(100, 0)

console.log(priceWithTax)
```