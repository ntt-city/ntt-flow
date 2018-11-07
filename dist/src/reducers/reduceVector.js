define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DECREMENT = 'DECREMENT';
    var INCREMENT = 'INCREMENT';
    exports.vectorActions = {
        DECREMENT: DECREMENT,
        INCREMENT: INCREMENT
    };
    var reduceVector = function (vector, action) {
        switch (action.type) {
            default: return vector;
        }
    };
    exports.default = reduceVector;
});
//# sourceMappingURL=reduceVector.js.map