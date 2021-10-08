const Task = require("./schema");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.json("Error!!");
  }
};

const createTheTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    console.log(tasks);
    res.status(201).json({ tasks });
  } catch (err) {
    res.json({ message: err });
  }
};
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    if (!task) {
      return res.status(404).json("No Task Found");
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json("ERROR!!");
  }
};
const editTheTask = (req, res) => {
  console.log("Edit the task");
  res.send("Hello Edit");
};
const deleteTheTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await Task.findOneAndDelete({ _id: id });
    if (!deleteTask) {
      return res.status(404).json("Enter Correct ID");
    }
    res.status(200).json({ deleteTask });
  } catch (err) {
    res.status(500).json("ERROR!!");
  }
};
module.exports = {
  getAllTasks,
  createTheTask,
  getSingleTask,
  editTheTask,
  deleteTheTask,
};
