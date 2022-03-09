"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var especialidadSchema = new _mongoose.Schema({
  nombreEspecialidad: {
    type: String
  }
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Especialidad', especialidadSchema);

exports["default"] = _default;