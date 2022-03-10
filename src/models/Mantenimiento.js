const {
  Schema,
  model
} = require('mongoose');
let GASTO = {
  detalle: {
    type: String,
    required: true,
  },
  costo: {
    type: Number,
    required: true,
  }
}
const mantenimientoSchema = new Schema({
  idSolicitud: {
    type: Schema.Types.ObjectId,
    ref: "Solicitud",
    required: true,
  },
  idTipoMantenimiento: {
    type: Schema.Types.ObjectId,
    ref: "TipoMantenimiento",
    required: true,
  },
  fechaInicio: {
    type: String,
    required: true,
  },
  fechaFin: {
    type: String
  },
  estado: {
    type: String //proceso || finalizado
  },
  gastos: [GASTO]

}, {
  timestamps: true
});


module.exports = model('Mantenimiento', mantenimientoSchema);