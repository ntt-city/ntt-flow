import { Cursor } from 'immutable';
import { Reducer } from './Reducer';
declare const DELETE_IN = "DELETE_IN";
declare const REMOVE_IN = "REMOVE_IN";
declare const SET = "SET";
declare const SET_IN = "SET_IN";
declare const UPDATE = "UPDATE";
declare const UPDATE_IN = "UPDATE_IN";
export declare const cursorActions: {
    DELETE_IN: string;
    REMOVE_IN: string;
    SET: string;
    SET_IN: string;
    UPDATE: string;
    UPDATE_IN: string;
};
interface CursorAction {
    DELETE_IN: {
        keyPath: KeyPath;
        value: any;
        type: typeof DELETE_IN;
    };
    REMOVE_IN: {
        keyPath: KeyPath;
        value: any;
        type: typeof REMOVE_IN;
    };
    SET: {
        key: string;
        value: any;
        type: typeof SET;
    };
    SET_IN: {
        keyPath: KeyPath;
        value: any;
        type: typeof SET_IN;
    };
    UPDATE: {
        key: string;
        value: any;
        type: typeof UPDATE;
    };
    UPDATE_IN: {
        keyPath: KeyPath;
        value: any;
        type: typeof UPDATE_IN;
    };
}
declare const reduceCursor: Reducer<Cursor, CursorAction[keyof CursorAction]>;
export default reduceCursor;
