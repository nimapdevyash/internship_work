const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dest = "public/";

    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.fieldname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
