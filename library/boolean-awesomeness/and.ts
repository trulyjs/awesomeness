import Truly from "../truly"

if (process.env.NODE_ENV !== "production") {
  const describe = require("ava-describe").describe
  extension(Truly)
  let truly = (subject):any => new Truly(subject)

  describe("Truly extension 'and'", {
    "can handle the logical operation 'A and B'": (t) => {
      t.true(truly(true).and(true).then())
      t.false(truly(false).and(true).then())
      t.false(truly(true).and(false).then())
      t.false(truly(false).and(false).then())
    },
  })

}

export default function extension (Truly: any) {
  Truly.extend({
    and: {
      transform: (condition: boolean, context): boolean => {
        return context && condition
      }
    }
  })
}

