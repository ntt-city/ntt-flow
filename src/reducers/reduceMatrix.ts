import { Reducer } from './Reducer';

const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';
const PRODUCT = 'GEOMETRIC_PRODUCT';
const REFLECTION = 'GEOMETRIC_REFLECTION';
const ROTATION = 'GEOMETRIC_ROTATION';
const TRANSLATION = 'GEOMETRIC_TRANSLATION';

export const matrixActions = {
    DECREMENT,
    INCREMENT,
    PRODUCT,
    REFLECTION,
    ROTATION,
    TRANSLATION
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