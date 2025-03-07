// const {
//   bulkInsert,
//   bulkDelete,
//   bulkUpdate,
//   bulkFind,
// } = require("../bulkOperations/mongoose");

const {
  bulkInsert,
  bulkDelete,
  bulkUpdate,
  bulkFind,
} = require("../bulkOperations/sequelize");

async function handleBulkInsert(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(404).send("data is required");
    }

    const result = await bulkInsert(data);

    res.status(200).json({
      message: "data is inserted sucessfully",
      insertCount: result.length,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
}

async function handleBulkDelete(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(404).json({ error: "data is required" });
    }

    const result = await bulkDelete(data);

    res.status(200).json({
      message:
        result.deletedCount !== 0
          ? "usrs deleted successfully"
          : "no usrs deleted",
      deleteCount: result,
    });
  } catch (error) {
    res.send(400).json({
      error: error.message || "error while deleting",
    });
  }
}

async function handleBulkUpdate(req, res) {
  try {
    const data = req.body;

    const result = await bulkUpdate(data);

    res.status(200).json({
      message: "sucessfully updated the values",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || "encounterd and error",
    });
  }
}

async function handleBulkFind(req, res) {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).json({
        error: "data is required",
      });
    }

    const result = await bulkFind(data);

    res.status(200).json({
      message: "data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || "encounterd and error",
    });
  }
}

module.exports = {
  handleBulkInsert,
  handleBulkUpdate,
  handleBulkDelete,
  handleBulkFind,
};
