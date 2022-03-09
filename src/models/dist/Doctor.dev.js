"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var doctorSchema = new _mongoose.Schema({
  ci: {
    type: String,
    required: true,
    unique: true
  },
  nombresDoctor: {
    type: String,
    required: true
  },
  apellidosDoctor: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  especialidad: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Especialidad"
  }]
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Doctor', doctorSchema);

exports["default"] = _default;