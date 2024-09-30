const Service = require("./service.js");

class UserService extends Service{
    constructor(){
        super("users");
    }
}

module.exports = UserService;