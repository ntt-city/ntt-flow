define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DELETE_IN = 'DELETE_IN';
    var REMOVE_IN = 'REMOVE_IN';
    var SET = 'SET';
    var SET_IN = 'SET_IN';
    var UPDATE = 'UPDATE';
    var UPDATE_IN = 'UPDATE_IN';
    exports.cursorActions = {
        DELETE_IN: DELETE_IN,
        REMOVE_IN: REMOVE_IN,
        SET: SET,
        SET_IN: SET_IN,
        UPDATE: UPDATE,
        UPDATE_IN: UPDATE_IN
    };
    var reduceCursor = function (cursor, action) {
        switch (action.type) {
            case DELETE_IN: return cursor.deleteIn(action.keyPath, action.value);
            case REMOVE_IN: return cursor.deleteIn(action.keyPath, action.value);
            case SET: return cursor.set(action.key, action.value);
            case SET_IN: return cursor.setIn(action.keyPath, action.value);
            case UPDATE: return cursor.update(action.key, action.value);
            case UPDATE_IN: return cursor.updateIn(action.keyPath, action.value);
            default: return cursor;
        }
    };
    exports.default = reduceCursor;
});
//# sourceMappingURL=reduceCursor.js.map