const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const passport = require('passport');
const JWTStrategy = passportJWT.Strategy;
const databaseConfig = require('./db.config');
const appConfig = require('./auth.config');

const { User } = require('../models/index');

module.exports = (pass) => {
  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: appConfig.secret,
  },
    (jwtPayload, cb) => {
      User.findById(jwtPayload._id)
        .then(user => {
          if (user) {
            let userInfo = JSON.stringify(user);
            userInfo = JSON.parse(userInfo);
            return cb(null, userInfo);
          }
          else {
            return cb('User does not exists', null);
          }


        })
        .catch(err => {
          return cb(err, null);
        });
    }
  ));
};