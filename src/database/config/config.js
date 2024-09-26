const { MongoClient, ServerApiVersion } = require("mongodb");

//TODO: Replace the uri string with your MongoDB deployment's connection string.
async function connect() {
    try {
        const client = new MongoClient("mongodb://localhost:27017/skilltech", {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        })
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

module.exports = connect;