import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITruly {
        or: (condition: TrulyOf<boolean>) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
