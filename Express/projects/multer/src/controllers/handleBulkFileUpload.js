const fs = require("fs");

function handleBulkFileUpload(req, res) {
  const files = req.files;

  if (!files || files.length === 0) {
    res.send("files are required");
  }

  for (let file of files) {
    const data = fs.readFileSync(file.path);

    if (!data) {
      fs.unlinkSync(file.path);
      res.send(file.originalname + " -> " + "file is empty");
    }

    console.log("\n\n\n" + file.originalname + " -> \n\n " + data);
    fs.unlinkSync(file.path);
  }

  res.send("all files are read successfuly");
}

module.exports = handleBulkFileUpload;
