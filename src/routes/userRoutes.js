const { Router } = require("express");
const UserController = require("../controllers/userController.js");

const router = Router();
const userController = new UserController();

router
.post("/users", (req, res) => userController.post(req, res))
.get("/users", (req, res) => userController.getAll(req, res))
.get("/users/:id", (req, res) => userController.getById(req, res))
.put("/users/:id", (req, res) => userController.update(req, res))
.delete("/users/:id", (req, res) => userController.delete(req, res));

module.exports = router;