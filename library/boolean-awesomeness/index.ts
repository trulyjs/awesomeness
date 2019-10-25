import defined from "./defined"
import and from "./and"
import or from "./or"
import not from "./not"
import is  from "./is"
import equals from "./equals"

export default (Truly: any) => {
  defined(Truly)
  and(Truly)
  or(Truly)
  not(Truly)
  is(Truly)
  equals(Truly)
}
