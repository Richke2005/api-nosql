class Controller{
    constructor(service){
        this.entityService = service;
    }

    async getAll(req, res){
        try{
            const documents = await this.entityService.getAllReg();
            res.status(200).send(documents);
        }catch(error){
            res.status(500).send({message: error});
        }
    }

    async getById(req, res){
        try{
            const { id } = req.params;
            const document = await this.entityService.getRegById(id);
            res.status(200).send(document);
        }catch(error){
            res.status(400).send({message: error});
        }
    }

    async post(req, res){
        try{
            const doc = req.body;
            const savedDocument = await this.entityService.postReg(doc);
            res.status(201).send({createdDoc: savedDocument});
        }catch(error){
            res.status(500).send({message: error});
        }
    }

    async update(req, res){
        try{
            const { id } = req.params;
            const doc = req.body;
            await this.entityService.updateReg(id, doc);
            res.status(200).send({message: `Document with ID: ${id} successfully updated`});
        }catch(error){
            res.status(500).send({message: error});
        }
    }

    async delete(req, res){
        try{
            const { id } = req.params;
            const deletedDocument = await this.entityService.deleteReg(id);
            res.status(200).send({deletedDoc: deletedDocument});
        }catch(error){
            res.status(500).send({message: error});
        }
    }
}

module.exports = Controller;