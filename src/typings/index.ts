declare type Content = SimpleObject | ValueType;

declare type Key = number | string;

declare type KeyPath = Iterable<Key>;

declare type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

declare interface SimpleArray extends Array<SimpleObject | ValueType> { }

declare interface SimpleObject {
    [key: string]: SimpleArray | SimpleObject | ValueType;
}

declare type ValueType = boolean | Date | number | string | symbol;

declare interface Vector extends Array<number> { }

declare interface Matrix extends Array<Vector> { }
/*
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

declare interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}
*/

