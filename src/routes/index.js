const express = require("express");
const path = require('path');
const userRoutes = require("./userRoutes.js");
const productRoutes = require("./productRoutes.js");

module.exports = (app) => {
    app.route('/api-nosql/api/v1/').get((req, res)=>{
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    });

    app.use(
        express.json(),
        userRoutes,
        productRoutes
    );
}