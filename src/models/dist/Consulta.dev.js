"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var consultaSchema = new _mongoose.Schema({
  tipoConsulta: {
    type: String,
    required: true
  },
  fechaConsulta: {
    type: String,
    required: true
  },
  estado: {
    type: String
  },
  importe: {
    type: Number
  },
  diagnostico: {
    type: String
  },
  horario: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Horario"
  },
  paciente: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Paciente"
  },
  doctor: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  usuario: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  }
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Consulta', consultaSchema);

exports["default"] = _default;