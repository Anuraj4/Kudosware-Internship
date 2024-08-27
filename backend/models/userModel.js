const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, ref: 'Name', required: true },
  email: { type: String, required: true },
  resume: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume', required: true }
});

module.exports = mongoose.model('User', userSchema);
