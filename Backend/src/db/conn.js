const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/audiobook_database")
  .then(() => {
    console.log("connection successful, really ?");
  })
  .catch((e) => {
    console.log("no connection :(");
  });
