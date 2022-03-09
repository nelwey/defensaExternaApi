"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var facturaSchema = new _mongoose.Schema({
  fechaFactura: {
    type: Date,
    required: true
  },
  importe: {
    type: Number,
    required: true
  },
  consulta: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Especialidad",
    required: true
  }
}, {
  timestamps: true
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Factura', facturaSchema);

exports["default"] = _default;