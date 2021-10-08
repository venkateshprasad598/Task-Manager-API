const Task = require("./schema");

const getAllTasks = (req, res) => {
  res.send("Hello World");
};

const createTheTask = async (req, res) => {
  // const task = await Task.create(req.body);
  // console.log(task);
  res.status(201).json(req.body);
};
const getSingleTask = (req, res) => {
  console.log("Create single task");
  res.send("Hello Single");
};
const editTheTask = (req, res) => {
  console.log("Edit the task");
  res.send("Hello Edit");
};
const deleteTheTask = (req, res) => {
  console.log("Delete the task");
  res.send("Hello Delete");
};
module.exports = {
  getAllTasks,
  createTheTask,
  getSingleTask,
  editTheTask,
  deleteTheTask,
};
