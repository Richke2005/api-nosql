const {Schema} = require("mongoose");

const instructorSchema = new Schema({
    name: String,
    email: String, 
    specialty: String,
    social_midia: [String]
}, 
{
    timestamps: true
});

module.exports = instructorSchema;