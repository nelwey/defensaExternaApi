const {
  Schema,
  model
} = require('mongoose');
const uEducativaSchema = new Schema({
  idUv: {
    type: Schema.Types.ObjectId,
    ref: "Uv",
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  ubicacion: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
  },
  email: {
    type: String,
  }

}, {
  versionKey: false
}, {
  timestamps: true
});


module.exports = model('UEducativa', uEducativaSchema);