const mongoose = require("mongoose");
const instructorSchema = require("./instructor.js");
const enterpriseSchema = require("./enterprise.js");

// Definir modelos
mongoose.model("instructors", instructorSchema);
mongoose.model("enterprises", enterpriseSchema);

module.exports = mongoose;