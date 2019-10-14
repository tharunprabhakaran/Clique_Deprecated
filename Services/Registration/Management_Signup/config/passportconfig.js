const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require('bcrypt');
const ExtractJWT = passportJWT.ExtractJwt;

const ManagentModel = require('../model/management');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, async (username, password, done) => {
  console.log('inside stratergy')
  try {
    const userDocument = await ManagentModel.findOne({email: username}).exec();
    console.log(userDocument);
    if(userDocument === null){
      return done('Incorrect Username / Password');
    }
    const passwordsMatch = await bcrypt.compare(password, userDocument.password);

    if (passwordsMatch) {
      return done(null, userDocument);
    } else {
      return done('Incorrect Username / Password');
    }
  } catch (error) {
    done(error);
  }
}));

passport.use(new JWTStrategy({
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'secretkey'
},(jwtpayload,done)=>{
    return done( null,jwtpayload)
}));