"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "divide", {
  enumerable: true,
  get: function get() {
    return _divide["default"];
  }
});
Object.defineProperty(exports, "plus", {
  enumerable: true,
  get: function get() {
    return _plus["default"];
  }
});
Object.defineProperty(exports, "sub", {
  enumerable: true,
  get: function get() {
    return _sub["default"];
  }
});
Object.defineProperty(exports, "times", {
  enumerable: true,
  get: function get() {
    return _times["default"];
  }
});
var _divide = _interopRequireDefault(require("./calc/divide"));
var _sub = _interopRequireDefault(require("./calc/sub"));
var _times = _interopRequireDefault(require("./calc/times"));
var _plus = _interopRequireDefault(require("./calc/plus"));