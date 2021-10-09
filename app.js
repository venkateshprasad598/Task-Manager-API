const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Secret Varibles and Connect to DB
require("dotenv").config();
const connectedDB = require("./Router/connection");

// Tasks Router
const tasks = require("./Router/router");
app.use("/api/v1/tasks", tasks);

//NOT FOUND
const notFound = require("./Router/Error");
app.use(notFound);

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
