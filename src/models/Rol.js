const {
  Schema,
  model
} = require('mongoose'); 

const ROLES = ["admin", "usuario"];

const rolSchema = new Schema({
  nombreRol: String

}, {
  versionKey: false
});

module.exports = model('Rol', rolSchema);