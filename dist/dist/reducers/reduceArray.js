"use strict";
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ADD = 'ADD';
    var APPEND = 'APPEND';
    var CLEAR = 'CLEAR';
    var POP = 'POP';
    var PUSH = 'PUSH';
    var REMOVE = 'REMOVE';
    var REVERSE = 'REVERSE';
    var SHIFT = 'SHIFT';
    var SORT = 'SORT';
    var SPLICE = 'SPLICE';
    var UNSHIFT = 'UNSHIFT';
    exports.arrayActions = {
        ADD: ADD,
        APPEND: APPEND,
        CLEAR: CLEAR,
        POP: POP,
        PUSH: PUSH,
        REMOVE: REMOVE,
        REVERSE: REVERSE,
        SHIFT: SHIFT,
        SORT: SORT,
        SPLICE: SPLICE,
        UNSHIFT: UNSHIFT
    };
    var reduceArray = function (arr, action) {
        switch (action.type) {
            case ADD: return arr.concat([action.newEntry]);
            case APPEND: return [action.newEntry].concat(arr);
            case CLEAR: return [];
            case POP: return arr.slice(0, -1);
            case PUSH: return arr.concat([action.newEntry]);
            case REMOVE: return arr.slice(0, action.index).concat(arr.slice(action.index + 1));
            case REVERSE: return arr.slice().reverse();
            case SHIFT: return arr.slice(1);
            case SORT: return arr.slice().sort(action.compareFn);
            case SPLICE: return arr.slice(0, action.start).concat(action.items, arr.slice(action.start + action.deleteCount));
            case UNSHIFT: return [action.newEntry].concat(arr);
            default: return arr;
        }
    };
    exports.default = reduceArray;
});
//# sourceMappingURL=reduceArray.js.map