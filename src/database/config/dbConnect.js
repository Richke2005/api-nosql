const mongoose = require("mongoose");

const DB_USER = '';
const DB_PASS = '';

mongoose.connect(`${DB_USER},${DB_PASS}`)
.catch(error => console.log(error));

module.exports = mongoose;