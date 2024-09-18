const DataSource = require("../database/models/index.js");

class Service{
    constructor(serviceName){
        this.service = serviceName;
    }

    async getAllReg(){
        return DataSource.models[this.service].find();
    }

    async getRegById(id){
        return DataSource.models[this.service].findById(id);
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