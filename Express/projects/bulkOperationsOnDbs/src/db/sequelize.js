const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  port: 543,
  password: "pass",
  username: "postgres",
});

async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("db connection is successfull");
  } catch (error) {
    console.log("error while connecting to db : ", error);
    process.exit(1);
  }
}

// prevent sequelize from writing logs
// sequelize.options.logging = false;

module.exports = {
  sequelize,
  connectToDB,
};
