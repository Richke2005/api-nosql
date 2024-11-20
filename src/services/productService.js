const { ObjectId } = require("mongodb");
const Service = require("./service.js");

class ProductService extends Service{
    constructor(){
        super("products");
    }

    async postReg(doc){
        doc.registered_by = { user_id: new ObjectId(doc.registered_by.user_id) };
        return super.postReg(doc);
    }

    async productsSearch(parameters){
        const {name, priceGte, priceLte, qtt_stockGte, qtt_stockLte, category} = parameters;

        let search = {};
        
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

    async productsByUser(user){
        return super.getAllRegBySearch({"registered_by.user_id": new ObjectId(user)});
    }

    async userRegisteringInfo(id){
        return super.getRegByAggregation([
            { $match: { _id: new ObjectId(id) } },
            { 
                $lookup: { 
                from: "users",
                localField: "registered_by.user_id", 
                foreignField: "_id", 
                as: "registering_user" 
                } 
            },
            { $unwind: "$registering_user" },
            { $project: {registered_by: 0, registering_user: { password: 0 } } }
        ])
    }


}

module.exports = ProductService;
