const express = require("express");
const employeeRouter = require("./employeeRouter");
const homeRouter = require("./homeRouter");

const rootRouter = express.Router();
rootRouter.use("/", homeRouter)
rootRouter.use("/employee",employeeRouter)

module.exports = rootRouter;