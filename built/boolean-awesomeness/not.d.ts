import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITruly {
        not: (condition: TrulyOf<boolean>) => ITruly;
    }
    interface ITrulyTip {
        not: (condition: TrulyOf<boolean>) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
