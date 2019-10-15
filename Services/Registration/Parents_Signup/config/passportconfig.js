const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require('bcrypt');
const ExtractJWT = passportJWT.ExtractJwt;

const Parents = require('../model/parents');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (username, password, done) => {
  try {
    const userDocument = await Parents.findOne({email: username}).exec();
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