const {
  Schema,
  model
} = require('mongoose');
const solicitudSchema = new Schema({
  idUEducativa: {
    type: Schema.Types.ObjectId,
    ref: "UEducativa",
  },
  fecha: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true,
  },

},{
  timestamps: true
});
module.exports =  model('Solicitud', solicitudSchema);