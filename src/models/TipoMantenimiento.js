const {
  Schema,
  model
} = require('mongoose');

const tipoMantenimientoSchema = new Schema({
  nombre: {
    type: String,
    unique: true
  },
},{
  timestamps: true
});
module.exports = model('TipoMantenimiento', tipoMantenimientoSchema);