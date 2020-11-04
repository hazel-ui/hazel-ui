"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processColumns = void 0;
var react_1 = __importDefault(require("react"));
function processColumns(columns, data) {
    var columnIndex = 0;
    for (var td in data[0]) {
        if (typeof data[0][td] === "number" && !("Cell" in columns[columnIndex])) {
            columns[columnIndex]["Cell"] = function (props) { return (react_1.default.createElement(react_1.default.Fragment, null, props.value.toLocaleString("en-IN"))); };
        }
        columnIndex++;
    }
    return columns;
}
exports.processColumns = processColumns;
