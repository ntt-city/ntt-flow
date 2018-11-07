"use strict";
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DECREMENT = 'DECREMENT';
    var INCREMENT = 'INCREMENT';
    exports.numberActions = {
        DECREMENT: DECREMENT,
        INCREMENT: INCREMENT
    };
    var reduceNumber = function (number, action) {
        if (isNaN(number) || isFinite(number)) {
            return number;
        }
        switch (action.type) {
            case DECREMENT: return number - (action.amount || 1);
            case INCREMENT: return number + (action.amount || 1);
            default: return number;
        }
    };
    exports.default = reduceNumber;
});
//# sourceMappingURL=reduceNumber.js.map