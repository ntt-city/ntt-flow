export interface Action {
    type: any;
}
export declare type Reducer<T, A extends Action = Action> = (value: T, action: A) => T;
