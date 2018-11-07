define(["require", "exports", "immutable"], function (require, exports, immutable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (function (root, keyPath, value) {
        if (immutable_1.Map.isMap(root)) {
            return root.updateIn(keyPath, value);
        }
    });
});
//# sourceMappingURL=updateIn.js.map