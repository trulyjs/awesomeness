import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITrulyTip {
        defined: (value: TrulyOf<any>) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
