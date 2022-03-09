"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usuarioSchema = new _mongoose.Schema({
  nombreUsuario: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Rol"
  }
}, {
  versionKey: false
});

usuarioSchema.statics.encryptPassword = function _callee(password) {
  var salt;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_bcryptjs["default"].genSalt(10));

        case 2:
          salt = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(password, salt));

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

usuarioSchema.statics.comparePassword = function _callee2(password, receivedPassword) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(password, receivedPassword));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var _default = (0, _mongoose.model)('Usuario', usuarioSchema);

exports["default"] = _default;