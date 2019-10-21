import truly from "../library/awesomeness"
import { describe } from "ava-describe"

describe("Truly module", {
  "exports a function": (t) => {
    t.true(truly instanceof Function, "truly needs to be exported as a function")
  }
})
