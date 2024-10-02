const { Router } = require("express");
const ProductController = require("../controllers/productController.js");

const router = Router();
const productController = new ProductController();

router
.post("/products", (req, res) => productController.post(req, res))
.get("/products", (req, res) => productController.getAll(req, res))
.get("/products/search", (req, res) => productController.searchMany(req, res))
.get("/products/:id", (req, res) => productController.getById(req, res))
.put("/products/:id", (req, res) => productController.update(req, res))
.delete("/products/:id", (req, res) => productController.delete(req, res));

module.exports = router;