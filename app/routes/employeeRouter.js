const express = require("express");
const { employeeList, getFormCreate, getFormEdit } = require("../controllers/employeeController");
const employeeRouter = express.Router();

employeeRouter.get("/",employeeList);
employeeRouter.get("/create",getFormCreate);
employeeRouter.get("/edit",getFormEdit);
module.exports = employeeRouter;