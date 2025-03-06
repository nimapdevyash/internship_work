const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:3001/bulkops");
    console.log("connection is successfull with DB ");
  } catch (err) {
    console.log("error while connecting mongodb : ", err);
    process.exit(1);
  }
}

module.exports = connectToDB;
