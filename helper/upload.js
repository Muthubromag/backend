const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${new Date().toISOString().replace(/:/g, '-')}_${file.originalname}`);
  },
});


const upload = multer({ storage });

module.exports = upload;
