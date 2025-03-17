const Announcement = require('../models/Announcement');

exports.createAnnouncement = async (req, res) => {
  const { title, description } = req.body;
  const announcement = new Announcement({ title, description });
  await announcement.save();
  res.status(201).json(announcement);
};

exports.getAnnouncements = async (req, res) => {
  const announcements = await Announcement.find();
  res.status(200).json(announcements);
};