const Controller = require("./controller.js");
const ProductService = require("../services/productService.js");

const productServices = new ProductService();

class ProductController extends Controller{
    constructor(){
        super(productServices);
    }

    async post(req, res){
        try{
            const doc = req.body;
            if(Object.keys(doc).length === 0 && doc.constructor === Object){
                return res.status(400).send({message: 'Document cannot be empty or user_id is missing'});
            }
            if(doc.registered_by == undefined){
                return res.status(400).send({message: 'Document cannot be empty or user_id is missing'});
            }
            const savedDocument = await this.entityService.postReg(doc);
            return res.status(201).send(savedDocument);
        }catch(error){
            res.status(500).send({message: error});
        }
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