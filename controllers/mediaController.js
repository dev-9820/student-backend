const Media = require('../models/Media');

exports.uploadMedia = async (req, res) => {
  const { title, description } = req.body;
  const fileUrl = req.file.path;
  const media = new Media({ title, description, fileUrl });
  await media.save();
  res.status(201).json(media);
};

exports.getMedia = async (req, res) => {
  const media = await Media.find();
  res.status(200).json(media);
};