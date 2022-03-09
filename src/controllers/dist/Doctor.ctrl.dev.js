"use strict";

var _Doctor = _interopRequireDefault(require("../models/Doctor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.crear = function _callee(req, res) {
  var nuevoDoctor, doctorGuardado;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!(!req.body.nombresConsultorio && !req.body.apellidosDoctor && !req.body.telefono)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            ok: false,
            msg: "Nombres, Apellidos y Telefono son requeridos!"
          }));

        case 3:
          nuevoDoctor = new _Doctor["default"]({
            ci: req.body.ci,
            nombresDoctor: req.body.nombresDoctor,
            apellidosDoctor: req.body.apellidosDoctor,
            telefono: req.body.telefono,
            especialidad: req.body.especialidad
          });
          _context.next = 6;
          return regeneratorRuntime.awrap(nuevoDoctor.save());

        case 6:
          doctorGuardado = _context.sent;
          console.log("[>] Doctor.js, crear", doctorGuardado);
          return _context.abrupt("return", res.status(200).json({
            ok: true,
            msg: "Doctor registrado exitosamente!",
            doctor: doctorGuardado
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Ha ocurrido un error del lado del servidor!",
            error: _context.t0
          });
          console.log("[>] Doctor.js, crear", _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

ctrl.obtener = function _callee2(req, res) {
  var doctores;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Doctor["default"].find().populate('especialidad'));

        case 3:
          doctores = _context2.sent;
          res.status(200).json({
            ok: true,
            doctores: doctores
          });
          console.log("[>] Doctor.ctrl, obtener: ", doctores);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se pudo obtener los doctores!",
            error: _context2.t0
          });
          console.log("[>] Doctor.ctrl, obtener: ", _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.obtenerPorId = function _callee3(req, res) {
  var doctor;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Doctor["default"].findOne({
            _id: req.params.id
          }));

        case 3:
          doctor = _context3.sent;
          console.log("[>] Doctor.ctrl, obtenerPorId: ", doctor);
          return _context3.abrupt("return", res.status(200).json({
            ok: true,
            doctor: doctor
          }));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "El doctor con el id, ".concat(req.params.id, " no fue encontrado"),
            error: _context3.t0
          });
          console.log("[>] Doctor.ctrl, obtenerPorId: ", _context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

ctrl.actualizar = function _callee4(req, res) {
  var doctor, doctorActualizado;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Doctor["default"].findById(req.params.id));

        case 3:
          doctor = _context4.sent;

          if (!(doctor === null || doctor === undefined)) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            ok: false,
            msg: "El doctor con el id, '".concat(req.params.id, "' no fue encontrado")
          }));

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(_Doctor["default"].findByIdAndUpdate(req.params.id, {
            nombresDoctor: req.body.nombresDoctor,
            apellidosDoctor: req.body.apellidosDoctor,
            telefono: req.body.telefono,
            especialidad: req.body.especialidad
          }, {
            "new": true
          }));

        case 8:
          doctorActualizado = _context4.sent;
          console.log("[>] Doctor.ctrl, actualizar: ", doctorActualizado);
          return _context4.abrupt("return", res.status(200).json({
            ok: true,
            doctorActualizado: doctorActualizado,
            msg: 'Doctor actualizado exitosamente!'
          }));

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "No se envi\xF3 ning\xFAn payload para actualizar",
            error: _context4.t0
          });
          console.log("[>] Doctor.ctrl, actualizar: ", _context4.t0);

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

ctrl.eliminar = function _callee5(req, res) {
  var doctor;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Doctor["default"].findByIdAndDelete(req.params.id));

        case 3:
          doctor = _context5.sent;
          res.status(200).json({
            ok: true,
            msg: "Doctor '".concat(doctor.nombresDoctor, "' eliminado correctamente! ")
          });
          console.log("[>] Doctor.ctrl, eliminar: ", doctor);
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            ok: false,
            msg: "Doctor no encontrado!",
            error: _context5.t0
          });
          console.log("[>] Doctor.ctrl, eliminar: ", _context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = ctrl;