"use strict";
require("dotenv").config({ path: "./config.env" });
const app = require("./app");
const connectDB = require("./db/connect");

//db connect
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log("connected to database");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server is running on port ${process.env.PORT}`);
      console.log(`http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

//start server
start();
