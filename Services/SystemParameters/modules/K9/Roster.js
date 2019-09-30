/*jshint esversion: 6 */

var Roaster = {
    "name":"K9-Pug",
    "version":"0.1",
    "services":
    {
        "systemParameters":{
            "validations":
            [
                {
                    "feild":"parameter",
                    "assert":"isInt",
                    "mandatory":true
                },
                {
                    "feild":"temporary",
                    "assert":"isAlphaNumeric",
                    "mandatory":true
                },
                {
                    "feild":"parameter1",
                    "assert":"isPassword",
                    "mandatory":true
                
                }
            ]
        },
        "register":{
            "validations":
            [
                {
                    "feild":"parameter",
                    "assert":"isInt"
                },
                {
                    "feild":"parameter",
                    "assert":"isString"
                }
            ]
        },
        "createSystemParameters":{
            "validations":
            [
                {
                    "feild":"parameter",
                    "assert":"isAlphaNumeric"
                },
                {
                    "feild":"value",
                    "assert":"isAlphaNumeric"
                },
                {
                    "feild":"description",
                    "assert":"isAlphaNumeric"
                }
            ]
        }
    }
  };

  module.exports = {
      Roaster
  };