"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const ink_1 = require("ink");
const ink_gradient_1 = tslib_1.__importDefault(require("ink-gradient"));
const ink_big_text_1 = tslib_1.__importDefault(require("ink-big-text"));
const yellow = '#ffff00';
const hammer = `
            ^^^ 
          (     )
           |   |
           |   |
      ______________
      / / |     | \\ \\
     / /  |     |  \\ \\
    / /   |     |   \\ \\
    \\ \\   |     |   / /
     \\ \\  |     |  / /
      ( ) |     | ( )
         _________
       |           |
       | _________ |
       | |       | |
       | |       | |
       (_)       (_)
`;
exports.Body = () => {
    const [text, setText] = react_1.useState('STOP!');
    const [art, setArt] = react_1.useState(' ');
    const [tranlate, setTranslate] = react_1.useState(0);
    react_1.useEffect(() => {
        setTimeout(() => {
            setText((prevText) => `${prevText}\nHammer\nTime`);
        }, 1000);
        setTimeout(() => {
            setArt(hammer);
        }, 1700);
        setTimeout(() => {
            setInterval(() => {
                setTranslate((prevValue) => prevValue + 1);
            }, 100);
        }, 2000);
        return () => {
            clearInterval(tranlate);
        };
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_gradient_1.default, { colors: [yellow, yellow] },
            react_1.default.createElement(ink_big_text_1.default, { text: text })),
        react_1.default.createElement(ink_1.Box, { marginLeft: tranlate }, art)));
};
