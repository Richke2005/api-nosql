const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const client = new MongoClient(`mongodb+srv://${dbUser}:${dbPassword}@node-express.5amaocy.mongodb.net/?retryWrites=true&w=majority&appName=Node-express`, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

//TODO: Replace the uri string with your MongoDB deployment's connection string.
async function connect(){
    try {
        await client.connect();

        client.on("error", (error) => {
            console.error("Error connecting to MongoDB: ", error);
        });

        console.log("Connected to MongoDB");
    
    } catch (error) {
        client.close();
        console.error("Error connecting to MongoDB: ", error);
    }
}

module.exports = {
    connect,
    client
};