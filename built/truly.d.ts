declare let Truly: ITrulyMaker;
export declare type TrulyContext = any;
export declare type TrulySubject = any;
export declare type TrulyOf<T = {}> = ITruly | T;
export interface TrulyExtension {
    name?: string;
    tip?: boolean;
    chain?: boolean;
    isSupported?: (TrulySubject: any, TrulyContext?: any) => boolean;
    transform: (TrulySubject: any, TrulyContext: any) => TrulyContext;
}
export interface ITruly {
    then: (value?: TrulyOf<any>) => TrulyContext;
}
export interface ITrulyMaker {
    new (any?: any): any;
    extend: (extensions: {
        [key: string]: TrulyExtension;
    }) => void;
    register: (extension: TrulyExtension) => void;
}
export interface ITrulyTip {
    (any?: any): ITruly;
}
declare function register(extension: TrulyExtension): void;
declare function extend(extensions: {
    [key: string]: TrulyExtension;
}): void;
export declare class TrulyBase {
    protected context: TrulyContext;
    static extend: typeof extend;
    static register: typeof register;
    protected construct(subject?: any): void;
    then(result?: any): any;
}
export declare const truly: ITrulyTip;
export default Truly;
