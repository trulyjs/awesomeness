import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITruly {
        equals: (any: any) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
