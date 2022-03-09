"use strict";

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.crear = function _callee(req, res) {
  var _req$body, nombreUsuario, password, rol, rolObject, nuevoUsuario, usuarioGuardado;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nombreUsuario = _req$body.nombreUsuario, password = _req$body.password, rol = _req$body.rol;
          _context.next = 4;
          return regeneratorRuntime.awrap(_Rol["default"].findOne({
            nombreRol: rol
          }));

        case 4:
          rolObject = _context.sent;
          _context.t0 = _Usuario["default"];
          _context.t1 = nombreUsuario;
          _context.next = 9;
          return regeneratorRuntime.awrap(_Usuario["default"].encryptPassword(password));

        case 9:
          _context.t2 = _context.sent;
          _context.t3 = rolObject._id;
          _context.t4 = {
            nombreUsuario: _context.t1,
            password: _context.t2,
            rol: _context.t3
          };
          nuevoUsuario = new _context.t0(_context.t4);
          _context.next = 15;
          return regeneratorRuntime.awrap(nuevoUsuario.save());

        case 15:
          usuarioGuardado = _context.sent;
          console.log("[>] Usuario.ctrl, crear: ", usuarioGuardado);
          res.status(200).json({
            ok: true,
            msg: "Usuario creado exitosamente!"
          });
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t5 = _context["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!"
          });
          console.log("[>] Usuario.ctrl, crear: ", _context.t5);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 20]]);
};

ctrl.obtener = function _callee2(req, res) {
  var usuarios;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Usuario["default"].find().populate('rol'));

        case 3:
          usuarios = _context2.sent;
          res.status(200).json({
            ok: true,
            usuarios: usuarios
          });
          console.log("[>] Usuario.ctrl, obtener: ", usuarios);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!"
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.obtenerPorId = function _callee3(req, res) {
  var _usuario;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Usuario["default"].findOne({
            _id: req.params.id
          }));

        case 3:
          _usuario = _context3.sent;
          res.status(200).json({
            ok: true,
            usuario: _usuario
          });
          console.log("[>] Usuario.ctrl, obtenerPorId: ", _usuario);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!"
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.actualizar = function _callee4(req, res) {
  var rolObject, bodyActualizar, usuarioActualizado;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Rol["default"].findOne({
            nombreRol: req.body.rol
          }));

        case 3:
          rolObject = _context4.sent;
          _context4.t0 = req.body.nombreUsuario;
          _context4.next = 7;
          return regeneratorRuntime.awrap(_Usuario["default"].encryptPassword(req.body.password));

        case 7:
          _context4.t1 = _context4.sent;
          _context4.t2 = rolObject._id;
          bodyActualizar = {
            nombreUsuario: _context4.t0,
            password: _context4.t1,
            rol: _context4.t2
          };
          _context4.next = 12;
          return regeneratorRuntime.awrap(_Usuario["default"].findByIdAndUpdate(req.params.id, bodyActualizar, {
            "new": true
          }));

        case 12:
          usuarioActualizado = _context4.sent;
          res.status(200).json({
            ok: true,
            usuarioActualizado: usuarioActualizado,
            msg: "Usuario actualizado exitosamente!"
          });
          console.log("[>] Usuario.ctrl, actualizar: ", usuarioActualizado);
          _context4.next = 20;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t3 = _context4["catch"](0);
          res.status(200).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!",
            error: _context4.t3
          });

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 17]]);
};

ctrl.eliminar = function _callee5(req, res) {
  var _usuario2;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Usuario["default"].findByIdAndDelete(req.params.id));

        case 3:
          _usuario2 = _context5.sent;
          res.status(200).json({
            ok: true,
            msg: "Usuario '".concat(_usuario2.nombreUsuario, "' eliminado correctamente! ")
          });
          console.log("[>] Usuario.ctrl, eliminar: ", _usuario2);
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Usuario '".concat(usuario.nombreUsuario, "' no encontrado! "),
            error: _context5.t0
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = ctrl;