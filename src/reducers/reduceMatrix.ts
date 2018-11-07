import { Reducer } from './Reducer';

const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

export const matrixActions = {
    DECREMENT,
    INCREMENT
};

// https://vincent.billey.me/pure-javascript-immutable-array/
interface MatrixAction {
    DECREMENT: {
        amount?: number;
        type: typeof DECREMENT;
    };
    INCREMENT: {
        amount?: number;
        type: typeof INCREMENT;
    };
}

const reduceMatrix: Reducer<Matrix> = (
    matrix: Matrix,
    action: MatrixAction[keyof MatrixAction]
) => {
    switch (action.type) {
        //case DECREMENT: return vector - (action.amount || 1);
        //case INCREMENT: return vector + (action.amount || 1);
        default: return matrix;
    }
};

export default reduceMatrix;