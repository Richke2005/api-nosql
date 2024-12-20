const { ObjectId } = require("mongodb");
const { client } = require("../database/config/config.js");

const database = client.db("api-nosql");

class Service{
    #service;

    constructor(serviceName){
        this.#service = serviceName;
    }

    async getAllReg(){
        return database.collection(this.#service).find({}).toArray();
    }

    async getRegById(id){
        return database.collection(this.#service).findOne({ _id: new ObjectId(id)});
    }

    async getAllRegBySearch(search = {}, projection = {}){
        return database.collection(this.#service).find(search, projection).toArray();
    }

    async getRegByAggregation(aggregation = []){
        return database.collection(this.#service).aggregate(aggregation).toArray();
    }

    async postReg(doc){
        return database.collection(this.#service).insertOne(doc);
    }

    async updateReg(id, doc){
        return database.collection(this.#service).updateOne({ _id: new ObjectId(id) }, { $set: doc });
    }

    async deleteReg(id){
        return database.collection(this.#service).deleteOne({ _id: new ObjectId(id) });
    }
}

module.exports = Service;