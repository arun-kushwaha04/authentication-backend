const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoute = require("./Authentication/auth");
require("dotenv/config");

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Server up and running at ${port}`,
  });
});

mongoose.connect(process.env.DB_URL, (err) => {
  if (err) {
    console.log("Error caused in connection to database", err);
  } else {
    console.log("Connected to database ☺");
  }
});

app.listen(PORT, () => {
  console.log(`Server up and running at ${PORT}`);
});
