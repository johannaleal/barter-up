const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const db = require("../models");

// local strategy
passport.use(new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  async (email, password, cb) => {
    // get a user from the database
    const user = await db.User.findOne({ email });
    try {
      if (!user) {
        // send a message back about emails and passwords
        return cb(null, false, {
          message: "Please enter correct username an password"
        })
      }
      // does the password match
      if (password === user.password) {
        return cb(null, user, {
          message: "successfully logged in"
        })
      }
    } catch (err) {
      return cb(err);
    }
  }
));

// JWT Strategy
passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.PASSPORT_SECRET
  },
  async function(jwtPayload, cb) {
    const user = await db.User.find({ _id: jwtPayload.id})
    try {
      return cb(null, user)
    } catch (err) {
      return cb(err)
    }
  }

))

module.exports = passport;