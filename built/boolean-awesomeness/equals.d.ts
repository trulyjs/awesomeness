import { ITrulyMaker } from "../truly";
declare module "../truly" {
    interface ITruly {
        equals: (value: TrulyOf<any>) => ITruly;
    }
}
export default function extension(Truly: any): ITrulyMaker;
