const mongoose = require('mongoose');

const parentschema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        minlength : 6,
        maxlength : 255
    },
    dob:{
        type : Date,
        required : true
    },
    gender:{
        type: String,
        required:true,
        minlength : 3,
        maxlength : 8
    },
    country:{
        type: String,
        required:true,
        minlength : 3,
        maxlength : 255
    }, 
    city:{
        type: String,
        required:true,
        minlength : 3,
        maxlength : 255
    }, 
    address:{
        type: String,
        required:true,
        minlength : 6,
        maxlength : 255
    },
    phoneUno:{
        type: Number,
        required:true
    },
    phonetwo:{
        type: Number,
        required:true
    },
    bloodgroup:{
        type: String,
        required:true,
        minlength : 6,
        maxlength : 12
    },
    workaddress:{
        type: String,
        required:true,
        minlength : 6,
        maxlength : 255
    },
    workcontact:{
        type: Number,
        required:true
    },
    coordinates:{
        type: String,
        required:true
    },
    livingwith:{
        type: String,
        required:true,
        minlength : 2,
        maxlength : 10
    },
    occupation:{
        type: String,
        required:true,
        minlength : 3,
        maxlength : 50
    },
    pupilid:{
        type: Number,
        required:true
    },
    parentid:{
        type: Number,
        required:true
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

module.exports = mongoose.model('Parents',parentschema)