/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

(async function main() {
  try {
    await mongoose.connect(config.database_url);
    console.log("Successfully connected to MongoDB");
    app.listen(config.port, () => {
      console.log(` app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error(`Failed to connect to Mongo`, error);
  }
})();
