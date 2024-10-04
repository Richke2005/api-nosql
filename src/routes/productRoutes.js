const { Router } = require("express");
const ProductController = require("../controllers/productController.js");

const router = Router();
const productController = new ProductController();

router
.post("/api-nosql/api/v1/products", (req, res) => productController.post(req, res))
.get("/api-nosql/api/v1/products", (req, res) => productController.getAll(req, res))
.get("/api-nosql/api/v1/products/search", (req, res) => productController.searchMany(req, res))
.get("/api-nosql/api/v1/products/:id", (req, res) => productController.getById(req, res))
.put("/api-nosql/api/v1/products/:id", (req, res) => productController.update(req, res))
.delete("/api-nosql/api/v1/products/:id", (req, res) => productController.delete(req, res));

module.exports = router;