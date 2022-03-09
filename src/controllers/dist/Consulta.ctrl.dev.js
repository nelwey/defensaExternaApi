"use strict";

var _Consulta = _interopRequireDefault(require("../models/Consulta"));

var _Doctor = _interopRequireDefault(require("../models/Doctor"));

var _Paciente = _interopRequireDefault(require("../models/Paciente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.crear = function _callee(req, res) {
  var nuevaConsulta, consultaGuardada;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!(!req.body.horario || !req.body.paciente || !req.body.doctor || !req.body.usuario || !req.body.diagnostico || !req.body.fechaConsulta || !req.body.tipoConsulta)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            ok: false,
            msg: "Todos los campos son requeridos!"
          }));

        case 3:
          nuevaConsulta = new _Consulta["default"]({
            tipoConsulta: req.body.tipoConsulta,
            diagnostico: req.body.diagnostico,
            fechaConsulta: req.body.fechaConsulta,
            estado: req.body.estado,
            importe: req.body.importe,
            horario: req.body.horario,
            paciente: req.body.paciente,
            doctor: req.body.doctor,
            usuario: req.body.usuario
          });
          _context.next = 6;
          return regeneratorRuntime.awrap(nuevaConsulta.save());

        case 6:
          consultaGuardada = _context.sent;
          console.log("[>] Consulta.js, crear", consultaGuardada);
          return _context.abrupt("return", res.status(200).json({
            ok: true,
            msg: "Consulta creada exitosamente!",
            consultaGuardada: consultaGuardada
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!",
            error: _context.t0
          });
          console.log("[>] Consulta.js, crear", _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

ctrl.obtener = function _callee2(req, res) {
  var consultas;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Consulta["default"].find().populate('doctor horario paciente'));

        case 3:
          consultas = _context2.sent;
          res.status(200).json({
            ok: true,
            consultas: consultas
          });
          console.log("[>] Consulta.ctrl, obtener: ", consultas);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se pudo obtener las Consultas !",
            error: _context2.t0
          });
          console.log("[>] Consultas.ctrl, obtener: ", _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.obtenerPorDoctor = function _callee3(req, res) {
  var doctor, consultasDoctor;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Doctor["default"].findById({
            _id: req.params.id
          }));

        case 3:
          doctor = _context3.sent;

          if (!(doctor < 1)) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            ok: true,
            msg: "El doctor no se ha encontrado"
          }));

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(_Consulta["default"].find({
            doctor: doctor
          }));

        case 8:
          consultasDoctor = _context3.sent;

          if (!(consultasDoctor.length <= 0)) {
            _context3.next = 11;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            ok: true,
            msg: "El doctor aún no tiene consultas"
          }));

        case 11:
          return _context3.abrupt("return", res.status(200).json({
            ok: true,
            consultasDoctor: consultasDoctor
          }));

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se ha podido encontrar las consultas del doctor con id ".concat(req.params.id, "!"),
            error: _context3.t0
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

ctrl.obtenerPorPaciente = function _callee4(req, res) {
  var paciente, consultasPaciente;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Paciente["default"].findById({
            _id: req.params.id
          }));

        case 3:
          paciente = _context4.sent;

          if (!(paciente.length < 1)) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            ok: true,
            msg: "El doctor no se ha encontrado"
          }));

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(_Consulta["default"].find({
            paciente: paciente
          }));

        case 8:
          consultasPaciente = _context4.sent;

          if (!(consultasPaciente.length < 1)) {
            _context4.next = 11;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            ok: true,
            msg: "El doctor aún no tiene consultas"
          }));

        case 11:
          return _context4.abrupt("return", res.status(200).json({
            ok: true,
            consultasPaciente: consultasPaciente
          }));

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se ha podido encontrar las consultas del paciente con id ".concat(req.params.id, "!"),
            error: _context4.t0
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

ctrl.actualizar = function _callee5(req, res) {
  var consultaActualizada;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Consulta["default"].findByIdAndUpdate(req.params.id, {
            tipoConsulta: req.body.tipoConsulta,
            fechaConsulta: req.body.fechaConsulta,
            estado: req.body.estado,
            importe: req.body.importe,
            horario: req.body.horario,
            diagnostico: req.body.diagnostico,
            paciente: req.body.paciente,
            doctor: req.body.doctor,
            usuario: req.body.usuario
          }, {
            "new": true
          }));

        case 3:
          consultaActualizada = _context5.sent;
          console.log("[>] Horario.ctrl, actualizar: ", consultaActualizada);
          return _context5.abrupt("return", res.status(200).json({
            ok: true,
            consultaActualizada: consultaActualizada,
            msg: 'Consulta actualizado exitosamente!'
          }));

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Consulta no encontrada",
            error: _context5.t0
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.eliminar = function _callee6(req, res) {
  var consulta;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_Consulta["default"].findByIdAndDelete(req.params.id));

        case 3:
          consulta = _context6.sent;
          res.status(200).json({
            ok: true,
            msg: "Consulta eliminado correctamente! "
          });
          console.log("[>] Horario.ctrl, eliminar: ", consulta);
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Consulta no encontrada!",
            error: _context6.t0
          });
          console.log("[>] Horario.ctrl, eliminar: ", _context6.t0);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = ctrl;