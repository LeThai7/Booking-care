import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // static: muon lay anh thi chi dc lay trong public
    app.set("view engine", "ejs"); //su dung view engine la ejs
    app.set("views", "./src/views");
};

module.exports = configViewEngine;
