const express = require("express");
const userRoutes = require("./userRoutes.js");
const productRoutes = require("./productRoutes.js");

module.exports = (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send({message: "API NoSQL"});
    });

    app.use(
        express.json(),
        userRoutes,
        productRoutes
    );
}