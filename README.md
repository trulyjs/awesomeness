# truly.js/awesomeness

Helpers for constructing chainable expressions.

## Example Usage
```js
import truly from "@truly.js/awesomeness"

let usesJavaScript = true,
    isAwesome = true,
    print = (x) => console.log(x)

if (truly(usesJavaScript).and(isAwesome).then()){
  print('Sweet!')
}

let isSmallestEvenNumber = true
const number = truly(isSmallestEvenNumber).then(2)
```
