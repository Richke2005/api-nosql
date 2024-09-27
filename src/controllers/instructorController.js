const Controller = require("./controller.js");
const InstructorService = require("../services/instructorService.js");

const instructorService = new InstructorService();

class InstructorController extends Controller{
    constructor(){
        super(instructorService);
    }
}

module.exports = InstructorController;