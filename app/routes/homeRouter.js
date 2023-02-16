const express = require("express");
const { homePage } = require("../controllers/homeController");
const homeRouter = express.Router();
homeRouter.get("/",homePage)
module.exports = homeRouter;