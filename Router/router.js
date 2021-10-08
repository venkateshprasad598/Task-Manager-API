const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTheTask,
  getSingleTask,
  editTheTask,
  deleteTheTask,
} = require("./operations");

router.get("/", getAllTasks);
router.post("/", createTheTask);
router.get("/:id", getSingleTask);
router.patch("/:id", editTheTask);
router.delete("/:id", deleteTheTask);
module.exports = router;
