if (process.env.NODE_ENV !== "production") {
  const test = require("ava")
  const describe = require("ava-describe").describe

  test("Truly can be imported", (t) => t.true(true))

  describe("Truly expression class", {
    "can be constructed": (t) => {
      t.truthy(new Truly())
      t.truthy(new Truly(true))
      t.truthy(new Truly(false))
    },

    "can return the inner or provided value with 'then'": (t) => {
      t.true(new Truly(true).then())
      t.true(new Truly(true).then())
      t.is(new Truly(true).then("success"), "success")
      t.is(new Truly(false).then("error"), null)
    },

    "can add an extension": (t) => {
      Truly.extend({
        add1: {
          transform: (_, context) => context + 1
        }
      })

      t.is(new Truly(1).add1().then(), 2)
    },
  })
}
export type TrulyContext = any
export type TrulySubject = any

export interface TrulyExtension {
  name?: string
  isSupported?: (TrulySubject, TrulyContext?) => boolean
  transform: (TrulySubject, TrulyContext) => TrulyContext
}

class TrulyBase {
  context: TrulyContext

  static extend(extensions: { [key: string]: TrulyExtension }) {
    Object.keys(extensions).forEach(extensionName => {
      const extension = extensions[extensionName]

      if (extension.name) {
        throw Error("Truly extend does not support name in extension body")
      }

      extension.name = extensionName

      TrulyBase.register(extension)
    })
  }

  static register(extension: TrulyExtension) {
    if (!extension.name) throw Error("Truly register requires a name")

    const methods = Truly.prototype

    const parentExtension = methods[extension.name]
    const childExtension = function (subject: TrulySubject, context: TrulyContext) {
      if ("isSupported" in extension && !extension.isSupported(subject)) {
        const stringify = (obj: any) => JSON.stringify(obj, null, "2")
        throw Error(
          `Truly extension "${extension.name}" failed to support: 
                          subject: ${stringify(subject)})
                          context: ${stringify(context)}
                          `
        )
      }
      return extension.transform(subject, context)
    }

    Truly.prototype = Object.assign({}, Truly.prototype, {
      [extension.name]: function (subject: TrulySubject) {

        if (parentExtension) {
          parentExtension.bind(this)(subject)
          childExtension.bind(this)(subject)
        } else {
          this.context = childExtension.call(this,subject, this.context)
        }

        return this
      }
    })
  }

  then(result?: any): any {
    if (typeof result !== "undefined") {
      this.context = this.context ? result : null;
    }

    return this.context
  }

}

function Truly(subject?: TrulySubject) {
    this.context = subject
}

Truly.extend = TrulyBase.extend
Truly.register = TrulyBase.register

Truly.prototype.then = function(result?:any) {
  return TrulyBase.prototype.then.call(this,result)
}

export default Truly
