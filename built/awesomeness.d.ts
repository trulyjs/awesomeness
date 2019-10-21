declare class Expression {
    context: any;
    constructor(subject: any);
}
declare class Truly extends Expression {
    constructor(subject?: any);
    and(condition: boolean): this;
    or(condition: boolean): this;
    then(): any;
}
declare const truly: (subject: any) => Truly;
export default truly;
