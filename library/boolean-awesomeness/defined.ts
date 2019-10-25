import {
  ITrulyMaker,
  truly
} from "../truly"

if (process.env.NODE_ENV !== "production") {
  type Assertion = import("ava").Assertions
  const describe = require("ava-describe").describe as (title: string, testCases:any) => void

  describe("Truly extension 'defined'", {
    "can handle the logical operation 'defined A'": (assert: Assertion) => {
      assert.true(truly.defined(true).then())
      assert.false(truly.defined(void(0)).then())
    }
  })
}

declare module "../truly" {
  interface ITrulyTip {
    defined: (any)=> ITruly
  }
}


export default function extension (Truly: any): ITrulyMaker {
  Truly.extend({
    defined: {
      tip: true,
      chain: false,
      transform: (value: any): boolean => {
        return value !== void(0)
      }
    }
  })

  return Truly
}

