const mongoose = require("mongoose");

const users = mongoose.Schema({
  email: {
    type: "string",
    require: true,
    unique: true,
  },
  userName: {
    type: "string",
    require: true,
  },
  password: {
    type: "string",
    require: true,
  },
});

module.exports = mongoose.model("User", users);
