import {
  ITrulyMaker,
  truly
} from "../truly"

if (process.env.NODE_ENV !== "production") {
  type Assertion = import("ava").Assertions
  const describe = require("ava-describe").describe as (title: string, testCases:any) => void


  describe("Truly extension 'is'", {
    "can handle the logical operation 'is A'": (assert: Assertion) => {
      assert.true(truly.is(true).then())
    },

    "can handle the logical operation 'A is B'": (assert: Assertion) => {
      assert.true(truly(true).is(true).then())
      assert.false(truly(true).is(false).then())
      assert.true(truly(false).is(false).then())
      assert.true(truly(true).is(truly.defined(1)).then())
    }
  })
}


declare module "../truly" {
  interface ITruly {
    is: (value: TrulyOf<any>) => ITruly
  }

  interface ITrulyTip {
    is: (value: TrulyOf<any>) => ITruly
  }
}

export default function extension (Truly: any): ITrulyMaker {
  Truly.extend({
    is: {
      tip: true,
      transform: (value: any, context): boolean => {
        if (truly.defined(context).then()) {
          return context === value
        }

        return !!value
      }
    }
  })

  return Truly
}

