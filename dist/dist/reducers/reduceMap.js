"use strict";
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SET = 'SET';
    var SET_IN = 'SET_IN';
    var UPDATE = 'UPDATE';
    var UPDATE_IN = 'UPDATE_IN';
    exports.mapActions = {
        SET: SET,
        SET_IN: SET_IN,
        UPDATE: UPDATE,
        UPDATE_IN: UPDATE_IN
    };
    var reduceMap = function (map, action) {
        switch (action.type) {
            case SET: return map.set(action.key, action.value);
            case SET_IN: return map.setIn(action.keyPath, action.value);
            case UPDATE: return map.update(action.key, action.value);
            case UPDATE_IN: return map.updateIn(action.keyPath, action.value);
            default: return map;
        }
    };
    exports.default = reduceMap;
});
//# sourceMappingURL=reduceCursor.js.map