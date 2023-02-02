"use strict";

var _react = _interopRequireDefault(require("react"));
require("react-dom");
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
hydrateRoot(document.getElementById("root"), /*#__PURE__*/_react["default"].createElement(_app["default"], {
  initialValue: 10
}));