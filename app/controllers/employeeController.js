const employeeList = async (req, res) => {
    res.render("./pages/employees/index")
}

const getFormCreate = async (req, res) => {
    res.render("./pages/employees/create")
}


const getFormEdit = async (req, res) => {
    res.render("./pages/employees/edit")
}
module.exports = {
    employeeList,
    getFormCreate,
    getFormEdit
}