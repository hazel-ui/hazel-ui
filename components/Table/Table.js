"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var react_1 = __importDefault(require("react"));
var react_table_1 = require("react-table");
var Icon_1 = require("../../foundation/Icon");
var styles_1 = require("./styles");
var utils_1 = require("./utils");
function Table(props) {
    var data = react_1.default.useMemo(function () { return props.data; }, [props.data]);
    var columns = react_1.default.useMemo(function () { return utils_1.processColumns(props.columns, props.data); }, [props.columns, props.data]);
    var _a = react_table_1.useTable({ columns: columns, data: data, disableSortBy: !props.enableSorting }, react_table_1.useSortBy, react_table_1.useExpanded), getTableProps = _a.getTableProps, getTableBodyProps = _a.getTableBodyProps, headerGroups = _a.headerGroups, rows = _a.rows, prepareRow = _a.prepareRow;
    return (react_1.default.createElement(styles_1.TableContainer, __assign({}, getTableProps()),
        !props.hideHeaders && (react_1.default.createElement("thead", null, headerGroups.map(function (headerGroup) { return (react_1.default.createElement(styles_1.TrHead, __assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) { return (react_1.default.createElement(styles_1.Th, __assign({}, column.getHeaderProps(column.getSortByToggleProps())),
            column.render("Header"),
            react_1.default.createElement("span", null, props.enableSorting ? (column.isSorted ? (column.isSortedDesc ? (react_1.default.createElement(Icon_1.Icon.ArrowDown, { height: "1rem", width: "1rem" })) : (react_1.default.createElement(Icon_1.Icon.ArrowUp, { height: "1rem", width: "1rem" }))) : (react_1.default.createElement(Icon_1.Icon.Sort, { height: "1rem" }))) : null))); }))); }))),
        react_1.default.createElement("tbody", __assign({}, getTableBodyProps()), rows.map(function (row) {
            prepareRow(row);
            return (react_1.default.createElement(styles_1.Tr, __assign({}, row.getRowProps()), row.cells.map(function (cell) {
                return (react_1.default.createElement(styles_1.Td, __assign({}, cell.getCellProps()), cell.render("Cell")));
            })));
        }))));
}
exports.Table = Table;
Table.defaultProps = { enableSorting: false, hideHeaders: false };
