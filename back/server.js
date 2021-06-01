const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { postRouter } = require("./routes/postRoute");
dotenv.config();

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

    app.use("/post", postRouter);

    app.listen(3300, async () => {
      console.log("3300 실행중...");
    });
  } catch (err) {
    console.log(err);
  }
};

server();
