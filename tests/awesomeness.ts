import { describe } from "ava-describe"
import truly from "../source/awesomeness"

describe('Truly', {
    'it exports a function': (t) => {
        t.true(truly instanceof Function, 'truly needs to be exported as a function')
    }
});
