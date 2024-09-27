const express = require("express");
const routes = require("./routes/index.js");
const { connect } = require("./database/config/config.js");

(async ()=> await connect())();

const app = express();

routes(app);

module.exports = app;