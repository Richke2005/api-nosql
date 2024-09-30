const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017/", {
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