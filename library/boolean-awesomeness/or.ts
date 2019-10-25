import {
  ITrulyMaker,
  truly
} from "../truly"

if (process.env.NODE_ENV !== "production") {
  type Assertion = import("ava").Assertions
  const describe = require("ava-describe").describe as (title: string, testCases:any) => void

  describe("Truly extension 'or'", {

    "can handle the logical operation 'A or B'": (assert: Assertion) => {
      assert.true(truly(true).or(true).then())
      assert.true(truly(true).or(false).then())
      assert.true(truly(false).or(true).then())
      assert.false(truly(false).or(false).then())
    }
  })
}

declare module "../truly" {
  interface ITruly {
    or: (condition: TrulyOf<boolean>) => ITruly
  }
}
export default function extension (Truly: any): ITrulyMaker {
  Truly.extend({
    or: {
      transform: (condition: boolean, context): boolean => {
        return context || condition
      }
    }
  })

  return Truly
}
