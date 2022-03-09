"use strict";

var _Especialidad = _interopRequireDefault(require("../models/Especialidad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.crear = function _callee(req, res) {
  var nuevaEspecialidad, especialidadGuardada;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (req.body.nombreEspecialidad) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            ok: false,
            msg: "Nombre de Especialidad es requerido!"
          }));

        case 3:
          nuevaEspecialidad = new _Especialidad["default"]({
            nombreEspecialidad: req.body.nombreEspecialidad
          });
          _context.next = 6;
          return regeneratorRuntime.awrap(nuevaEspecialidad.save());

        case 6:
          especialidadGuardada = _context.sent;
          console.log("[>] Especialidad.js, crear", especialidadGuardada);
          return _context.abrupt("return", res.status(200).json({
            ok: true,
            msg: "Especialidad creada exitosamente!",
            especialidad: especialidadGuardada
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!",
            error: _context.t0
          });
          console.log("[>] Especialidad.js, crear", _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

ctrl.obtener = function _callee2(req, res) {
  var especialidades;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Especialidad["default"].find());

        case 3:
          especialidades = _context2.sent;
          res.status(200).json({
            ok: true,
            especialidades: especialidades
          });
          console.log("[>] Especialidad.ctrl, obtener: ", especialidades);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se pudo obtener las especialidades!",
            error: _context2.t0
          });
          console.log("[>] Especialidad.ctrl, obtener: ", _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.obtenerPorId = function _callee3(req, res) {
  var especialidad;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Especialidad["default"].findOne({
            _id: req.params.id
          }));

        case 3:
          especialidad = _context3.sent;
          console.log("[>] Especialidad.ctrl, obtenerPorId: ", especialidad);
          return _context3.abrupt("return", res.status(200).json({
            ok: true,
            especialidad: especialidad
          }));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "La especialidad con el id, ".concat(req.params.id, " no fue encontrada"),
            error: _context3.t0
          });
          console.log("[>] Especialidad.ctrl, obtenerPorId: ", _context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.actualizar = function _callee4(req, res) {
  var especialidad, especialidadActualizada;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Especialidad["default"].findById(req.params.id));

        case 3:
          especialidad = _context4.sent;

          if (!(especialidad === null || especialidad === undefined)) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            ok: false,
            msg: "La especialidad con el id, '".concat(req.params.id, "' no fue encontrada")
          }));

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(_Especialidad["default"].findByIdAndUpdate(req.params.id, {
            nombreEspecialidad: req.body.nombreEspecialidad
          }, {
            "new": true
          }));

        case 8:
          especialidadActualizada = _context4.sent;
          console.log("[>] Especialidad.ctrl, actualizar: ", especialidadActualizada);
          return _context4.abrupt("return", res.status(200).json({
            ok: true,
            especialidadActualizada: especialidadActualizada,
            msg: 'Especialidad actualizada exitosamente!'
          }));

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se envi\xF3 ning\xFAn payload para actualizar",
            error: _context4.t0
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

ctrl.eliminar = function _callee5(req, res) {
  var especialidad;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Especialidad["default"].findByIdAndDelete(req.params.id));

        case 3:
          especialidad = _context5.sent;
          res.status(200).json({
            ok: true,
            msg: "Especialidad '".concat(especialidad.nombreEspecialidad, "' eliminada correctamente! ")
          });
          console.log("[>] Especialidad.ctrl, eliminar: ", especialidad);
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Especialidad no encontrado!",
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