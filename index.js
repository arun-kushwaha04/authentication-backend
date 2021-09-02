const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Server up and running at ${port}`,
  });
});

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log("Error caused in connection to database");
    } else {
      console.log("Connected to database ☺");
    }
  }
);

app.listen(port, () => {
  console.log(`Server up and running at ${port}`);
});
