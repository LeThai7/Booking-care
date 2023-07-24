import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouters = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);

    router.get("/thai", (req, res) => {
        return res.send("hello THảo");
    });

    return app.use("/", router);
};

module.exports = initWebRouters;
