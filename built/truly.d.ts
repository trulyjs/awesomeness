export declare type TrulyContext = any;
export declare type TrulySubject = any;
export interface TrulyExtension {
    name?: string;
    isSupported?: (TrulySubject: any, TrulyContext?: any) => boolean;
    transform: (TrulySubject: any, TrulyContext: any) => TrulyContext;
}
export interface ITruly {
    then: (any: any) => TrulyContext;
}
declare class TrulyBase implements ITruly {
    protected context: TrulyContext;
    static extend(extensions: {
        [key: string]: TrulyExtension;
    }): void;
    static register(extension: TrulyExtension): void;
    then(result?: any): any;
}
declare function Truly(this: TrulyBase, subject?: TrulySubject): void;
declare namespace Truly {
    var extend: typeof TrulyBase.extend;
    var register: typeof TrulyBase.register;
}
export default Truly;
