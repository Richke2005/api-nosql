const Service = require("./service.js");

class ProductService extends Service{
    constructor(){
        super("products");
    }

    async productsSearch(parameters){
        const {name, priceGte, priceLte, qtt_stockGte, qtt_stockLte, category} = parameters;

        const search = {};

        if(name) search.name = { $regex: name, $options: 'i' };
       

        if(priceGte || priceLte){
            search.price = {};
            if(priceGte) search.price.$gte = parseFloat(priceGte);
            if(priceLte) search.price.$lte = parseFloat(priceLte);
        }

        if(qtt_stockGte || qtt_stockLte){
            search.qtt_stock = {}
            if(qtt_stockGte) search.qtt_stock.$gte = parseInt(qtt_stockGte);
            if(qtt_stockLte) search.qtt_stock.$lte = parseInt(qtt_stockLte);
        }
        
        if(category) search.category = { $regex: category, $options: 'i' };
        return super.getAllRegBySearch(search);
    }
}

module.exports = ProductService;