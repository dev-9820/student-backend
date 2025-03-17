const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model('Announcement', announcementSchema);