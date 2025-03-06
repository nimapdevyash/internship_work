const express = require("express");

const {
  handleBulkInsert,
  handleBulkUpdate,
  handleBulkDelete,
  handleBulkFind,
} = require("../controllers/mongoose");

const router = express.Router();

router
  .route("/")
  .post(handleBulkInsert)
  .put(handleBulkUpdate)
  .delete(handleBulkDelete)
  .get(handleBulkFind);

module.exports = router;
