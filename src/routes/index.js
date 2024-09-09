const express = require("express");

module.exports = (app) => {
    app.route("/").get((req, res)=>{
        res.status(200).send({message: "Welcome to nosql-API"});
    })

    app.use(
        express.json()
    );
}