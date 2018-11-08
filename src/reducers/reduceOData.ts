import { Reducer } from './Reducer';

const DELETE = 'DELETE';
const GET = 'GET';
const PATCH = 'PATCH';
const POST = 'POST';
const PUT = 'PUT';


export const odataActions = {
    DELETE,
    GET,
    PATCH,
    POST,
    PUT
};

interface ODataAction {
    DELETE: {
        path: string[];
        query: FlatObject;
        type: typeof DELETE;
    };
    GET: {
        path: string[];
        payload: Content;
        type: typeof GET;
    };
    PATCH: {
        path: string[];
        payload: Content;
        type: typeof PATCH;
    };
    POST: {
        path: string[];
        payload: Content;
        type: typeof POST;
    };
    PUT: {
        path: string[];
        payload: Content;
        type: typeof PUT;
    };
}

const reduceOData: Reducer<any, ODataAction[keyof ODataAction]> = (state, action) => {
    switch (action.type) {
        case DELETE: return state;
        case GET: return state;
        case PATCH: return state;
        case POST: return state;
        case PUT: return state;
        default: return state;
    }
};

export default reduceOData;