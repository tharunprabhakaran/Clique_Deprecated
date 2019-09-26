/*
    ** K9 - Clique Validator Middleware **
    Validates the input request structure or Canister object based on the Service ID mentioned in the Canister Object.
    Author : Tharun
*/


const joi = require("@hapi/joi");
var rosterSheet = require('./Roster');
var K9Core = require('./K9_Core');

var K9 = function(request){
    

    service = "systemParameters"
    request1 = {
        "parameter":"helloWorld",
        "temporary":"*%",
        "name":"Tharun"
    }

    var validationErrors = []
    rosterSheet.Roaster.services["systemParameters"].validations.forEach(element => {
        if(element.feild in request1){
            /**
             * Calling K9-Core and Perform validation using K9's
             */
            
            var testResult = K9Core[element.assert](request1[element.feild]);
            console.log(testResult)
        //     if(testResult.ValidationError){
        //         validationError = {
        //             "validation":element.assert,
        //             "status":"failed"
        //         }
        //     }
        //     validationErrors.push(validationError);
         }
        else{
                if(element.mandatory){
                    console.log("Missing")
                }    
        }
    }); 



}

K9("temp")
console.log("K9 Ended")
