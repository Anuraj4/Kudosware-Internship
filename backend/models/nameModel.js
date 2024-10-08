const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

module.exports = mongoose.model('Name', nameSchema);
