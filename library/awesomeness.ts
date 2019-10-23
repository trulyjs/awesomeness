import Truly, {ITruly as ITrulyBase, truly as trulyAwesomeness} from "./truly"
import booleanExtension, {ITruly as ITrulyBoolean} from "./boolean-awesomeness"

interface ITruly extends ITrulyBase, ITrulyBoolean{
}

booleanExtension(Truly)

const truly: (any) => ITruly = trulyAwesomeness as (any) => ITruly

export default truly
