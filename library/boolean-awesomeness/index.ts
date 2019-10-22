import and, {ITruly as ITrulyAnd} from "./and"
import or, {ITruly as ITrulyOr} from "./or"

export interface ITruly extends ITrulyAnd, ITrulyOr {
}

export default (Truly: any) => {
  and(Truly)
  or(Truly)
}
