import {
  ITrulyMaker,
  truly
} from "../truly"

if (process.env.NODE_ENV !== "production") {
  type Assertion = import("ava").Assertions
  const describe = require("ava-describe").describe as (title: string, testCases:any) => void


  describe("Truly extension 'and'", {
    "can handle the logical operation 'A and B'": (assert: Assertion) => {
      assert.true(truly(true).and(true).then())
      assert.false(truly(false).and(true).then())
      assert.false(truly(true).and(false).then())
      assert.false(truly(false).and(false).then())
    },
  })
}

declare module "../truly" {
  interface ITruly {
    and?: (condition: TrulyOf<boolean>) => ITruly
  }
}

export default function extension (Truly: any): ITrulyMaker {
  Truly.extend({
    and: {
      transform: (condition: boolean, context): boolean => {
        return context && condition
      }
    }
  })

  return Truly
}
