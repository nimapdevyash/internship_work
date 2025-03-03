const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: "postgres",
  password: "pass",
  port: "543",
  username: "postgres",
});

async function connectToDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function cheakDBHealth(req, res) {
  try {
    let start = Date.now();

    // dummy query to cheak response time
    await sequelize.query("select 1 ;");
    let end = Date.now();

    if (end - start > 500) {
      return res.status(500).send("db is underload");
    }

    res.status(200).send("db is doin great");
  } catch (error) {
    return res.status(500).send("db is down");
  }
}

module.exports = {
  sequelize,
  connectToDb,
  cheakDBHealth,
};
