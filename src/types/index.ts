declare type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

declare type ValueType = boolean | Date | number | string | symbol;

declare interface Vector extends Array<number> { }

