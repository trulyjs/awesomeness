import truly from "../built/awesomeness"
type Assertion = import("ava").Assertions
const describe = require("ava-describe").describe as (title: string, testCases:any) => void

describe("Truly built module", {
  "exports a function": (assert: Assertion) => {
    assert.true(truly instanceof Function, "truly needs to be exported as a function")
  },
  "integrates extensions": (assert: Assertion) => {
    assert.true(truly(true).and(true).or(true).is(true).then(true))
    assert.true(truly.defined(true).not(false).equals(true).then())
  },
})
