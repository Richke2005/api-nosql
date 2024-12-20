class Controller{
    constructor(service){
        this.entityService = service;
    }

    async getAll(req, res){
        try{
            const documents = await this.entityService.getAllReg();
            return res.status(200).send(documents);
        }catch(error){
            return res.status(500).send({message: error});
        }
    }

    async getById(req, res){
        try{
            const { id } = req.params;
            const document = await this.entityService.getRegById(id);
            if(document == null){
                res.status(404).send({message: `Document with ID: ${id} not found`});
            }
            return res.status(200).send(document);
        }catch(error){
            return res.status(400).send({message: error});
        }
    }

    async post(req, res){
        try{
            const doc = req.body;
            if(Object.keys(doc).length === 0 && doc.constructor === Object){
                return res.status(400).send({message: 'Document cannot be empty or user_id is missing'});
            }
            const savedDocument = await this.entityService.postReg(doc);
            
            return res.status(201).send(savedDocument);
        }catch(error){
            res.status(500).send({message: error});
        }
    }

    async update(req, res){
        try{
            const { id } = req.params;
            const doc = req.body;

            const update = await this.entityService.updateReg(id, doc);
            if(update.matchedCount === 0){
                return res.status(404).send({message: `Document with ID: ${id} not found`});
            }

            return res.status(200).send({message: `Document with ID: ${id} successfully updated`, update});
        }catch(error){
            return res.status(500).send({message: error});
        }
    }

    async delete(req, res){
        try{
            const { id } = req.params;
            const deleted = await this.entityService.deleteReg(id);
            if(deleted.deletedCount === 0){
                return res.status(404).send({message: `Document with ID: ${id} not found`});
            }
            return res.status(200).send({message: `Document with ID ${id} Was deleted`, deleted});
        }catch(error){
            return res.status(500).send({message: error});
        }
    }
}

module.exports = Controller;