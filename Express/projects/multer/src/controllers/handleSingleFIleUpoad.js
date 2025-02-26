const fs = require("fs");

function handleSingleFileUpload(req, res) {
  const file = req.file;

  if (!file) {
    return res.send("file is required");
  }

  const fileData = fs.readFileSync(file.path);

  if (!fileData) {
    fs.unlinkSync(file.path);
    return res.send("file is empty");
  }

  console.log(fileData.toString());

  fs.unlinkSync(file.path);

  res.send("file read successfuly");
}

module.exports = handleSingleFileUpload;
