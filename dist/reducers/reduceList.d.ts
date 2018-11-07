import { List } from 'immutable';
import { Reducer } from './Reducer';
declare const SET = "SET";
declare const SET_IN = "SET_IN";
declare const UPDATE = "UPDATE";
declare const UPDATE_IN = "UPDATE_IN";
export declare const listActions: {
    SET: string;
    SET_IN: string;
    UPDATE: string;
    UPDATE_IN: string;
};
interface ListAction {
    SET: {
        key: number;
        value: any;
        type: typeof SET;
    };
    SET_IN: {
        keyPath: KeyPath;
        value: any;
        type: typeof SET_IN;
    };
    UPDATE: {
        key: number;
        value: any;
        type: typeof UPDATE;
    };
    UPDATE_IN: {
        keyPath: KeyPath;
        value: any;
        type: typeof UPDATE_IN;
    };
}
declare const reduceList: Reducer<List, ListAction[keyof ListAction]>;
export default reduceList;
