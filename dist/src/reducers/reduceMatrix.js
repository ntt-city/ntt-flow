define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DECREMENT = 'DECREMENT';
    var INCREMENT = 'INCREMENT';
    exports.matrixActions = {
        DECREMENT: DECREMENT,
        INCREMENT: INCREMENT
    };
    var reduceMatrix = function (matrix, action) {
        switch (action.type) {
            default: return matrix;
        }
    };
    exports.default = reduceMatrix;
});
//# sourceMappingURL=reduceMatrix.js.map