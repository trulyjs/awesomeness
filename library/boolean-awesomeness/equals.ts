import {
  ITrulyMaker,
  truly
} from "../truly"

if (process.env.NODE_ENV !== "production") {
  type Assertion = import("ava").Assertions
  const describe = require("ava-describe").describe as (title: string, testCases:any) => void

  describe("Truly extension 'equals'", {
    "can handle the logical operation 'A equals B'": (assert: Assertion) => {
      assert.true(truly(1).equals(1).then())
      assert.false(truly(1).equals(2).then())
      assert.false(truly(true).equals(false).then())
      assert.true(truly(false).equals(false).then())
    },
  })
}

declare module "../truly" {
  interface ITruly {
    equals: (value: TrulyOf<any>) => ITruly
  }
}

export default function extension (Truly: any): ITrulyMaker {
  Truly.extend({
    equals: {
      transform: (value: any, context): boolean => {
        return context === value
      }
    }
  })

  return Truly
}

