import { Reducer } from './Reducer';

const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

export const stringActions = {
    DECREMENT,
    INCREMENT
};

// https://vincent.billey.me/pure-javascript-immutable-array/
interface StringAction {
    DECREMENT: {
        amount?: number;
        type: typeof DECREMENT;
    };
    INCREMENT: {
        amount?: number;
        type: typeof INCREMENT;
    };
}

const reduceString: Reducer<string> = (
    string: string,
    action: StringAction[keyof StringAction]
) => {
    switch (action.type) {
        // case DECREMENT: return string - (action.amount || 1);
        // case INCREMENT: return string + (action.amount || 1);
        default: return string;
    }
};

export default reduceString;