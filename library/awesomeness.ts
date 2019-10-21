if (process.env.NODE_ENV !== "production") {
    const describe = require("ava-describe").describe
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

        "can handle the logical operation 'A and B'": (t) => {
            t.true(new Truly(true).and(true).then())
            t.false(new Truly(false).and(true).then())
            t.false(new Truly(true).and(false).then())
            t.false(new Truly(false).and(false).then())
        },

        "can handle the logical operator 'A or B'": (t) => {
            t.true(new Truly(true).or(true).then())
            t.true(new Truly(true).or(false).then())
            t.true(new Truly(false).or(true).then())
            t.false(new Truly(false).or(false).then())
        },
    })

}

class Truly  {
    context: any

    constructor(subject?) {
        this.context = subject
    }

    and(condition: boolean): this {
        this.context = this.context && condition
        return this
    }

    or(condition: boolean): this {
        this.context = this.context || condition
        return this
    }

    then(result?: any): any {

        if (typeof result !== "undefined") {
            this.context = this.context ? result : null;
        }

        return this.context
    }
}

if (process.env.NODE_ENV !== "production") {
    const describe = require("ava-describe").describe
    describe("Truly module", {
        "exports a function": (t) => {
            t.true(truly instanceof Function, "truly needs to be exported as a function")
        }
    })
}

const truly = function(subject) {
    return new Truly(subject)
}

export default truly
