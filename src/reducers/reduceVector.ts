import { Reducer } from './Reducer';

const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

export const vectorActions = {
    DECREMENT,
    INCREMENT
};

// https://vincent.billey.me/pure-javascript-immutable-array/
interface VectorAction {
    DECREMENT: {
        amount?: number;
        type: typeof DECREMENT;
    };
    INCREMENT: {
        amount?: number;
        type: typeof INCREMENT;
    };
}

const reduceVector: Reducer<Vector> = (
    vector: Vector,
    action: VectorAction[keyof VectorAction]
) => {
    switch (action.type) {
        //case DECREMENT: return vector - (action.amount || 1);
        //case INCREMENT: return vector + (action.amount || 1);
        default: return vector;
    }
};

export default reduceVector;