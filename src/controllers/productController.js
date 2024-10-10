const Controller = require("./controller.js");
const ProductService = require("../services/productService.js");

const productServices = new ProductService();

class ProductController extends Controller{
    constructor(){
        super(productServices);
    }

    async searchMany(req, res){
        try{
            const parameters = req.query;
            const result = await productServices.productsSearch(parameters);
            if(result.length === 0)
                return res.status(404).send({ message: "No products found"});
        
            return res.status(200).send(result);
        }catch(error){
            return res.status(500).send({ message: "Error on search products" });
        }
    }

    async getProductsByUser(req, res){
        try{
            const userId = req.params.id;
            const result = await productServices.productsByUser(userId);
            if(result.length === 0)
                return res.status(404).send({ message: "No products found"});
        
            return res.status(200).send(result);
        }catch(error){
            return res.status(500).send({ message: "Error on search products" });
        }
    }

    async getUserInformation(req, res){
        try{
            const { id } = req.params;
            const result = await productServices.userRegisteringInfo(id);
            if(result.length === 0)
                return res.status(404).send({ message: "No products found"});
        
            return res.status(200).send(result);
        }catch(error){
            return res.status(500).send({ message: "Error on search products"});
        }
    }
}

module.exports = ProductController;