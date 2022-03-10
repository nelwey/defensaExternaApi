const {
  Schema,
  model
} = require('mongoose');

const tipoMantenimientoSchema = new Schema({
  nombre: {
    type: String,
    unique: true
  },
}, {
  versionKey: false
}, {
  timestamps: true
});

module.exports = model('TipoMantenimiento', tipoMantenimientoSchema);