import express from "express";
import mongoose from "mongoose";
const app = express();
const DB_NAME = "tutorialHub";
const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT;
const connectDB = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`app is listen on port Your are successful , ${port}`);
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export default connectDB;
