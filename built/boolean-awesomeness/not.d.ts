import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITruly {
        not: (value: TrulyOf<any>) => ITruly;
    }
    interface ITrulyTip {
        not: (value: TrulyOf<any>) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
