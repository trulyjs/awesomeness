import truly from "../library/awesomeness"
type Assertion = import("ava").Assertions
const describe = require("ava-describe").describe as (title: string, testCases:any) => void

describe("Truly library module", {
  "exports a function": (assert: Assertion) => {
    assert.true(truly instanceof Function, "truly needs to be exported as a function")
    assert.true(truly(true).and(true).or(true).then())
  }
})
