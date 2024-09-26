const { Collection } = require("mongodb")

class Service{
    #service;

    constructor(serviceName){
        this.#service = serviceName;
    }

    async getAllReg(){
        return Collection(this.#service).find();
    }

    async getRegById(id){
        return Collection(this.#service).findOne({_id: id});
    }

    async postReg(doc){
        return DataSource.models[this.service].create(doc);
    }

    async updateReg(id, doc){
        return DataSource.models[this.service].findByIdAndUpdate(id, {$set: doc});
    }

    async deleteReg(id){
        return DataSource.models[this.service].findByIdAndDelete(id);
    }
}

module.exports = Service;