"use strict";

var _Paciente = _interopRequireDefault(require("../models/Paciente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.crear = function _callee(req, res) {
  var _req$body, ci, nombresPaciente, apellidosPaciente, fechaNacimiento, telefono, pacienteDuplicado, nuevoPaciente, pacienteGuardado;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, ci = _req$body.ci, nombresPaciente = _req$body.nombresPaciente, apellidosPaciente = _req$body.apellidosPaciente, fechaNacimiento = _req$body.fechaNacimiento, telefono = _req$body.telefono;

          if (!(ci, nombresPaciente && apellidosPaciente && fechaNacimiento && telefono)) {
            _context.next = 16;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(_Paciente["default"].findOne({
            ci: ci
          }));

        case 5:
          pacienteDuplicado = _context.sent;

          if (!pacienteDuplicado) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            ok: false,
            msg: "Ya existe un paciente con ese 'CI' en la base de datos!"
          }));

        case 8:
          nuevoPaciente = new _Paciente["default"]({
            ci: ci,
            nombresPaciente: nombresPaciente,
            apellidosPaciente: apellidosPaciente,
            fechaNacimiento: fechaNacimiento,
            telefono: telefono
          }); //guardar paciente

          _context.next = 11;
          return regeneratorRuntime.awrap(nuevoPaciente.save());

        case 11:
          pacienteGuardado = _context.sent;
          console.log("[>] Paciente.ctrl, crear: ", pacienteGuardado);
          return _context.abrupt("return", res.status(200).json({
            ok: true,
            msg: "Paciente creado exitosamente!",
            paciente: pacienteGuardado
          }));

        case 16:
          return _context.abrupt("return", res.status(500).json({
            ok: false,
            msg: "Todos los campos son requeridos!"
          }));

        case 17:
          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!"
          });
          console.log("[>] Paciente.ctrl, crear: ", _context.t0);

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
};

ctrl.obtener = function _callee2(req, res) {
  var pacientes;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Paciente["default"].find());

        case 3:
          pacientes = _context2.sent;
          res.status(200).json({
            ok: true,
            pacientes: pacientes
          });
          console.log("[>] Paciente.ctrl, obtener: ", pacientes);
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
  var paciente;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Paciente["default"].findOne({
            _id: req.params.id
          }));

        case 3:
          paciente = _context3.sent;
          console.log("[>] Paciente.ctrl, obtenerPorId: ", paciente);
          return _context3.abrupt("return", res.status(200).json({
            ok: true,
            paciente: paciente
          }));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "El paciente con el id, ".concat(req.params.id, " no fue encontrado"),
            error: _context3.t0
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.obtenerPorCI = function _callee4(req, res) {
  var paciente;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Paciente["default"].findOne({
            ci: req.params.ci
          }));

        case 3:
          paciente = _context4.sent;

          if (paciente) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            ok: false,
            msg: "No existe el paciente con el CI, ".concat(req.params.ci)
          }));

        case 6:
          console.log("[>] Paciente.ctrl, obtenerPorCI: ", paciente);
          return _context4.abrupt("return", res.status(200).json({
            ok: true,
            paciente: paciente
          }));

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!"
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

ctrl.actualizar = function _callee5(req, res) {
  var paciente, pacienteActualizado;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Paciente["default"].findById(req.params.id));

        case 3:
          paciente = _context5.sent;

          if (!(paciente === null || paciente === undefined)) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            ok: false,
            msg: "El paciente con el id, '".concat(req.params.id, "' no fue encontrado")
          }));

        case 6:
          _context5.next = 8;
          return regeneratorRuntime.awrap(_Paciente["default"].findByIdAndUpdate(req.params.id, {
            nombresPaciente: req.body.nombresPaciente,
            apellidosPaciente: req.body.apellidosPaciente,
            fechaNacimiento: req.body.fechaNacimiento,
            telefono: req.body.telefono
          }, {
            "new": true
          }));

        case 8:
          pacienteActualizado = _context5.sent;
          console.log("[>] Paciente.ctrl, actualizar: ", pacienteActualizado);
          return _context5.abrupt("return", res.status(200).json({
            ok: true,
            pacienteActualizado: pacienteActualizado,
            msg: 'Paciente actualizado exitosamente!'
          }));

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "El paciente con el id, ".concat(req.params.id, " no fue encontrado"),
            error: _context5.t0
          });

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

ctrl.eliminar = function _callee6(req, res) {
  var paciente;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_Paciente["default"].findByIdAndDelete(req.params.id));

        case 3:
          paciente = _context6.sent;
          res.status(200).json({
            ok: true,
            msg: "Paciente '".concat(paciente.nombresPaciente, "' eliminado correctamente! ")
          });
          console.log("[>] Paciente.ctrl, eliminar: ", paciente);
          _context6.next = 11;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Paciente no encontrado!",
            error: _context6.t0
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = ctrl;