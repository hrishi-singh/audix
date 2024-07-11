const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/audiobook_database")
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("no connection :(",e);
  });
