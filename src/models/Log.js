import {
  Schema,
  model
} from 'mongoose';

const logSchema = new Schema({
  idUsuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  metodo: {
    type: String,
    required: true,
  },
  query: {
    type: String,
  },

}, {
  timestamps: true
});

module.exports = model('Log', logSchema);