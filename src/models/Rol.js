const {
  Schema,
  model
} = require('mongoose'); 

const ROLES = ["admin", "usuario"];

const rolSchema = new Schema({
  nombreRol: String

},{
  timestamps: true
});

module.exports = model('Rol', rolSchema);