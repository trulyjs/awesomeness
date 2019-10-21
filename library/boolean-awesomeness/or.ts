import Truly from "../truly"

if (process.env.NODE_ENV !== "production") {
  const describe = require("ava-describe").describe
  extension(Truly)
  let truly = (subject):any => new Truly(subject)
  describe("Truly extension 'or'", {

    "can handle the logical operation 'A or B'": (t) => {
      t.true(truly(true).or(true).then())
      t.true(truly(true).or(false).then())
      t.true(truly(false).or(true).then())
      t.false(truly(false).or(false).then())
    }
  })

}

export default function extension (Truly: any) {
  Truly.extend({
    or: {
      transform: (condition: boolean, context): boolean => {
        return context || condition
      }
    }
  })
}
