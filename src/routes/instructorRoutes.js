const { Router } = require("express");
const InstructorController = require("../controllers/instructorController.js");

const router = Router();
const instructorController = new InstructorController();

router
.post("/instructors", (req, res) => instructorController.post(req, res))
.get("/instructors", (req, res) => instructorController.getAll(req, res))
.get("/instructors/:id", (req, res) => instructorController.getById(req, res))
.put("/instructors/:id", (req, res) => instructorController.update(req, res))
.delete("/instructors/:id", (req, res) => instructorController.delete(req, res));



module.exports = router;