# truly.js/awesomeness

Helpers for constructing chainable expressions.

## Example Usage
```js
import truly from "@truly.js/awesomeness"

let usingJavaScript = true,
    itFeelsAwesome = true,
    say = (x) => console.log(x)

if (truly(usingJavaScript).and(itFeelsAwesome).then()){
  say("Sweet!")
}

let isSmallestEvenNumber = true
const number = truly(isSmallestEvenNumber).then(2)
```
