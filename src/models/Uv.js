const {
  Schema,
  model
} = require('mongoose');

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
  timestamps: true
});

module.exports = model('Uv', UvSchema);