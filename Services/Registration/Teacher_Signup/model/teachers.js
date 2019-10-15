const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
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
    schoolid:{
        type: Number,
        required:true
    },
    teacherid:{
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

module.exports = mongoose.model('Teachers',teacherSchema)