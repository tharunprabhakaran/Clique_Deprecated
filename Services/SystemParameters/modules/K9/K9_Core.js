<<<<<<< HEAD
=======
/*jshint esversion: 6 */
>>>>>>> upstream/master
/**
 * 
 * K9 - Core 
 * Set of K9's with different validation methods
 * Depends on JOI
 * 
 **/
<<<<<<< HEAD
const Joi = require("@hapi/joi")
=======
var Joi = require("@hapi/joi");

/**
 * Name : isInt
 * Desc : Test if an given value is an Integer
 */

>>>>>>> upstream/master

isInt = function (value){
    try {
        Joi.assert(value, Joi.number());

    } catch (ValidationError) {
<<<<<<< HEAD
        return !ValidationError.isJoi
=======
        return !ValidationError.isJoi;
>>>>>>> upstream/master
    }
    return true;

};

<<<<<<< HEAD
isAlphaNumeric = function (value){
    try {
        Joi.assert(value, Joi.string().alphanum());

    } catch (ValidationError) {
        return !ValidationError.isJoi
=======
/**
 * Name : isAlphaNumeric
 * Desc : Test if an given value is an Alphanumberic (a-z|A-Z|0-9)
 */


isAlphaNumeric = function (value){
    try {
        Joi.assert(value, Joi.string()
            .alphanum());

    } catch (ValidationError) {
        return !ValidationError.isJoi;
>>>>>>> upstream/master
    }
    return true;

};

<<<<<<< HEAD

isString = function (value){
    console.log("String validation Check ->"+ value)
};

isPassword = function (value){
    console.log("Password validation Check ->"+ value)
=======
/**
 * Name : isString
 * Desc : Test if an given value is an String (Only characters)
 */

isString = function (value){
    try {
        Joi.assert(value, Joi.string()
            .empty(''));

    } catch (ValidationError) {
        return !ValidationError.isJoi;
    }
    return true;

};

/**
 * Name : isPassword
 * Desc : Test if an given value is an Password
 * Valdation : AlphaNumeric | Min : 6 | Max : 20 | No Special Characters
 */

isPassword = function (value){
    try {
        Joi.assert(value, Joi.string()
            .regex(/^[a-zA-Z0-9]{6,20}$/)
            .required());

    } catch (ValidationError) {
        return !ValidationError.isJoi;
    }
    return true;

>>>>>>> upstream/master
};


module.exports={
<<<<<<< HEAD
    isAlphaNumeric,
    isInt
}
=======
    
    isInt,
    isAlphaNumeric,
    isString,
    isPassword
};

>>>>>>> upstream/master
