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

/* Main Function Start */
var K9 = function(request){
    
    /* Data from Reqeuest */
    // try{
    //     service = request.metadata.subService;
    //     request1 = request.payLoad;
    // }catch(TypeError){
    //     console.log("Invalid Reqeust Schema : subservice or request Payload is missing");
    //     /**
    //      * TODO 
    //      * Retrun Canister
    //      */
    //     return null;
    // }

    service = "systemParameters";
    request1 = {
        "parameter":"123",
        "temporary":"sagjkhag",
        "parameter1":"ghqjwgr"
    };

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

        return null;
    }

    /* Iterate over the Roaster Sheet Validation List */
    rosterSheet.Roaster.services[service].validations.every(element => {
        if(element.feild in request1){
            /**
             * Calling K9-Core and Perform validation using K9's
             */
            try {
                var testResult = K9Core[element.assert](request1[element.feild]);
                console.log(testResult);
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
                
                return null;
            }
            
         }
        else{
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

    console.log(validationErrors);



};
/*--- Main Fuction End --- */
K9("temp");
console.log("K9 Ended");
