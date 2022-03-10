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
  versionKey: false
}, {
  timestamps: true
});

module.exports = model('Uv', UvSchema);