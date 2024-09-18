const mongoose = require("mongoose");

//TODO: Replace the uri string with your MongoDB deployment's connection string.
async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/skilltech");
        console.log("Connection successful to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

    mongoose.connection.on("error", err => {
        console.error("MongoDB connection error:", err);
    });
}

module.exports = connect;