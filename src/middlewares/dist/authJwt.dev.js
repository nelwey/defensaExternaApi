"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.isModerador = exports.isSecretaria = exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var verifyToken = function verifyToken(req, res, next) {
  var token, decoded, usuario;
  return regeneratorRuntime.async(function verifyToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //verificar si hay token, la variable se llama token
          token = req.headers["token"];

          if (token) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(403).json({
            ok: false,
            msg: 'Token es requerido'
          }));

        case 4:
          //verificar si es token valido
          decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
          req.usuarioId = decoded.id;
          _context.next = 8;
          return regeneratorRuntime.awrap(_Usuario["default"].findById(req.usuarioId, {
            password: 0
          }));

        case 8:
          usuario = _context.sent;
          next();
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          res.status(401).json({
            ok: false,
            msg: "Token invalido"
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.verifyToken = verifyToken;

var isSecretaria = function isSecretaria(req, res, next) {
  var usuario, rol;
  return regeneratorRuntime.async(function isSecretaria$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Usuario["default"].findById(req.usuarioId));

        case 3:
          usuario = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(_Rol["default"].findById(usuario.rol));

        case 6:
          rol = _context2.sent;

          if (!(rol.nombreRol === "secretaria" || rol.nombreRol === "admin" || rol.nombreRol === "moderador")) {
            _context2.next = 10;
            break;
          }

          next();
          return _context2.abrupt("return");

        case 10:
          return _context2.abrupt("return", res.status(403).json({
            ok: false,
            msg: "Rol de secretaria es requerido!"
          }));

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.status(404).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!"
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.isSecretaria = isSecretaria;

var isModerador = function isModerador(req, res, next) {
  var usuario, rol;
  return regeneratorRuntime.async(function isModerador$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Usuario["default"].findById(req.usuarioId));

        case 3:
          usuario = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(_Rol["default"].findById(usuario.rol));

        case 6:
          rol = _context3.sent;

          if (!(rol.nombreRol === "admin" || rol.nombreRol === "moderador")) {
            _context3.next = 10;
            break;
          }

          next();
          return _context3.abrupt("return");

        case 10:
          return _context3.abrupt("return", res.status(403).json({
            ok: false,
            msg: "Rol de admin o moderador es requerido!"
          }));

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          res.status(404).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!"
          });

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.isModerador = isModerador;

var isAdmin = function isAdmin(req, res, next) {
  var usuario, rol;
  return regeneratorRuntime.async(function isAdmin$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Usuario["default"].findById(req.usuarioId));

        case 3:
          usuario = _context4.sent;
          _context4.next = 6;
          return regeneratorRuntime.awrap(_Rol["default"].findById(usuario.rol));

        case 6:
          rol = _context4.sent;

          if (!(rol.nombreRol === "admin")) {
            _context4.next = 10;
            break;
          }

          next();
          return _context4.abrupt("return");

        case 10:
          return _context4.abrupt("return", res.status(403).json({
            ok: false,
            msg: "Rol de admin es requerido!"
          }));

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.status(404).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!"
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.isAdmin = isAdmin;