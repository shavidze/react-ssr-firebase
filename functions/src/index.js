"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _client.hydrateRoot)(document.getElementById("root"), /*#__PURE__*/_react["default"].createElement(_app["default"], null));