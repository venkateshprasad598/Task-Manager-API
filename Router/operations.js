const getAllTasks = (req, res) => {
  res.send("Hello World");
};
const createTheTask = (req, res) => {
  console.log("Create the task");
  res.send("Hello create");
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
