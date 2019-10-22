import { ITruly as ITrulyBase } from "./truly";
import { ITruly as ITrulyBoolean } from "./boolean-awesomeness";
interface ITruly extends ITrulyBase, ITrulyBoolean {
}
declare function truly(subject: any): ITruly;
export default truly;
