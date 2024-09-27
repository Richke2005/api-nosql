const Service = require("./service.js");

class ProductService extends Service{
    constructor(){
        super("products");
    }
}

module.exports = ProductService;