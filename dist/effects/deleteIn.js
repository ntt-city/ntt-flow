define(["require", "exports", "immutable"], function (require, exports, immutable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (function (root, keyPath) {
        if (immutable_1.Map.isMap(root)) {
            return root.deleteIn(keyPath);
        }
    });
});
//# sourceMappingURL=deleteIn.js.map