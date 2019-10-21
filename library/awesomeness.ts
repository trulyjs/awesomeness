import Truly from "./truly"
import boolean from "./boolean-awesomeness"

boolean(Truly)
function truly (subject) {
  const trulyAwesomeness = new Truly(subject)
  return (trulyAwesomeness as any)
}

export default truly
