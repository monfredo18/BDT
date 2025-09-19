const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = 'uploads/other';
    if (file.mimetype === 'application/pdf') folder = 'uploads/pdf';
    else if (file.mimetype.includes('word')) folder = 'uploads/word';
    else if (file.mimetype.includes('excel')) folder = 'uploads/excel';
    else if (file.mimetype.includes('powerpoint')) folder = 'uploads/ppt';
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), uploadController.uploadFile);

module.exports = router;
