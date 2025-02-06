import mongoose from "mongoose";

async function connectToDB(): Promise<void> {
  try {
    await mongoose.connect("mongodb://localhost:27017/typescript_curd");
    console.log("db connection sucessfull...");
  } catch (error) {
    console.log("error while connecting to database : ", error);
    process.exit(1);
  }
}

export default connectToDB;
