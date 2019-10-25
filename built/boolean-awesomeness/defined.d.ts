import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITrulyTip {
        defined: (any: any) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
