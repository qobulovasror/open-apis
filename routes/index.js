const express = require('express');

//routes
const home = require("./home");
const names = require("../uzb_names/router");

module.exports = function name(app) {
    app.use(express.static("./public"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.set("view engine", "ejs");

    app.use("/", home);
    app.use("/api/names", names);
}