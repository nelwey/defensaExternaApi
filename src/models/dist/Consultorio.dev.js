"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var consultorioSchema = new _mongoose.Schema({
  nombreConsultorio: {
    type: String,
    required: true
  },
  equipo: {
    type: Array
  },
  especialidad: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Especialidad"
  }]
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Consultorio', consultorioSchema);

exports["default"] = _default;