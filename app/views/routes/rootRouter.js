const express = require("express");
const productRouter = require("./productRouter");

 const rootRouter = express.Router();

 rootRouter.get("/",productRouter);

 module.exports = rootRouter;