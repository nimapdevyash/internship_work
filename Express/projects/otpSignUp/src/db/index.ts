import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  password: "pass",
  username: "postgres",
  host: "localhost",
  port: "543",
});

async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("Database connection is established....");
  } catch (error) {
    console.log("couldn't connect to DB : ", error);
    process.exit(1);
  }
}

export default connectToDB;
export { sequelize };
