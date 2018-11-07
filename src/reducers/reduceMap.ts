import { Map } from 'immutable';
import { Reducer } from './Reducer';

const SET = 'SET';
const SET_IN = 'SET_IN';
const UPDATE = 'UPDATE';
const UPDATE_IN = 'UPDATE_IN';

export const mapActions = {
    SET,
    SET_IN,
    UPDATE,
    UPDATE_IN
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

const reduceMap: Reducer<Map, MapAction[keyof MapAction]> = (map, action): Map => {
    switch (action.type) {
        case SET: return map.set(action.key, action.value);
        case SET_IN: return map.setIn(action.keyPath, action.value);
        case UPDATE: return map.update(action.key, action.value);
        case UPDATE_IN: return map.updateIn(action.keyPath, action.value);
        default: return map;
    }
};

export default reduceMap;