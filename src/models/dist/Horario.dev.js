"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var horarioSchema = new _mongoose.Schema({
  turno: {
    type: String,
    required: true
  },
  horarioInicial: {
    type: String,
    required: true
  },
  horarioFinal: {
    type: String,
    required: true
  },
  doctor: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  consultorio: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Consultorio"
  }
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Horario', horarioSchema);

exports["default"] = _default;