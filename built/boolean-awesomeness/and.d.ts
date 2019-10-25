import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITruly {
        and?: (condition: TrulyOf<boolean>) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
