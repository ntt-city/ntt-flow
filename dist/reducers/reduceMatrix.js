define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DECREMENT = 'DECREMENT';
    var INCREMENT = 'INCREMENT';
    var PRODUCT = 'GEOMETRIC_PRODUCT';
    var REFLECTION = 'GEOMETRIC_REFLECTION';
    var ROTATION = 'GEOMETRIC_ROTATION';
    var TRANSLATION = 'GEOMETRIC_TRANSLATION';
    exports.matrixActions = {
        DECREMENT: DECREMENT,
        INCREMENT: INCREMENT,
        PRODUCT: PRODUCT,
        REFLECTION: REFLECTION,
        ROTATION: ROTATION,
        TRANSLATION: TRANSLATION
    };
    var reduceMatrix = function (matrix, action) {
        switch (action.type) {
            default: return matrix;
        }
    };
    exports.default = reduceMatrix;
});
//# sourceMappingURL=reduceMatrix.js.map