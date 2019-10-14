/*jshint esversion: 6 */

/* Imports */
const express = require("express");
const bodyParser = require("body-parser");


/* Initalisation */
var app = express();

/* Middleware */


/* ** Services ** */

// Info Servie : Information about the service
app.get("/info",function(request,response){
    response.json("Success").status(200);
});

// Create Attendance 
app.post("/attendance",function(request,response){
    response.json("Success").status(200);
});

//Get Attendance
app.get("/Attendance",function(request,response){
    response.json("Success").status(200);
});



/* ** Server Startup ** */
app.listen(4000,function(err,res){
    if(err){ console.log("Error Starting Server : "+err); }
    else{ console.log("STARTED : Attendance Service | Endpoint : localhost:4000");}
});
