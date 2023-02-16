const mongoose = require('mongoose'); // Erase if already required
// Declare the Schema of the Mongo model
var employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    image_url:{
        type:String,
        required:false,
    },
});

//Export the model
module.exports = mongoose.model('Employee', employeeSchema);