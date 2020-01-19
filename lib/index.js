"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const ink_1 = require("ink");
const components_1 = require("./components");
const App = () => react_1.default.createElement(components_1.Body, null);
ink_1.render(react_1.default.createElement(App, null));
