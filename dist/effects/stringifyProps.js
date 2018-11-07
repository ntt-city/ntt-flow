define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function stringifyProps(obj) {
        var result = {};
        for (var prop in obj) {
            result[prop] = String(obj[prop]);
        }
        return result;
    }
    exports.default = stringifyProps;
});
//# sourceMappingURL=stringifyProps.js.map