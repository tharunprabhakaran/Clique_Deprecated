/*jshint esversion: 6 */
/* 
    Clique - System Parameters 
    ServiceID - systemParameters
    Version - 0.1
    Author - Tharun

*/

/* ------------- IMPORTS ------------- */
const express = require("express");
const canisterObject = require("./bin/canister");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
<<<<<<< HEAD
const systemParametersModel = require('./bin/Schema/systemParameterModel')
const DB_URL = "mongodb://localhost:27017/tharun"
const K9 = require("./modules/K9/K9")
=======
const systemParametersModel = require('./bin/Schema/systemParameterModel');
//const DB_URL = "mongodb://localhost:27017/tharun";
const DB_URL = "mongodb+srv://admin:admin@cliquedevelopment1-0pdxl.mongodb.net/test?retryWrites=true&w=majority";
const K9 = require("./modules/K9/K9");
>>>>>>> upstream/master
/*-------------------------------------*/

/* ------------- DATABASE CONNECTION ------------- */
mongoose.set('useNewUrlParser', true);
var isDBAlive = mongoose.connect(DB_URL,{useUnifiedTopology: true})
    .then(()=>{return true;})
    .catch((err)=>{throw err;});

/*-------------------------------------------------*/



/* ------------ MIDDLEWARES -----------*/

/* Logger */
var logger = function(req,res,next){
    console.log("-System Parameters - HIT");
    next();
};

var K9_Middleware = function(req,res,next){
    if(req.method == "GET"){
        console.log("Request -> GET");
        next();
    }else{
    console.log("Entering K9");
    var validationResult = K9.K9(req.body);
    console.log("K9 Done");
    
    if(validationResult.result==false){
        console.log(validationResult.errors);
        res.status(500).json(validationResult);
    }
    else{
        next();
    }
}
};

var K9_Middleware = function(req,res,next){
    K9(req.body);
    console.log("K9 Done");
    next()
}

/* Session Authentication */
var sessionAuthentication = function(req,res,next){

    if(req.headers.sessiontoken == 123){
        next();   
    } else{
        var responseCanister = canisterObject;
        responseCanister.error.code = "SP1000";
        responseCanister.error.description = "UnAuthorised Access";
        res.json(responseCanister).status(200); 
    }
};
/* ----------------------- */


/* ---- INITIALIZATION --- */
var app = express();
app.use(bodyParser.json());
app.use(logger);
app.use(K9_Middleware);
<<<<<<< HEAD
app.use(sessionAuthentication);
=======
//app.use(sessionAuthentication);
>>>>>>> upstream/master
/*-------------------------*/



/* ------ ENDPOINTS ----- */

// ** INFO ** 
<<<<<<< HEAD
app.post('/info', function(req, res){
    var responseCanister = canisterObject
=======
app.get('/info', function(req, res){
    var responseCanister = canisterObject;
>>>>>>> upstream/master
    var payLoad = {
        "serviceID":"systemParameters",
        "description": "Serves global parameters and various endpoints",
        "allocatedPort": "9001",
        "author":"Tharun"
<<<<<<< HEAD
    }

    //console.log(req.body)
    responseCanister.payLoad.push(payLoad)
=======
    };

    //console.log(req.body)
    responseCanister.payLoad.push(payLoad);
>>>>>>> upstream/master
    res.json(responseCanister).status(200);
 });

 // ** QueryAll SystemParameters **
 app.get("/parameter",function(req, res){
    systemParametersModel.find({},function(err,resultSet){
        console.log(resultSet);
        var responseCanister =canisterObject;
        var payLoad = [];
        resultSet.forEach(element => {
            payLoad.push(element);
        }); 
        responseCanister.payLoad=payLoad;
        res.json(responseCanister).status(200);
    });
 });

 // ** Query Parameter **
 app.get("/parameter/:parameterName",function(req,res){
     console.log("Query for -->"+req.params.parameterName);
     systemParametersModel.find({parameter:req.params.parameterName}, function(err,resultSet){
        //console.log(resultSet);
        var responseCanister =canisterObject;
        var payLoad = [];
        resultSet.forEach(element => {
            payLoad.push(element);
        });
        responseCanister.payLoad=payLoad;
        res.json(responseCanister).status(200);
     });
     
 });


 // ** Create New Parameter **
 app.post("/parameter",function(req,res){
    
<<<<<<< HEAD
    var systemParameter = new systemParametersModel({parameter:"TestParam",value:"TestVal",description:"TestDesc"})
    systemParameter.save()
        .then((err,resp) => res.json("Get Parameter").status(200))
        .catch((err,resp) => {res.json("Failed Parameter").status(200)})

   
})
=======
    var payLoad = req.body.payLoad;
    payLoad.forEach(element => {
        var systemParameter = new systemParametersModel({
            parameter:element.parameter,
            value:element.value,
            description:element.description
        });

        systemParameter.save()
    
            //Handle Database save positive case
            .then((err,resp) => {
              console.log("DB Saved ->"+element);
            })
    
            //Handle Database save negative case
            .catch((err,resp) => {
                var responseCanister = canisterObject;
                responseCanister.error={
                    "code":"SP1001",
                    "description":"Error Saving Data"
                };
                res.json().status(500);});  
    });
    res.json(req.body).status(200);
    

   
});
>>>>>>> upstream/master

/*------------------------*/


/* ----- Server Startup -----*/
app.listen(3000,function(){
    console.log("Server Started localhost:3000");
});
/*---------------------------*/

