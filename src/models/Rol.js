import {
  Schema,
  model
} from 'mongoose';

export const ROLES = ["admin", "usuario"];

const rolSchema = new Schema({
  nombreRol: String

}, {
  versionKey: false
});

export default model('Rol', rolSchema);