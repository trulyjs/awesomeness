import Truly from "../truly"

if (process.env.NODE_ENV !== "production") {
  const describe = require("ava-describe").describe
  let truly = (subject):any => new Truly(subject)

  describe("Truly extension 'equals'", {
    "can handle the logical operation 'A equals B'": (t) => {
      t.true(truly(1).equals(1).then())
      t.false(truly(1).equals(2).then())
      t.false(truly(true).equals(false).then())
      t.true(truly(false).equals(false).then())
    },
  })
}

export interface ITruly {
  equals: (any)=> ITruly
}

export default function extension (Truly: any) {
  Truly.extend({
    equals: {
      transform: (value: any, context): boolean => {
        return context === value
      }
    }
  })
}

