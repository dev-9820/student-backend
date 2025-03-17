const Audio = require('../models/Audio');

exports.uploadAudio = async (req, res) => {
  const { title, description } = req.body;
  const fileUrl = req.file.path;
  const audio = new Audio({ title, description, fileUrl });
  await audio.save();
  res.status(201).json(audio);
};

exports.getAudio = async (req, res) => {
  const audio = await Audio.find();
  res.status(200).json(audio);
};