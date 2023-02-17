const express = require("express");
const { employeeList, getFormCreate, getFormEdit, postFormCreate, loginEmployeeCtrl } = require("../controllers/employeeController");
const employeeRouter = express.Router();

employeeRouter.get("/",employeeList);
employeeRouter.get("/create",getFormCreate);
employeeRouter.post("/create",postFormCreate);
employeeRouter.get("/edit",getFormEdit);
employeeRouter.post("/login",loginEmployeeCtrl)
module.exports = employeeRouter;