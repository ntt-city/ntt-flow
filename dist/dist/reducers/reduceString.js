"use strict";
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DECREMENT = 'DECREMENT';
    var INCREMENT = 'INCREMENT';
    exports.stringActions = {
        DECREMENT: DECREMENT,
        INCREMENT: INCREMENT
    };
    var reduceString = function (string, action) {
        switch (action.type) {
            default: return string;
        }
    };
    exports.default = reduceString;
});
//# sourceMappingURL=reduceString.js.map