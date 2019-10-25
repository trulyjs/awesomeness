let Truly: ITrulyMaker

if (process.env.NODE_ENV !== 'production') {
  const test = require('ava')
  const describe = require('ava-describe').describe

  test('Truly can be imported', (t) => t.true(true))

  describe('Truly expression class', {
    'can be constructed': (t) => {
      t.truthy(truly())
      t.truthy(truly(true))
      t.truthy(truly(false))
    },

    'can return the inner or provided value with \'then\'': (t) => {
      t.true(truly(true).then())
      t.true(truly(true).then())
      t.is(truly(true).then('success'), 'success')
      t.is(truly(false).then('error'), null)
    },

    'can add an extension': (t) => {
      Truly.extend({
        add1: {
          transform: (_, context) => context + 1
        }
      })

      interface ITrulyExtended extends ITruly {
        add1: () => ITrulyExtended
      }

      const trulyExtended : (any?) => ITrulyExtended = truly as (any?) => ITrulyExtended

      t.is(trulyExtended(1).add1().then(), 2)
    }
  })
}

export type TrulyContext = any
export type TrulySubject = any

export interface TrulyExtension {
  name?: string
  isSupported?: (TrulySubject, TrulyContext?) => boolean
  transform: (TrulySubject, TrulyContext) => TrulyContext
}

export interface ITruly {
  then: (any?) => TrulyContext
}

export interface ITrulyMaker {
  new(any?)
  extend: (extensions: { [key: string]: TrulyExtension }) => void
  register: (extension: TrulyExtension) => void
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

  GetMethods(A.prototype).forEach(
    method => copyUnique(method, A.prototype, B.prototype)
  )

  GetMethods(A).forEach(
    method => copyUnique(method, A, B)
  )

  return B
}

function executeExtension(extension:TrulyExtension, subject: TrulySubject, context: TrulyContext) {
  if ('isSupported' in extension && !extension.isSupported(subject)) {
    const stringify = (obj: any) => JSON.stringify(obj, null, '2')
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
  if (!extension.name) throw Error('Truly register requires a name')

  const parentExtension =
    GetMethods(Truly.prototype).includes(extension.name)
      ? Truly.prototype[extension.name]
      : null

  Truly.prototype[extension.name] = function (this: TrulyBase, subject: TrulySubject) {
    if (parentExtension) {
      parentExtension.call(this, subject, this.context)
    }
    this.context = executeExtension(extension, subject, this.context)

    return this
  }
}

function extend(extensions: { [key: string]: TrulyExtension }) {
  Object.keys(extensions).forEach(extensionName => {
    const extension = extensions[extensionName]

    if (extension.name) {
      throw Error('Truly extend does not support name in extension body')
    }

    extension.name = extensionName

    register(extension)
  })
}

class TrulyBase implements ITruly {
  protected context: TrulyContext

  static extend = extend
  static register = register

  protected construct(subject?) {
    this.context = subject
  }

  then(result?: any): any {
    if (typeof result !== 'undefined') {
      this.context = this.context ? result : null
    }

    return this.context
  }
}

export function truly (subject?): ITruly {
  return new Truly(subject)
}

Truly = LinkMethods(TrulyBase,
  function(subject?:any){
  this.construct(subject)
  }) as ITrulyMaker

export default Truly
