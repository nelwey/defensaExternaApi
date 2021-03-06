const {
  Schema,
  model
} = require('mongoose');
const bcrypt = require('bcryptjs'); 

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: Schema.Types.ObjectId,
    ref: "Rol"
  }

},{
  timestamps: true
});

usuarioSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

usuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);

}

module.exports = model('Usuario', usuarioSchema);