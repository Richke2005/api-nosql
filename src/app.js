const express = require("express");
const routes = require("./routes/index.js");
const connect = require("./database/config/config.js");

const app = express();

connect()
.then(() => {
    routes(app)
});


module.exports = app;