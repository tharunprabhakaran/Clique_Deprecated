/*jshint esversion: 6 */
/**
 * 
 * K9 - Core 
 * Set of K9's with different validation methods
 * Depends on JOI
 * 
 **/
var Joi = require("@hapi/joi");

/**
 * Name : isInt
 * Desc : Test if an given value is an Integer
 */


isInt = function (value){
    try {
        Joi.assert(value, Joi.number());

    } catch (ValidationError) {
        return !ValidationError.isJoi;
    }
    return true;

};

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
    }
    return true;

};

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

};


module.exports={
    
    isInt,
    isAlphaNumeric,
    isString,
    isPassword
};

