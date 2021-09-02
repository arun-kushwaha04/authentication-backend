const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoute = require("./Authentication/auth");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Server up and running at ${PORT}`,
  });
});

mongoose.connect(process.env.DB_URL, (err) => {
  if (err) {
    console.log("Error caused in connection to database", err);
  } else {
    console.log("Connected to database ☺");
  }
});

app.get("/home", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.SECRET_KEY, (err, result) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        res.status(200).json({
          message: "Token Expired, try to login",
        });
      } else {
        res.status(400).json({
          message: "Invalid Token",
        });
      }
    } else {
      if (result) {
        const email = result.email;
        req.email = email;
        res.status(200).json({ message: "Valid Token" });
      } else {
        res.status(400).json({ message: "Token Expired" });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server up and running at ${PORT}`);
});
