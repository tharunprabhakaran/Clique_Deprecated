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
const DB_URL = "mongodb://localhost:27017/tharun"
/*-------------------------------------*/

/* ------------- DATABASE CONNECTION ------------- */
var isDBAlive = mongoose.connect(DB_URL)
    .then(()=>{return true})
    .catch((err)=>{throw err})

/*-------------------------------------------------*/



/* ------------ MIDDLEWARES -----------*/

/* Logger */
var logger = function(req,res,next){
    console.log("-System Parameters - HIT")
    next()
}

/* Session Authentication */
var sessionAuthentication = function(req,res,next){

    if(req.headers.sessiontoken == 123){
        next()   
    } else{
        var responseCanister = canisterObject;
        responseCanister.error.code = "SP1000"
        responseCanister.error.description = "UnAuthorised Access"
        res.json(responseCanister).status(200); 
    }
}
/* ----------------------- */


/* ---- INITIALIZATION --- */
var app = express();
app.use(bodyParser.json())
app.use(logger);
app.use(sessionAuthentication);
/*-------------------------*/



/* ------ ENDPOINTS ----- */

// ** INFO ** 
app.get('/info', function(req, res){
    var responseCanister = canisterObject
    var payLoad = {
        "serviceID":"systemParameters",
        "description": "Serves global parameters and various endpoints",
        "allocatedPort": "9001",
        "author":"Tharun"
    }
    responseCanister.payLoad.push(payLoad)
    res.json(responseCanister).status(200);
 });

 // ** QueryAll SystemParameters **
 app.get("/allSystemParameters",function(req, res){
     res.json("All System Paramters").status(200)
 })

 // ** Query Parameter **
 app.get("/parameter",function(req,res){
     res.json("Get Parameter").status(200)
 })


 // ** Create New Parameter **
 app.post("/parameter",function(req,res){
    
    res.json("Get Parameter").status(200)
})

/*------------------------*/


/* ----- Server Startup -----*/
app.listen(3000,function(){
    console.log("Server Started localhost:3000")
});
/*---------------------------*/

