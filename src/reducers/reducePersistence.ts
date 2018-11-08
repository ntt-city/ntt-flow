import { Reducer } from './Reducer';

const CREATE = 'CREATE';
const DESTROY = 'DESTROY';
const DISCARD = 'DISCARD';
const MERGE = 'MERGE';
const UPDATE = 'UPDATE';

export const odataActions = {
    CREATE,
    DESTROY,
    DISCARD,
    MERGE,
    UPDATE
};

interface PersistenceAction {
    CREATE: {
        path: string[];
        query: FlatObject;
        type: typeof CREATE;
    };
    DESTROY: {
        path: string[];
        payload: Content;
        type: typeof DESTROY;
    };
    DISCARD: {
        path: string[];
        payload: Content;
        type: typeof DISCARD;
    };
    MERGE: {
        path: string[];
        payload: Content;
        type: typeof MERGE;
    };
    UPDATE: {
        path: string[];
        payload: Content;
        type: typeof UPDATE;
    };
}

const reducePersistence: Reducer<any, PersistenceAction[keyof PersistenceAction]> = (state, action) => {
    switch (action.type) {
        case CREATE: return state;
        case DESTROY: return state;
        case DISCARD: return state;
        case MERGE: return state;
        case UPDATE: return state;
        default: return state;
    }
};

export default reducePersistence;