const { Schema, model } = require('mongoose');

const FieldSchema = new Schema({
  label: String,
  id: Number,
  type: String,
  component: String,
  placeholder: String,
});

const ConfigSchema = new Schema({
  fields: [FieldSchema],
}, {collection: 'configs'});

module.exports = model('Config', ConfigSchema);