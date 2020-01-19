"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const ink_gradient_1 = tslib_1.__importDefault(require("ink-gradient"));
const ink_big_text_1 = tslib_1.__importDefault(require("ink-big-text"));
const yellow = '#ffff00';
exports.Header = () => {
    const [text, setText] = react_1.useState('STOP!');
    react_1.useEffect(() => {
        setTimeout(() => {
            setText((prevText) => `${prevText}
Hammer 
Time`);
        }, 1000);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_gradient_1.default, { colors: [yellow, yellow] },
            react_1.default.createElement(ink_big_text_1.default, { text: text })),
        react_1.default.createElement(ink_gradient_1.default, { colors: [yellow, yellow] },
            react_1.default.createElement(ink_big_text_1.default, { text: "ss" }))));
};
