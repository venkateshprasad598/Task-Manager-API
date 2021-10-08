const express = require("express");
const app = express();
// Secret Varibles and Connect to DB
require("dotenv").config();
const connectedDB = require("./Router/connection");
// Tasks Router
const tasks = require("./Router/router");
app.use("/api/v1/tasks", tasks);

// Middleware
app.use(express.json());

//Home
app.get("/", (req, res) => {
  res.send("Hello MY Home");
});

const start = async () => {
  try {
    //   to pass the connection string to ConnectedDB we use Process.env.Mongo_Db
    await connectedDB(process.env.Mongo_Db);
    app.listen(5000, console.log("Server is listening on port 5000..."));
  } catch (err) {
    console.log(err);
  }
};
start();