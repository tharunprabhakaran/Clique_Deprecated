const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require("body-parser");
const authroute  = require('./routes/auth');
const cors = require('cors');
const passportsetup = require('./config/passportconfig');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));;

app.use(express.static("public"));

app.use(passport.initialize());

app.use(bodyParser.json());

dotenv.config();



//connect to db 
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true,useUnifiedTopology: true  },(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected');}
});
mongoose.connection.on('error', (err) => {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();

});

//using cors
app.use(cors());


//Route Middleware
app.use('/api/management/personnel',authroute);

//Default port and host
app.set('port', process.env.PORT || 6000);
app.set('host', process.env.HOST || '127.0.0.1');

app.listen(app.get('port'), () => 
console.log('Server is UP and Running  '+ app.get('port')));