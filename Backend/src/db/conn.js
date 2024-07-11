const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_URL || "mongodb://localhost:27017/audiobook_database")
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("no connection :(",e);
  });
