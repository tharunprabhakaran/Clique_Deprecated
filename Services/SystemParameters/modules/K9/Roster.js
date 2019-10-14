<<<<<<< HEAD
=======
/*jshint esversion: 6 */

>>>>>>> upstream/master
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
<<<<<<< HEAD
                    "assert":"isInt"
                },
                {
                    "feild":"temporary",
                    "assert":"isAlphaNumeric"
                },
                {
                    "feild":"parameter1",
                    "assert":"isString",
                    "mandatory":false
=======
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
>>>>>>> upstream/master
                
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
<<<<<<< HEAD
        }
    }
  }

  module.exports = {
      Roaster
  }
=======
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
>>>>>>> upstream/master
