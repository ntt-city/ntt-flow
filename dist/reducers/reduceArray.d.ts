import { Reducer } from './Reducer';
export declare const arrayActions: {
    ADD: string;
    APPEND: string;
    CLEAR: string;
    POP: string;
    PUSH: string;
    REMOVE: string;
    REVERSE: string;
    SHIFT: string;
    SORT: string;
    SPLICE: string;
    UNSHIFT: string;
};
declare const reduceArray: Reducer<Array<any>>;
export default reduceArray;
