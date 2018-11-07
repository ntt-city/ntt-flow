define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DECREMENT = 'DECREMENT';
    var INCREMENT = 'INCREMENT';
    exports.objectActions = {
        DECREMENT: DECREMENT,
        INCREMENT: INCREMENT
    };
    var reduceObject = function (object, action) {
        switch (action.type) {
            default: return object;
        }
    };
    exports.default = reduceObject;
});
//# sourceMappingURL=reduceObject.js.map