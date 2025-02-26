const fs = require("fs");

function handleSingleFileUpload(req, res) {
  const file = req.file;

  if (!file) {
    return res.send("file is required");
  }

  const fileData = fs.readFileSync(file.path);

  if (!fileData) {
    return res.send("file is empty");
  }

  console.log(fileData.toString());

  res.send("file read successfuly");
}

module.exports = handleSingleFileUpload;
