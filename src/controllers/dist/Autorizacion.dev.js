"use strict";

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.iniciarSesion = function _callee(req, res) {
  var usuarioEncontrado, matchPassword, token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_Usuario["default"].findOne({
            nombreUsuario: req.body.nombreUsuario
          }).populate("rol"));

        case 3:
          usuarioEncontrado = _context.sent;

          if (usuarioEncontrado) {
            _context.next = 6;
            break;
          }

          throw Error(JSON.stringify({
            msg: 'Nombre de usuario no existe!'
          }));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(_Usuario["default"].comparePassword(req.body.password, usuarioEncontrado.password));

        case 8:
          matchPassword = _context.sent;

          if (matchPassword) {
            _context.next = 13;
            break;
          }

          throw Error(JSON.stringify({
            msg: 'Contraseña incorrecta!'
          }));

        case 13:
          //crando token
          token = _jsonwebtoken["default"].sign({
            id: usuarioEncontrado._id,
            rol: usuarioEncontrado.rol
          }, _config["default"].SECRET, {
            expiresIn: 86400
          });
          res.status(200).json({
            ok: true,
            msg: "Bienvenido(a) al sistema, ".concat(usuarioEncontrado.nombreUsuario, "!"),
            rol: usuarioEncontrado.rol,
            idUsuario: usuarioEncontrado._id,
            token: token
          });

        case 15:
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          res.status(500).json(JSON.parse(_context.t0.message).msg);
          console.error("[>] Autorizacion.js, iniciarSesion: ", JSON.parse(_context.t0.message).msg);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
};

ctrl.cerrarSesion = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.status(200).json({
            ok: true,
            msg: "Has cerrado sesión!",
            token: ""
          });
          console.log("[>] Autorizacion.js, cerrarSesion: ");

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = ctrl;