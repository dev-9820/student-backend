const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audioController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/audio');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/audio', upload.single('file'), audioController.uploadAudio);
router.get('/audio', audioController.getAudio);

module.exports = router;