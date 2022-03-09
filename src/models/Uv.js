import {
  Schema,
  model
} from 'mongoose';

const UvSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  distrito: {
    type: String,
    required: true
  }
}, {
  versionKey: false
}, {
  timestamps: true
});

export default model('Uv', UvSchema);