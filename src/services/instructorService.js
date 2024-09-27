const Service = require("./service.js");

class InstructorService extends Service{
    constructor(){
        super("instructors");
    }
}

module.exports = InstructorService;