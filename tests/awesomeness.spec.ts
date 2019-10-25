import truly from "../library/awesomeness"
const describe = require("ava-describe").describe as (title: string, testCases:any) => void

describe("Truly module", {
  "exports a function": (t) => {
    t.true(truly instanceof Function, "truly needs to be exported as a function")
  }
})
