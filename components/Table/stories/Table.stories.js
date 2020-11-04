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
exports.ExpandableRows = exports.CustomCells = exports.Basic = void 0;
var react_1 = __importDefault(require("react"));
var Table_1 = require("../Table");
var notes_md_1 = __importDefault(require("./notes.md"));
exports.default = {
    title: "Atoms/Table",
    component: Table_1.Table,
    parameters: {
        componentSubtitle: "This component can be used to render a <table> element to display a data table. Optionally, column headers can be hidden and sorting can enabled for each column individually. The render function for each column can be customized and every row can be made expandable to provide additional data.",
        notes: { notes: notes_md_1.default },
    },
};
var Template = function (args) { return react_1.default.createElement(Table_1.Table, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    columns: [
        {
            Header: "Title",
            accessor: "col0",
        },
        {
            Header: "Header 1",
            accessor: "col1",
        },
        {
            Header: "Header 2",
            accessor: "col2",
        },
        {
            Header: "Header 3",
            accessor: "col3",
        },
        {
            Header: "Header 4",
            accessor: "col4",
        },
        {
            Header: "Header 5",
            accessor: "col5",
        },
    ],
    data: [
        {
            col0: "Label 1",
            col1: 0.1,
            col2: 1.2,
            col3: 2.3,
            col4: 3.4,
            col5: 4.5,
        },
        {
            col0: "Label 2",
            col1: 11.22,
            col2: 922.3345,
            col3: 22.33,
            col4: 22.335,
            col5: 123456.33,
        },
    ],
};
exports.CustomCells = Template.bind({});
exports.CustomCells.args = {
    columns: [
        {
            Header: "Title",
            accessor: "col0",
        },
        {
            Header: "Header 1",
            accessor: "col1",
            Cell: function (props) { return react_1.default.createElement(react_1.default.Fragment, null,
                "$ ",
                props.value); },
        },
    ],
    data: [
        {
            col0: "Label 1",
            col1: 30.1,
        },
        {
            col0: "Label 2",
            col1: 20,
        },
    ],
};
exports.ExpandableRows = Template.bind({});
exports.ExpandableRows.args = {
    columns: [
        {
            Header: "Column 1",
            accessor: "col1",
            Cell: function (props) {
                return props.row.canExpand ? (react_1.default.createElement("span", __assign({}, props.row.getToggleRowExpandedProps({
                    style: {},
                })),
                    props.row.isExpanded ? "👇" : "👉",
                    " \u00A0",
                    props.value)) : (react_1.default.createElement("span", { style: {
                        paddingLeft: props.row.depth * 2 + "rem",
                    } }, props.value));
            },
        },
        {
            Header: "Column 2",
            accessor: "col2",
        },
    ],
    data: [
        {
            col1: "Hello",
            col2: 30.1,
            subRows: [
                {
                    col1: "Jan",
                    col2: 5.2,
                },
                {
                    col1: "Feb",
                    col2: 6,
                },
            ],
        },
        {
            col1: "react-table",
            col2: 20,
            subRows: [
                {
                    col1: "Jan",
                    col2: 5,
                },
                {
                    col1: "Feb",
                    col2: 6,
                },
            ],
        },
        {
            col1: "whatever",
            col2: 100,
        },
    ],
};
