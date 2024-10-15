const Service = require("./service.js");

class UserService extends Service{
    constructor(){
        super("users");
    }

    async usersSearch(parameters){
        const {name, email} = parameters;

        let search = {};

        if(name) search.name = { $regex: name, $options: 'i' };
        if(email) search.email = { $regex: email, $options: 'i' };

        return super.getAllRegBySearch(search);
    }
}

module.exports = UserService;
