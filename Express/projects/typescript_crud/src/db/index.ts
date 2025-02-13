import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  username: "postgres",
  password: "password",
  port: 6000,
});
async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default connectToDB;

export { sequelize };
