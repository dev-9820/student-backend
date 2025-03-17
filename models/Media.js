const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: String,
  description: String,
  fileUrl: String, // For image or video URL
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);