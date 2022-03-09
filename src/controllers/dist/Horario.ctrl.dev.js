"use strict";

var _Horario = _interopRequireDefault(require("../models/Horario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.crear = function _callee(req, res) {
  var nuevoHorario, horarioGuardado;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!(!req.body.turno && !req.body.horarioInicial && !req.body.horarioFinal && !req.body.doctor && !req.body.consultorio)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            ok: false,
            msg: "Todos los campos son requeridos!"
          }));

        case 3:
          nuevoHorario = new _Horario["default"]({
            turno: req.body.turno,
            horarioInicial: req.body.horarioInicial,
            horarioFinal: req.body.horarioFinal,
            doctor: req.body.doctor,
            consultorio: req.body.consultorio
          });
          _context.next = 6;
          return regeneratorRuntime.awrap(nuevoHorario.save());

        case 6:
          horarioGuardado = _context.sent;
          console.log("[>] Horario.js, crear", horarioGuardado);
          return _context.abrupt("return", res.status(200).json({
            ok: true,
            msg: "Horario creado exitosamente!",
            horarioGuardado: horarioGuardado
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!",
            error: _context.t0
          });
          console.log("[>] Horario.js, crear", _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

ctrl.obtener = function _callee2(req, res) {
  var horarios;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Horario["default"].find().populate('doctor consultorio'));

        case 3:
          horarios = _context2.sent;
          res.status(200).json({
            ok: true,
            horarios: horarios
          });
          console.log("[>] Horario.ctrl, obtener: ", horarios);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se pudo obtener los Horarios!",
            error: _context2.t0
          });
          console.log("[>] Horario.ctrl, obtener: ", _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.obtenerPorId = function _callee3(req, res) {
  var horario;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Horario["default"].findById({
            _id: req.params.id
          }).populate('doctor consultorio'));

        case 3:
          horario = _context3.sent;
          console.log("[>] Horario.ctrl, obtenerPorId: ", horario);
          return _context3.abrupt("return", res.status(200).json({
            ok: true,
            horario: horario
          }));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "El horario no fue encontrada",
            error: _context3.t0
          });
          console.log("[>] Horario.ctrl, obtenerPorId: ", _context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.actualizar = function _callee4(req, res) {
  var horarioActualizado;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Horario["default"].findByIdAndUpdate(req.params.id, {
            turno: req.body.turno,
            horarioInicial: req.body.horarioInicial,
            horarioFinal: req.body.horarioFinal,
            doctor: req.body.doctor,
            consultorio: req.body.consultorio
          }, {
            "new": true
          }));

        case 3:
          horarioActualizado = _context4.sent;
          console.log("[>] Horario.ctrl, actualizar: ", horarioActualizado);
          return _context4.abrupt("return", res.status(200).json({
            ok: true,
            horarioActualizado: horarioActualizado,
            msg: 'Horario actualizado exitosamente!'
          }));

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Horario no encontrado",
            error: _context4.t0
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.eliminar = function _callee5(req, res) {
  var horario;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Horario["default"].findByIdAndDelete(req.params.id));

        case 3:
          horario = _context5.sent;
          res.status(200).json({
            ok: true,
            msg: "Horario eliminado correctamente! "
          });
          console.log("[>] Horario.ctrl, eliminar: ", horario);
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Horario no encontrado!",
            error: _context5.t0
          });
          console.log("[>] Horario.ctrl, eliminar: ", _context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = ctrl;