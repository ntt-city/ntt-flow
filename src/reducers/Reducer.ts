export interface Action {
    type: any;
}

export type Reducer<T, A extends Action = Action> = (value: T, action: A) => T;

export interface ReducerMap {
    [key: string]: Reducer<any> | ReducerMap;
}