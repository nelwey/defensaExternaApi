import {
  Schema,
  model
} from 'mongoose';
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

}, {
  versionKey: false
});

export default model('Solicitud', solicitudSchema);