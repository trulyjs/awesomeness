declare let Truly: ITrulyMaker;
export declare type TrulyContext = any;
export declare type TrulySubject = any;
export interface TrulyExtension {
    name?: string;
    isSupported?: (TrulySubject: any, TrulyContext?: any) => boolean;
    transform: (TrulySubject: any, TrulyContext: any) => TrulyContext;
}
export interface ITruly {
    then: (any?: any) => TrulyContext;
}
export interface ITrulyMaker {
    new (any?: any): any;
    extend: (extensions: {
        [key: string]: TrulyExtension;
    }) => void;
    register: (extension: TrulyExtension) => void;
}
export declare function truly(subject?: any): ITruly;
export default Truly;
