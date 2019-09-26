const mongoose = require('mongoose');
var systemParametersModel = mongoose.model('systemParameters', { 
    parameter: String,
    value: String,
    description: String
});

module.exports = systemParametersModel;

