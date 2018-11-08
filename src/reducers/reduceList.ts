///<reference path='../../node_modules/immutable/dist/Immutable.d.ts'/>
import { List } from 'immutable';
import { Reducer } from './Reducer';

const SET = 'SET';
const SET_IN = 'SET_IN';
const UPDATE = 'UPDATE';
const UPDATE_IN = 'UPDATE_IN';

export const listActions = {
    SET,
    SET_IN,
    UPDATE,
    UPDATE_IN
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

const reduceList: Reducer<List<any>, ListAction[keyof ListAction]> = (list, action): List<any> => {
    switch (action.type) {
        case SET: return list.set(action.key, action.value);
        case SET_IN: return list.setIn(action.keyPath, action.value);
        case UPDATE: return list.update(action.key, action.value);
        case UPDATE_IN: return list.updateIn(action.keyPath, action.value);
        default: return list;
    }
};

export default reduceList;