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
        }
    }
  }

  module.exports = {
      Roaster
  }