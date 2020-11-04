"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@testing-library/dom");
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var Badge_1 = require("../Badge");
describe("<Badge>", function () {
    test("Renders Badge tag with children text", function () {
        react_1.render(react_2.default.createElement(Badge_1.Badge, null, "some text"));
        expect(dom_1.screen.getByText(/some text/i)).toBeInTheDocument();
    });
});
