const fs = require("fs");

function handleSpecificFileTypeUpload(req, res) {
  const file = req.file;

  if (!file) {
    res.send("file is required");
  }

  if (file.mimetype !== "text/csv") {
    res.send("only csv files are accepted here");
  }

  const data = fs.readFileSync(file.path);

  console.log("\n\n\n" + file.originalname + " -> " + data);

  res.send(" CSV file is handled ");
}

module.exports = handleSpecificFileTypeUpload;
