define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SET = 'SET';
    var SET_IN = 'SET_IN';
    var UPDATE = 'UPDATE';
    var UPDATE_IN = 'UPDATE_IN';
    exports.listActions = {
        SET: SET,
        SET_IN: SET_IN,
        UPDATE: UPDATE,
        UPDATE_IN: UPDATE_IN
    };
    var reduceList = function (list, action) {
        switch (action.type) {
            case SET: return list.set(action.key, action.value);
            case SET_IN: return list.setIn(action.keyPath, action.value);
            case UPDATE: return list.update(action.key, action.value);
            case UPDATE_IN: return list.updateIn(action.keyPath, action.value);
            default: return list;
        }
    };
    exports.default = reduceList;
});
//# sourceMappingURL=reduceList.js.map