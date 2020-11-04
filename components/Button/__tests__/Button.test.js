"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@testing-library/dom");
require("@testing-library/jest-dom/extend-expect");
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var Button_1 = require("../Button");
describe("<Button>", function () {
    test("Renders button tag with children text", function () {
        react_1.render(react_2.default.createElement(Button_1.Button, null, "some text"));
        expect(dom_1.screen.getByRole("button")).toBeInTheDocument();
        expect(dom_1.screen.getByText(/some text/i)).toBeInTheDocument();
    });
});
