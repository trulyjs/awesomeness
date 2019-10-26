import "./defined"
import defined from "./defined"
import "./and"
import and from "./and"
import "./or"
import or from "./or"
import "./not"
import not from "./not"
import "./is"
import is  from "./is"
import "./equals"
import equals from "./equals"

import { ITrulyMaker } from '../truly'

function extension(Truly: ITrulyMaker) {
    defined(Truly)
    and(Truly)
    or(Truly)
    not(Truly)
    is(Truly)
    equals(Truly)
}
export default extension
