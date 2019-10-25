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
if (truly (1 + 1).equals(number)) {
  say("Great!")
}

let raining = true
let withoutJacket = false
if (truly.is(raining).and(truly.not(withoutJacket)).then()) {
  say("I won't get wet!")
}

let ultimateBusinessPlan = undefined

if(truly.defined(ultimateBusinessPlan).then()) {
  say("Victory is mine!")
} else {
  say("Blast!")
}
```
