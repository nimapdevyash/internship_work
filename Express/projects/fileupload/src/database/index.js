import mongoose from "mongoose";

async function connectToDB() {
  try {
    const connection = await mongoose.createConnection(process.env.DB_URL);
    console.log("connected to Database sucessfully...");
    return connection;
  } catch (error) {
    console.log("error while connecting to database...");
    console.error(error);
    process.exit(1);
  }
}

export default connectToDB;
