const multer = require('multer');

module.exports = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      cb({ message: 'Unsupported file format' }, false);
    }
  },
  limits: { fileSize: 1024 * 1024 },
  storage: multer.diskStorage({}),
}).single('image');
