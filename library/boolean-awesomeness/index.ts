import and, {ITruly as ITrulyAnd} from "./and"
import or, {ITruly as ITrulyOr} from "./or"
import equals, {ITruly as ITrulyEquals} from "./equals"


export interface ITruly extends
  ITrulyAnd,
  ITrulyOr,
  ITrulyEquals

{}

export default (Truly: any) => {
  and(Truly)
  or(Truly)
  equals(Truly)
}
