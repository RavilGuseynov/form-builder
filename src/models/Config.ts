const { Schema, model } = require('mongoose');

const schema = new Schema({
  text: {type: String, required: true},
  id: {type: String},
}, {collection: 'configs'});

module.exports = model('Config', schema);