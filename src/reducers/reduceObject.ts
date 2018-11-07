import { Reducer } from './Reducer';

const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

export const objectActions = {
    DECREMENT,
    INCREMENT
};

// https://vincent.billey.me/pure-javascript-immutable-array/
interface ObjectAction {
    DECREMENT: {
        amount?: number;
        type: typeof DECREMENT;
    };
    INCREMENT: {
        amount?: number;
        type: typeof INCREMENT;
    };
}

const reduceObject: Reducer<Object> = (
    object: Object,
    action: ObjectAction[keyof ObjectAction]
) => {
    switch (action.type) {
        // case DECREMENT: return object - (action.amount || 1);
        // case INCREMENT: return object + (action.amount || 1);
        default: return object;
    }
};

export default reduceObject;