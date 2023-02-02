"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrReact = void 0;
var functions = _interopRequireWildcard(require("firebase-functions"));
var _react = _interopRequireDefault(require("react"));
var _server = require("react-dom/server");
var _app = _interopRequireDefault(require("./src/app"));
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var app = (0, _express.default)();
var index = _fs.default.readFileSync(_path.default.resolve(__dirname, "..") + "/public/index.html", "utf-8");
app.use("^/$", function (req, res, next) {
  var html = "".concat((0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_app.default, null)));
  var replacedHTML = index.replace("<div id=\"root\"></div>", "<div id=\"root\">".concat(html, "</div>"));
  res.set("Cache-Control", "public max-age=600, s-maxage=1200");
  return res.send(replacedHTML);
});
var ssrReact = functions.https.onRequest(app);
exports.ssrReact = ssrReact;