/*jshint esversion: 6 */

/*
    ** K9 - Clique Validator Middleware **
    Validates the input request structure or Canister object based on the Service ID mentioned in the Canister Object.
    Author : Tharun
*/

/* Imports */
var joi = require("@hapi/joi");
var rosterSheet = require('./Roster');
var K9Core = require('./K9_Core');

/* Processor Function Start */
var K9Processor = function(request){
    
    /* Data from Reqeuest */

    try{
        service = request.metadata.subService;
        payloads = request.payLoad;
    }catch(TypeError){
        console.log("Invalid Reqeust Schema : subservice or request Payload is missing");
        /**
         * TODO 
         * Retrun Canister
         */
        return null;
    }

    // service = "systemParameters";
    // payloads= [{
    //     "parameter":"123",
    //     "temporary":"sagjkhag",
    //     "parameter1":"ghqjwgr"
    // }];

    if(Array.isArray(payloads)){
        console.log(" Array");
        
    }
    else{
        console.log("Not Array");
        return (null,false);
    }

    /* Error Objects for Response */
    var validationError = {};
    var validationErrors = [];

    /* Check whether service is Present in the Roaster Sheet */
    var serviceObject = rosterSheet.Roaster.services;
    if(!(service in serviceObject)){
        console.log("Service Not present in the Roaster Sheet");
        /**
         * TODO 
         * Return Valid Canister response
         */

        return (null,false);
    }

    /* Iterate over the PayLoad */
    payloads.forEach(payload => {
        console.log("LOOP - Started");

        /* Iterate over the Roaster Sheet Validation List */
        rosterSheet.Roaster.services[service].validations.forEach(element => {
            console.log("Iterating Roaster Validation"+"---"+element.feild);

            if(element.feild in payload){

                /**
                 * Calling K9-Core and Perform validation using K9's
                 */
                try {
                    var testResult = K9Core[element.assert](payload[element.feild]);
                    console.log(element.feild+"--"+testResult);
                    if(!testResult){
                        validationError = {
                            "validation":element.assert,
                            "status":"failed"
                        };
                        validationErrors.push(validationError);
                    }
                } 
                catch (TypeError) {
                    console.log("Assert Not found in Roaster");
                    /**
                     * TODO
                     * Return Vaild Canister 
                     * */
                    
                    return (null,false);
                }
                
            }
            else{

                /**
                 * If value is Missing from Request
                 */
                    if(element.mandatory){
                        console.log("Missing");
                        validationError = {
                            "validation":element.assert,
                            "status":"missing"
                        };
                        validationErrors.push(validationError);

                    }    
            }
        });


    });
    if (validationErrors.length > 0){
        console.log("Errors Present-->"+validationErrors);
        return {"errors":validationErrors,"result":false};
    }
    else{
        return ([],true);
    }

};
/*--- Processor Fuction End --- */

//K9Processor("temp");

var K9 = function(request){
    var validationResult = K9Processor(request);
    console.log("K9 - Output --->"+validationResult.result);
    console.log("K9 - Output Result --->"+validationResult.errors);

    return validationResult;

};
console.log("K9 Ended");
module.exports = {
    K9
};