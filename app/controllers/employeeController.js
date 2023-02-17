const employee = require("../models/employeeModel");
const asynchandler = require("express-async-handler");
const employeeList = async (req, res) => {
    const listData = await employee.find();
    res.render("./pages/employees/index",{listData:listData})
}

const getFormCreate = async (req, res) => {

    res.render("./pages/employees/create")
    
}

const postFormCreate = asynchandler(async (req, res) => {
    // const employees = req.body;
    const email = req.body.email;
    const findEmail = await employee.findOne({ email: email })
    if (!findEmail) {
        const emp = await employee.create(req.body);
        return res.redirect("/employee")
    } else {
        return res.redirect("/employee/create")
    }
});
const loginEmployeeCtrl = asynchandler(async (req, res) => {

    const { email, password } = req.body;
    // check if employee exists or not
    const findemployee = await employee.findOne({email:email})
    if (findemployee && await findemployee.isPasswordMatched(password)) {
        res.json(findemployee)
    } else {
        throw new Error("Invalid Credentials");
    }

})
const getFormEdit = async (req, res) => {
    res.render("./pages/employees/edit")
}
module.exports = {
    employeeList,
    getFormCreate,
    postFormCreate,
    getFormEdit,
    loginEmployeeCtrl

}