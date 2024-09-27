const Controller = require("./controller.js");
const ProductService = require("../services/productService.js");

const productServices = new ProductService();

class ProductController extends Controller{
    constructor(){
        super(productServices);
    }
}

module.exports = ProductController;