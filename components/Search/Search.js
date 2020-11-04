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
exports.Search = void 0;
var react_1 = __importDefault(require("react"));
var react_select_1 = __importDefault(require("react-select"));
var CustomComponents_1 = require("./CustomComponents");
var styles_1 = require("./styles");
function Search(props) {
    return (react_1.default.createElement(react_select_1.default, { options: props.options, onChange: function (event) {
            props.onChange(event);
        }, components: {
            ClearIndicator: CustomComponents_1.ClearIndicator,
            Control: CustomComponents_1.Control,
            IndicatorsContainer: CustomComponents_1.IndicatorsContainer,
            NoOptionsMessage: CustomComponents_1.NoOptionsMessage,
            Option: CustomComponents_1.Option,
        }, autoFocus: false, backspaceRemovesValue: true, hideSelectedOptions: true, isLoading: false, isSearchable: true, isClearable: true, captureMenuScroll: false, placeholder: "", theme: function (theme) { return (__assign(__assign({}, theme), { borderRadius: 0, colors: __assign(__assign({}, theme.colors), { primary25: "crimson", primary: "white" }) })); }, styles: {
            control: styles_1.controlStyles,
            menuList: styles_1.menuListStyles,
            option: styles_1.optionStyles,
            placeholder: function (base, state) { return (__assign(__assign({}, base), { fontFamily: "sans-serif", fontStyle: "italic", position: "absolute", transition: "top 0.1s, font-size 0.1s", color: state.isFocused || state.hasValue || state.selectProps.inputValue
                    ? "red"
                    : "blue", top: state.isFocused || state.hasValue || state.selectProps.inputValue
                    ? -3
                    : "50%", fontSize: state.isFocused || state.hasValue || state.selectProps.inputValue
                    ? "0.5rem"
                    : "1rem" })); },
            container: function (defaultStyles) { return (__assign(__assign({}, defaultStyles), { border: "none" })); },
            dropdownIndicator: function (base) { return (__assign({}, base)); },
        } }));
}
exports.Search = Search;
