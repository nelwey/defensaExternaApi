"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var pacienteSchema = new _mongoose.Schema({
  ci: {
    type: String,
    required: true,
    unique: true
  },
  nombresPaciente: {
    type: String,
    required: true
  },
  apellidosPaciente: {
    type: String,
    required: true
  },
  fechaNacimiento: {
    type: Date,
    required: true
  },
  telefono: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Paciente', pacienteSchema);

exports["default"] = _default;