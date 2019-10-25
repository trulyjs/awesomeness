
let Truly: ITrulyMaker

if (process.env.NODE_ENV !== "production") {

  const test = require("ava") as import("ava").TestInterface
  type Assertion = import("ava").Assertions
  const describe = require("ava-describe").describe as (title: string, testCases:any) => void

  test("Truly can be imported", (assert: Assertion) => {
    assert.true(true)
  })

  describe("Truly expression class", {
    "can be constructed": (assert: Assertion) => {
      assert.truthy(truly())
      assert.truthy(truly(true))
      assert.truthy(truly(false))
    },

    "can return the inner or provided value with \"then\"": (assert: Assertion) => {
      assert.true(truly(true).then())
      assert.true(truly(true).then())
      assert.is(truly(true).then("success"), "success")
      assert.is(truly(false).then("error"), null)
    },

    "can add an extension": (assert: Assertion) => {
      Truly.extend({
        add1: {
          transform: (_, context) => context + 1
        }
      })

      interface ITrulyExtended extends ITruly {
        add1: () => ITrulyExtended
      }

      const number = truly(1) as ITrulyExtended

      assert.is(number.add1().then(), 2)
    }
  })
}

export type TrulyContext = any
export type TrulySubject = any
export type TrulyOf<T = {}> = ITruly | T

export interface TrulyExtension {
  name?: string
  tip?: boolean
  chain?: boolean
  isSupported?: (TrulySubject, TrulyContext?) => boolean
  transform: (TrulySubject, TrulyContext) => TrulyContext
}

export interface ITruly {
  then: (value?: TrulyOf<any>) => TrulyContext
}

export interface ITrulyMaker {
  new(any?)
  extend: (extensions: { [key: string]: TrulyExtension }) => void
  register: (extension: TrulyExtension) => void
}

export interface ITrulyTip {
  (any?): ITruly
}

function GetMethods(A): string[] {
  return Object.getOwnPropertyNames(A)
}

function copyUnique(property, source, destination) {
  if (destination[property] === void(0)) {
    destination[property] = source[property]
  }
}

function LinkMethods(A,B) {
  if (!A) return B

  GetMethods(A.prototype).forEach(
    method => copyUnique(method, A.prototype, B.prototype)
  )

  GetMethods(A).forEach(
    method => copyUnique(method, A, B)
  )

  return B
}

function generateTrulyMaker(): ITrulyMaker {
  return LinkMethods(TrulyBase,
    function(subject?:any){
      this.construct(subject)
    }) as ITrulyMaker
}

function flattenNested(value: TrulySubject): TrulySubject {

  return (value instanceof Truly)
    ? flattenNested(value.then())
    : value

}

function executeExtension(extension:TrulyExtension, subject: TrulySubject, context: TrulyContext) {
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

function register(extension: TrulyExtension) {
  if (!extension.name) throw Error("Truly register requires a name")

  let TrulyMaker = Truly.prototype,
      name = extension.name,
      chain = extension.chain !== false

  const parentExtension =
    GetMethods(TrulyMaker).includes(extension.name)
      ? TrulyMaker[extension.name]
      : null

  const extensionBootstrap = function (this: TrulyBase, subject: TrulySubject) {
    if (parentExtension) {
      parentExtension.call(this, subject, this.context)
    }

    subject = flattenNested(subject)
    this.context = executeExtension(extension, subject, this.context)
    return this
  }

  if (chain) {
    TrulyMaker[name] = extensionBootstrap
  }

  if (extension.tip) {
    truly[name] = (subject: TrulySubject) => extensionBootstrap.call(new Truly(), subject)
  }
}

function extend(extensions: { [key: string]: TrulyExtension }) {
  Object.keys(extensions).forEach(extensionName => {
    const extension = extensions[extensionName]

    if (extension.name) {
      throw Error("Truly extend does not support name in extension body")
    }

    extension.name = extensionName

    register(extension)
  })
}

export class TrulyBase {
  protected context: TrulyContext

  static extend = extend
  static register = register

  protected construct(subject?) {
    this.context = subject
  }

  then(result?: any): any {
    if (typeof result !== "undefined") {
      this.context = this.context ? result : null
    }

    return this.context
  }
}

Truly = generateTrulyMaker()

export const truly: ITrulyTip = function truly (subject?): ITruly {
  return new Truly(subject)
} as ITrulyTip

export default Truly
