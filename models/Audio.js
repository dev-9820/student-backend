const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  title: String,
  description: String,
  fileUrl: String, // For audio URL
}, { timestamps: true });

module.exports = mongoose.model('Audio', audioSchema);