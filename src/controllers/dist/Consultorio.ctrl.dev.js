"use strict";

var _Consultorio = _interopRequireDefault(require("../models/Consultorio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.crear = function _callee(req, res) {
  var nuevoConsultorio, ConsultorioGuardado;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (req.body.nombreConsultorio) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            ok: false,
            msg: "Nombre de Consultorio es requerido!"
          }));

        case 3:
          nuevoConsultorio = new _Consultorio["default"]({
            nombreConsultorio: req.body.nombreConsultorio,
            equipo: req.body.equipo,
            especialidad: req.body.especialidad
          });
          _context.next = 6;
          return regeneratorRuntime.awrap(nuevoConsultorio.save());

        case 6:
          ConsultorioGuardado = _context.sent;
          console.log("[>] Consultorio.js, crear", ConsultorioGuardado);
          return _context.abrupt("return", res.status(200).json({
            ok: true,
            msg: "Consultorio registrado exitosamente!",
            consultorio: ConsultorioGuardado
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!",
            error: _context.t0
          });
          console.log("[>] Consultorio.js, crear", _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

ctrl.obtener = function _callee2(req, res) {
  var consultorios;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Consultorio["default"].find());

        case 3:
          consultorios = _context2.sent;
          res.status(200).json({
            ok: true,
            consultorios: consultorios
          });
          console.log("[>] Consultorio.ctrl, obtener: ", consultorios);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se pudo obtener los consultorios!",
            error: _context2.t0
          });
          console.log("[>] Consultorio.ctrl, obtener: ", _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.obtenerPorId = function _callee3(req, res) {
  var consultorio;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Consultorio["default"].findOne({
            _id: req.params.id
          }));

        case 3:
          consultorio = _context3.sent;
          console.log("[>] Consultorio.ctrl, obtenerPorId: ", consultorio);
          return _context3.abrupt("return", res.status(200).json({
            ok: true,
            consultorio: consultorio
          }));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "El consultorio con el id, ".concat(req.params.id, " no fue encontrado"),
            error: _context3.t0
          });
          console.log("[>] Consultorio.ctrl, obtenerPorId: ", _context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.actualizar = function _callee4(req, res) {
  var consultorio, consultorioActualizado;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Consultorio["default"].findById(req.params.id));

        case 3:
          consultorio = _context4.sent;

          if (!(consultorio === null || consultorio === undefined)) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            ok: false,
            msg: "El consultorio con el id, '".concat(req.params.id, "' no fue encontrado")
          }));

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(_Consultorio["default"].findByIdAndUpdate(req.params.id, {
            nombreConsultorio: req.body.nombreConsultorio,
            equipo: req.body.equipo,
            especialidad: req.body.especialidad
          }, {
            "new": true
          }));

        case 8:
          consultorioActualizado = _context4.sent;
          console.log("[>] Consultorio.ctrl, actualizar: ", consultorioActualizado);
          return _context4.abrupt("return", res.status(200).json({
            ok: true,
            consultorioActualizado: consultorioActualizado,
            msg: 'Consultorio actualizado exitosamente!'
          }));

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se envi\xF3 ning\xFAn payload para actualizar",
            error: _context4.t0
          });
          console.log("[>] Consultorio.ctrl, actualizar: ", _context4.t0);

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

ctrl.eliminar = function _callee5(req, res) {
  var consultorio;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Consultorio["default"].findByIdAndDelete(req.params.id));

        case 3:
          consultorio = _context5.sent;
          res.status(200).json({
            ok: true,
            msg: "Consultorio '".concat(consultorio.nombreConsultorio, "' eliminado correctamente! ")
          });
          console.log("[>] Consultorio.ctrl, eliminar: ", consultorio);
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Consultorio no encontrado!",
            error: _context5.t0
          });
          console.log("[>] Consultorio.ctrl, eliminar: ", _context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = ctrl;