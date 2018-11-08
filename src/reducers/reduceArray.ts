import { Reducer } from './Reducer';

const ADD = 'ADD';
const APPEND = 'APPEND';
const CLEAR = 'CLEAR';
const POP = 'POP';
const PUSH = 'PUSH';
const REMOVE = 'REMOVE';
const REVERSE = 'REVERSE';
const SHIFT = 'SHIFT';
const SORT = 'SORT';
const SPLICE = 'SPLICE';
const UNSHIFT = 'UNSHIFT';

export const arrayActions = {
    ADD,
    APPEND,
    CLEAR,
    POP,
    PUSH,
    REMOVE,
    REVERSE,
    SHIFT,
    SORT,
    SPLICE,
    UNSHIFT
};

// https://vincent.billey.me/pure-javascript-immutable-array/
interface ArrayAction<T> {
    ADD: {
        newEntry: T;
        type: typeof ADD;
    };
    APPEND: {
        newEntry: T;
        type: typeof APPEND;
    };
    CLEAR: {
        type: typeof CLEAR;
    };
    POP: {
        type: typeof POP;
    };
    PUSH: {
        newEntry: T;
        type: typeof PUSH;
    };
    REMOVE: {
        index: number;
        type: typeof REMOVE;
    };
    REVERSE: {
        type: typeof REVERSE;
    };
    SHIFT: {
        type: typeof SHIFT;
    };
    SORT: {
        compareFn?: (a: T, b: T) => number;
        type: typeof SORT;
    };
    SPLICE: {
        deleteCount: number;
        items: T[];
        start: number;
        type: typeof SPLICE;
    }
    UNSHIFT: {
        newEntry: T;
        type: typeof UNSHIFT;
    };
}

const reduceArray: Reducer<Array<any>> = <T>(
    arr: Array<T>,
    action: ArrayAction<T>[keyof ArrayAction<T>]
) => {
    switch (action.type) {
        case ADD: return [ ...arr, action.newEntry ];
        case APPEND: return [ action.newEntry, ...arr ];
        case CLEAR: return [];
        case POP: return arr.slice(0, -1);
        case PUSH: return [ ...arr, action.newEntry ];
        case REMOVE: return arr.slice(0, action.index).concat(arr.slice(action.index + 1));
        case REVERSE: return [ ...arr ].reverse();
        case SHIFT: return arr.slice(1);
        case SORT: return [ ...arr ].sort(action.compareFn);
        case SPLICE: return [
            ...arr.slice(0, action.start),
            ...action.items,
            ...arr.slice(action.start + action.deleteCount)
        ];
        case UNSHIFT: return [ action.newEntry, ...arr ];
        default: return arr;
    }
};

export default reduceArray;