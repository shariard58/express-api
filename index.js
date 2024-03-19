import "dotenv/config";
import mongoose from "mongoose";
// import { DB_NAME } from "./src/constants";
import express from "express";

const app = express();
const DB_NAME = "tutorialHub";

const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT;
(async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`app is listen on port, ${port}`);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();
