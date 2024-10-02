const Controller = require("./controller.js");
const UserService = require("../services/userService.js");

const userService = new UserService();

class UserController extends Controller{
    constructor(){
        super(userService);
    }

    async searchMany(req, res){
        try{
            const parameters = req.query;

            const result = await userService.usersSearch(parameters);
            if(result.length === 0) 
                return res.status(404).send({ message: "No users found" });

            return res.status(200).send(result);
    
        }catch(error){
            return res.status(500).send({ message: "Error on search users" });
        }
    }
}

module.exports = UserController;