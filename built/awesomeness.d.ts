import { ITruly as ITrulyBase } from "./truly";
import { ITruly as ITrulyBoolean } from "./boolean-awesomeness";
interface ITruly extends ITrulyBase, ITrulyBoolean {
}
declare const truly: (any: any) => ITruly;
export default truly;
