import { Map } from 'immutable';
import { Reducer } from './Reducer';
declare const SET = "SET";
declare const SET_IN = "SET_IN";
declare const UPDATE = "UPDATE";
declare const UPDATE_IN = "UPDATE_IN";
export declare const mapActions: {
    SET: string;
    SET_IN: string;
    UPDATE: string;
    UPDATE_IN: string;
};
interface MapAction {
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
declare const reduceMap: Reducer<Map, MapAction[keyof MapAction]>;
export default reduceMap;
