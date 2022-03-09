import {
  Schema,
  model
} from 'mongoose';

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

export default model('TipoMantenimiento', tipoMantenimientoSchema);