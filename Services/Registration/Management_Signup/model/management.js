const mongoose = require('mongoose');

const managementSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        minlength : 6,
        maxlength : 255,
        match: [/^([a-zA-z])?$/, 'Please fill a valid name']
    },
    doj:{
        type : Date,
        required : true
    },
    country:{
        type: String,
        required:true,
        minlength : 3,
        maxlength : 255,
        match: [/^([a-zA-z])?$/, 'Please fill a valid country']
    }, 
    city:{
        type: String,
        required:true,
        minlength : 3,
        maxlength : 255,
        match: [/^([a-zA-z])?$/, 'Please fill a valid country']
    }, 
    address:{
        type: String,
        required:true,
        minlength : 6,
        maxlength : 255,
    },
    phoneUno:{
        type: Number,
        required:true,
    },
    phonetwo:{
        type: Number,
        required:true,
    },
    email:{
        type: String,
        required:true,
        minlength : 6,
        maxlength : 255,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address']
    },
    password:{
        type : String,
        required : true,
        minlength : 6,
        maxlength : 1024
    }
});

module.exports = mongoose.model('Management',managementSchema)