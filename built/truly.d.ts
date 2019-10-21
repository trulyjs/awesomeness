export declare type TrulyContext = any;
export declare type TrulySubject = any;
export interface TrulyExtension {
    name?: string;
    isSupported?: (TrulySubject: any, TrulyContext?: any) => boolean;
    transform: (TrulySubject: any, TrulyContext: any) => TrulyContext;
}
declare class TrulyBase {
    context: TrulyContext;
    static extend(extensions: {
        [key: string]: TrulyExtension;
    }): void;
    static register(extension: TrulyExtension): void;
    then(result?: any): any;
}
declare function Truly(subject?: TrulySubject): void;
declare namespace Truly {
    var extend: typeof TrulyBase.extend;
    var register: typeof TrulyBase.register;
}
export default Truly;
