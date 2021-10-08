const mongoose = require("mongoose");

const connectedDB = (url) =>
  mongoose.connect(url).then(() => console.log("Connected to Db..."));

module.exports = connectedDB;
