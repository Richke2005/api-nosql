const Service = require("./service.js");
const { client } = require("../database/config/config.js");

const database = client.db("api-nosql");

class UserService extends Service{
    constructor(){
        super("users");
    }

    async userSearch(parameters){
        const {name, email} = parameters;

        const search = {};

        if(name) search.name;
        if(email) search.email;

        return super.getRegBySearch(search);
    }
}

module.exports = UserService;