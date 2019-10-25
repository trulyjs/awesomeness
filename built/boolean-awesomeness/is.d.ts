import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITruly {
        is: (value: TrulyOf<any>) => ITruly;
    }
    interface ITrulyTip {
        is: (value: TrulyOf<any>) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
