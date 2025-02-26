const fs = require("fs");

function handleSpecificFileTypeUpload(req, res) {
  const file = req.file;

  if (!file) {
    res.send("file is required");
  }

  if (file.mimetype !== "text/csv") {
    fs.unlinkSync(file.path);
    res.send("only csv files are accepted here");
  }

  const data = fs.readFileSync(file.path);

  console.log("\n\n\n" + file.originalname + " -> " + data);

  fs.unlinkSync(file.path);

  res.send(" CSV file is handled ");
}

module.exports = handleSpecificFileTypeUpload;
