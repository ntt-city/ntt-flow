import { Reducer } from './Reducer';

const FIND = 'FIND';
const QUERY = 'QUERY';

export const fetchActions = {
    FIND,
    QUERY
};

interface FetchAction {
    FIND: {
        path: string[];
        query: FlatObject;
        type: typeof FIND;
    };
    QUERY: {
        path: string[];
        payload: Content;
        type: typeof QUERY;
    };
}

const reducePersistence: Reducer<any, FetchAction[keyof FetchAction]> = (state, action) => {
    switch (action.type) {
        case FIND: return state;
        case QUERY: return state;
        default: return state;
    }
};

export default reducePersistence;