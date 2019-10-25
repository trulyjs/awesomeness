import {
  ITrulyMaker,
  truly
} from "../truly"

if (process.env.NODE_ENV !== "production") {
  type Assertion = import("ava").Assertions
  const describe = require("ava-describe").describe as (title: string, testCases:any) => void


  describe("Truly extension 'not'", {
    "can handle the logical operation 'not A'": (assert: Assertion) => {
      assert.true(truly().not(false).then())
      assert.false(truly().not(true).then())
      assert.false(truly.not(true).then())

    },

    "can handle the logical operation 'A not B'": (assert: Assertion) => { // truly is even, not odd
      assert.true(truly(true).not(false).then())
    }
  })
}


declare module "../truly" {
  interface ITruly {
    not: (condition: TrulyOf<boolean>) => ITruly
  }

  interface ITrulyTip  {
    not: (condition: TrulyOf<boolean>) => ITruly
  }
}

export default function extension (Truly: any): ITrulyMaker {
  Truly.extend({
    not: {
      tip: true,
      transform: (value: any, context): boolean => {
        if (truly.defined(context).then()){
          return context !== value
        }

        return !value
      }
    }
  })

  return Truly
}

