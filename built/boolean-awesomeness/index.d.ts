import { ITruly as ITrulyAnd } from "./and";
import { ITruly as ITrulyOr } from "./or";
import { ITruly as ITrulyEquals } from "./equals";
export interface ITruly extends ITrulyAnd, ITrulyOr, ITrulyEquals {
}
declare const _default: (Truly: any) => void;
export default _default;
