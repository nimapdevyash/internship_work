const express = require("express");
const upload = require("./middlewares/multer");
const handleBulkFileUpload = require("./controllers/handleBulkFileUpload");
const handleSingleFileUpload = require("./controllers/handleSingleFIleUpoad");
const handleSpecificFileTypeUpload = require("./controllers/handleSpecificFileUpload");
const fileFilter = require("./middlewares/clamscan");

const app = express();

// global middleware for logging requests
app.use((req, res, next) => {
  let url = req.url;
  let method = req.method;

  console.log(`url : ${url} && method : ${method}`);
  next();
});

app.use(
  "/is-infected",
  upload.single("file"),
  fileFilter,
  handleSingleFileUpload
);
app.use("/bulk-files", upload.array("files"), handleBulkFileUpload);
app.use("/specific-file", upload.single("file"), handleSpecificFileTypeUpload);

app.get("/", (req, res) => res.send("app is live"));

module.exports = app;
