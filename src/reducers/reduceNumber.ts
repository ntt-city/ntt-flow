import { Reducer } from './Reducer';

const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

export const numberActions = {
    DECREMENT,
    INCREMENT
};

// https://vincent.billey.me/pure-javascript-immutable-array/
interface NumberAction {
    DECREMENT: {
        amount?: number;
        type: typeof DECREMENT;
    };
    INCREMENT: {
        amount?: number;
        type: typeof INCREMENT;
    };
}

const reduceNumber: Reducer<number> = (
    number: number,
    action: NumberAction[keyof NumberAction]
) => {
    if (isNaN(number) || isFinite(number)) {
        return number;
    }
    switch (action.type) {
        case DECREMENT: return number - (action.amount || 1);
        case INCREMENT: return number + (action.amount || 1);
        default: return number;
    }
};

export default reduceNumber;