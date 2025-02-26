const NodeClam = require("clamscan");
const fs = require("fs");

async function fileFilter(req, res, next) {
  try {
    const clamscan = await new NodeClam().init({
      clamdscan: {
        host: "127.0.0.1",
        port: 3310,
      },
    });

    const result = await clamscan.isInfected(req.file.path);
    if (result.isInfected === null || result.isInfected) {
      fs.unlinkSync(req.file.path);
      res.send("file is infected");
    } else next();
  } catch (error) {
    console.log("error while scanning the file , ", error);
  }
}

module.exports = fileFilter;
