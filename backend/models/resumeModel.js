const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String
});

module.exports = mongoose.model('Resume', resumeSchema);
