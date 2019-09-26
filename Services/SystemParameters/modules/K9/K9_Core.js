/**
 * 
 * K9 - Core 
 * Set of K9's with different validation methods
 * Depends on JOI
 * 
 **/
const Joi = require("@hapi/joi")

isInt = function (value){
    try {
        Joi.assert(value, Joi.number());

    } catch (ValidationError) {
        return !ValidationError.isJoi
    }
    return true;

};

isAlphaNumeric = function (value){
    try {
        Joi.assert(value, Joi.string().alphanum());

    } catch (ValidationError) {
        return !ValidationError.isJoi
    }
    return true;

};


isString = function (value){
    console.log("String validation Check ->"+ value)
};

isPassword = function (value){
    console.log("Password validation Check ->"+ value)
};


module.exports={
    isAlphaNumeric,
    isInt
}
