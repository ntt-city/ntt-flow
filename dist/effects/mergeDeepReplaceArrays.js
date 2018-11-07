define(["require", "exports", "immutable"], function (require, exports, immutable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mergeDeepReplaceArrays(state, value) {
        var mergeArrays = function (data, basePath) {
            var next = data;
            data.forEach(function (v, k) {
                var path = basePath.concat([k]);
                if (immutable_1.List.isList(v)) {
                    state = state.setIn(path, v);
                    next = next.deleteIn(path);
                }
                else if (immutable_1.Map.isMap(v)) {
                    next = next.setIn(path, mergeArrays(v, path));
                }
            });
            return next;
        };
        var updatedData = mergeArrays(immutable_1.fromJS(value), []);
        return state.mergeDeep(updatedData);
    }
    exports.default = mergeDeepReplaceArrays;
});
//# sourceMappingURL=mergeDeepReplaceArrays.js.map