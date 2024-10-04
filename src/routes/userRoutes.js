const { Router } = require("express");
const UserController = require("../controllers/userController.js");

const router = Router();
const userController = new UserController();

router
.post("/api-nosql/api/v1/users", (req, res) => userController.post(req, res))
.get("/api-nosql/api/v1/users", (req, res) => userController.getAll(req, res))
.get("/api-nosql/api/v1/users/search", (req, res) => userController.searchMany(req, res))
.get("/api-nosql/api/v1/users/:id", (req, res) => userController.getById(req, res))
.put("/api-nosql/api/v1/users/:id", (req, res) => userController.update(req, res))
.delete("/api-nosql/api/v1/users/:id", (req, res) => userController.delete(req, res));

module.exports = router;