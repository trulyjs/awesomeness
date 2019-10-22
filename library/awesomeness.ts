import Truly, {ITruly as ITrulyBase} from "./truly"
import booleanExtension ,{ITruly as ITrulyBoolean} from "./boolean-awesomeness"

interface ITruly extends ITrulyBase, ITrulyBoolean{
}

booleanExtension(Truly)

function truly (subject): ITruly {
  const trulyAwesomeness = new Truly(subject)
  return (trulyAwesomeness as any)
}

export default truly
