import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/signup", homeController.getSignUpPage);
    router.post("/post-signup", homeController.postSignUpPage);
    return app.use("/", router);
}

module.exports = initWebRoutes;