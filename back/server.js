const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//const { boardRouter } = require("./routes");

const server = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    console.log("mongoDB connected...");
    app.use(express.json());

    // app.use("/board", boardRouter);

    app.listen(3300, async () => {
      console.log("3300 실행중...");
    });
  } catch (err) {
    console.log(err);
  }
};

server();
