console.log('Coming soon!')

// Exclude tests in production build
if (process.env.NODE_ENV !== 'production') {
    const describe = require("ava-describe").describe
    describe('Truly', {
        'it exports a function': (t) => {
            t.true(truly instanceof Function, 'truly needs to be exported as a function')
        }
    })
}

const truly = function() {
}

export default truly
